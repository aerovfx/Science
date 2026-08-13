/* =====================================================================
   STEM PORTAL — BACKEND GOOGLE APPS SCRIPT
   Tài khoản triển khai: cgsharefive@gmail.com
   ---------------------------------------------------------------------
   Chức năng:
     1. taoToanBo()      → tạo 1 Google Spreadsheet (9 sheet) + 3 Google Form,
                           liên kết Form → Sheet, cài trigger, chia sẻ quyền.
     2. doPost(e)        → nhận dữ liệu JSON từ các trang HTML (GitHub Pages).
     3. doGet(e)         → trả dữ liệu JSON/JSONP cho dashboard.
     4. onFormSubmit     → chuẩn hoá phản hồi Google Form vào bảng tổng.
     5. capNhatTongHop() → dựng lại sheet "Tổng hợp" (chạy tay hoặc theo giờ).

   HƯỚNG DẪN TRIỂN KHAI: xem file HUONG-DAN.md cùng thư mục.
   ===================================================================== */

/* ───────────────────────── CẤU HÌNH ───────────────────────── */
var CONFIG = {
  OWNER_EMAIL   : 'cgsharefive@gmail.com',
  // Thư mục Drive "danhgia" của cgsharefive@gmail.com — nơi chứa Sheet + 3 Form
  // https://drive.google.com/drive/folders/1M9C1CaUaDlde5E3BjDUEz4vtAMeBZg4X
  FOLDER_ID     : '1M9C1CaUaDlde5E3BjDUEz4vtAMeBZg4X',
  FOLDER_NAME   : 'STEM — Khảo sát & Đánh giá',   // chỉ dùng khi FOLDER_ID trống/không mở được
  SPREADSHEET   : 'STEM — CSDL Khảo sát & Đánh giá',
  TIMEZONE      : 'Asia/Ho_Chi_Minh',
  // Bỏ trống = ai có link cũng ghi được. Điền chuỗi bí mật để bắt buộc token.
  TOKEN         : '',
  // URL file danh sách lớp/học sinh trên GitHub Pages (dùng cho napDanhSachTuWeb())
  ROSTER_URL    : 'https://aerovfx.github.io/Science/tools/khao-sat/data/students.json'
};

var SH = {
  SURVEY  : 'Khảo sát',
  PEER    : 'Đánh giá đồng đẳng',
  TEACHER : 'Điểm giáo viên',
  STUDENT : 'Học sinh',
  CLASS   : 'Lớp',
  SESSION : 'Buổi học',
  CRIT    : 'Tiêu chí',
  DASH    : 'Tổng hợp',
  LOG     : 'Nhật ký'
};

/* 6 tiêu chí — trùng khớp data/students.json */
var CRITERIA = [
  { id: 'teamwork',     label: 'Hợp tác nhóm',       icon: '🤝', desc: 'Phối hợp và hỗ trợ thành viên' },
  { id: 'creativity',   label: 'Sáng tạo',           icon: '💡', desc: 'Đề xuất ý tưởng mới' },
  { id: 'coding',       label: 'Kỹ năng lập trình',  icon: '💻', desc: 'Viết code chính xác, hiệu quả' },
  { id: 'problem',      label: 'Giải quyết vấn đề',  icon: '🧩', desc: 'Xử lý lỗi và tìm giải pháp' },
  { id: 'presentation', label: 'Thuyết trình',       icon: '🎤', desc: 'Trình bày rõ ràng, tự tin' },
  { id: 'attitude',     label: 'Thái độ học tập',    icon: '⭐', desc: 'Chăm chỉ, tích cực, đúng giờ' }
];
var CRIT_IDS    = CRITERIA.map(function (c) { return c.id; });
var CRIT_LABELS = CRITERIA.map(function (c) { return c.label; });

/* Cột của từng sheet (dòng 1) */
var HEADERS = {};
HEADERS[SH.SURVEY]  = ['Thời gian', 'Mã bản ghi', 'Mã HS', 'Họ tên', 'Trường', 'Khối/Lớp', 'Buổi số', 'Tên buổi',
                       'Số buổi đã học', 'Phần thích nhất', 'Đánh giá (1-5)', 'Độ khó', 'Sẽ giới thiệu',
                       'Mức cải thiện (%)', 'Kỹ năng nổi bật', 'Điều thích nhất', 'Cần cải thiện',
                       'Muốn học thêm', 'Nguồn', 'Thiết bị'];
HEADERS[SH.PEER]    = ['Thời gian', 'Khoá', 'Buổi số', 'Tên buổi', 'Lớp', 'Mã người đánh giá', 'Người đánh giá',
                       'Mã bạn được ĐG', 'Bạn được đánh giá'].concat(CRIT_LABELS, ['Trung bình', 'Nhận xét', 'Nguồn', 'Thiết bị']);
HEADERS[SH.TEACHER] = ['Thời gian', 'Khoá', 'Mã HS', 'Họ tên', 'Lớp', 'Giáo viên']
                       .concat(CRIT_LABELS, ['Trung bình', 'Nhận xét', 'Nguồn', 'Thiết bị']);
HEADERS[SH.STUDENT] = ['Mã HS', 'Họ tên', 'Lớp', 'Biểu tượng', 'Cập nhật'];
HEADERS[SH.CLASS]   = ['Mã lớp', 'Tên lớp', 'Giáo viên', 'Phòng', 'Lịch học'];
HEADERS[SH.SESSION] = ['Buổi số', 'Tên buổi', 'Giai đoạn'];
HEADERS[SH.CRIT]    = ['Mã tiêu chí', 'Tên tiêu chí', 'Biểu tượng', 'Mô tả'];
HEADERS[SH.DASH]    = ['Mã HS', 'Họ tên', 'Lớp', 'Số lượt bạn ĐG', 'TB bạn đánh giá', 'TB giáo viên',
                       'Điểm tổng hợp', 'Số khảo sát', 'Sao khảo sát TB', 'Cập nhật'];
HEADERS[SH.LOG]     = ['Thời gian', 'Hành động', 'Khoá', 'Kết quả', 'Chi tiết'];

/* Tiêu đề câu hỏi trong Google Form — dùng để ánh xạ khi có phản hồi */
var Q = {
  MA_HS      : 'Mã học sinh (nếu có)',
  HO_TEN     : 'Họ và tên',
  TRUONG     : 'Trường',
  LOP        : 'Lớp',
  BUOI       : 'Buổi học',
  SO_BUOI    : 'Số buổi đã học (0–36)',
  THICH_NHAT : 'Phần em thích nhất',
  TONG_THE   : 'Đánh giá tổng thể khoá học',
  DO_KHO     : 'Độ khó của khoá học',
  GIOI_THIEU : 'Em sẽ giới thiệu khoá học cho bạn khác?',
  CAI_THIEN  : 'Mức cải thiện kỹ năng của em (0–100 %)',
  KY_NANG    : 'Kỹ năng em thấy tiến bộ nhất',
  DIEU_THICH : 'Điều em thích nhất',
  CAN_CAI    : 'Điều cần cải thiện',
  HOC_THEM   : 'Chủ đề em muốn học thêm',
  MA_NGUOI   : 'Mã của em (người đánh giá)',
  TEN_NGUOI  : 'Họ tên của em (người đánh giá)',
  MA_BAN     : 'Mã của bạn được đánh giá',
  TEN_BAN    : 'Họ tên bạn được đánh giá',
  NHAN_XET   : 'Nhận xét',
  GIAO_VIEN  : 'Giáo viên đánh giá',
  NX_GV      : 'Nhận xét của giáo viên'
};

/* ═════════════════ 1. TẠO TOÀN BỘ HỆ THỐNG ═════════════════ */
/**
 * Chạy hàm này MỘT LẦN trong trình soạn thảo Apps Script.
 * Tạo: 1 Spreadsheet (9 sheet) + 3 Google Form + trigger + thư mục Drive.
 */
function taoToanBo() {
  var out = [];
  var folder = layHoacTaoThuMuc_();
  var ss = layHoacTaoBang_(folder);
  out.push('📊 Bảng tính: ' + ss.getUrl());

  var forms = taoCacForm_(ss, folder);
  forms.forEach(function (f) { out.push('📝 ' + f.name + ': ' + f.publishedUrl); });

  caiTrigger_();
  capNhatTongHop();
  ghiLog_('taoToanBo', '', 'OK', out.join(' | '));

  var msg = [
    '✅ ĐÃ TẠO XONG HỆ THỐNG',
    '',
    'Bảng tính (Google Sheets):',
    '  ' + ss.getUrl(),
    '',
    'Các biểu mẫu (Google Forms):'
  ].concat(forms.map(function (f) { return '  • ' + f.name + '\n    Điền: ' + f.publishedUrl + '\n    Sửa : ' + f.editUrl; }))
   .concat(['', 'BƯỚC TIẾP THEO: Triển khai > Tuỳ chọn triển khai mới > Ứng dụng web',
            '  – Thực thi với tư cách: Tôi (' + CONFIG.OWNER_EMAIL + ')',
            '  – Người có quyền truy cập: Bất kỳ ai',
            'Rồi dán URL /exec vào trang ket-noi.html.']).join('\n');
  Logger.log(msg);
  try { SpreadsheetApp.getUi().alert(msg); } catch (e) {}
  return msg;
}

function layHoacTaoThuMuc_() {
  if (CONFIG.FOLDER_ID) {
    try { return DriveApp.getFolderById(CONFIG.FOLDER_ID); }
    catch (e) { ghiLogAn_('Không mở được FOLDER_ID, dùng thư mục theo tên: ' + e.message); }
  }
  var it = DriveApp.getFoldersByName(CONFIG.FOLDER_NAME);
  return it.hasNext() ? it.next() : DriveApp.createFolder(CONFIG.FOLDER_NAME);
}
function ghiLogAn_(msg) { try { Logger.log(msg); } catch (e) {} }

/** Chuyển file vào đúng thư mục (bỏ khỏi "Drive của tôi") */
function chuyenVaoThuMuc_(fileId, folder) {
  try {
    var f = DriveApp.getFileById(fileId);
    if (f.moveTo) { f.moveTo(folder); return; }      // API mới
    folder.addFile(f);                                // API cũ
    DriveApp.getRootFolder().removeFile(f);
  } catch (e) { ghiLogAn_('Không chuyển được file ' + fileId + ': ' + e.message); }
}

function layHoacTaoBang_(folder) {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('SS_ID');
  var ss = null;
  if (id) { try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; } }
  if (!ss) {
    ss = SpreadsheetApp.create(CONFIG.SPREADSHEET);
    props.setProperty('SS_ID', ss.getId());
    chuyenVaoThuMuc_(ss.getId(), folder);
  }
  ss.setSpreadsheetTimeZone(CONFIG.TIMEZONE);
  Object.keys(HEADERS).forEach(function (name) { taoSheet_(ss, name, HEADERS[name]); });

  // xoá sheet mặc định "Sheet1"/"Trang tính1"
  ss.getSheets().forEach(function (s) {
    if (!HEADERS[s.getName()] && ss.getSheets().length > 1 && s.getLastRow() === 0) ss.deleteSheet(s);
  });

  napDuLieuNen_(ss);
  return ss;
}

function taoSheet_(ss, name, headers) {
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  var cur = sh.getRange(1, 1, 1, Math.max(sh.getLastColumn(), 1)).getValues()[0];
  if (cur.join('|') !== headers.join('|')) {
    sh.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  sh.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold').setBackground('#245c46').setFontColor('#ffffff')
    .setVerticalAlignment('middle').setWrap(true);
  sh.setFrozenRows(1);
  sh.setRowHeight(1, 40);
  if (sh.getMaxColumns() > headers.length) sh.deleteColumns(headers.length + 1, sh.getMaxColumns() - headers.length);
  return sh;
}

/** Nạp Tiêu chí + Buổi học + Lớp/Học sinh mặc định nếu bảng còn trống */
function napDuLieuNen_(ss) {
  var shC = ss.getSheetByName(SH.CRIT);
  if (shC.getLastRow() < 2) {
    shC.getRange(2, 1, CRITERIA.length, 4).setValues(CRITERIA.map(function (c) {
      return [c.id, c.label, c.icon, c.desc];
    }));
  }
  var shS = ss.getSheetByName(SH.SESSION);
  if (shS.getLastRow() < 2) {
    var rows = [];
    for (var i = 1; i <= 36; i++) rows.push([i, 'Buổi ' + i, Math.ceil(i / 6)]);
    shS.getRange(2, 1, rows.length, 3).setValues(rows);
  }
}

/** Tải danh sách lớp/học sinh/buổi học từ data/students.json trên GitHub Pages */
function napDanhSachTuWeb() {
  var ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SS_ID'));
  var res = UrlFetchApp.fetch(CONFIG.ROSTER_URL, { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) throw new Error('Không tải được ' + CONFIG.ROSTER_URL);
  var db = JSON.parse(res.getContentText());
  var n = luuDanhSach_(ss, db);
  ghiLog_('napDanhSachTuWeb', '', 'OK', JSON.stringify(n));
  Logger.log('Đã nạp: ' + JSON.stringify(n));
  return n;
}

function luuDanhSach_(ss, db) {
  var dem = { classes: 0, students: 0, sessions: 0 };
  if (db.classes && db.classes.length) {
    var shL = ss.getSheetByName(SH.CLASS);
    ghiDe_(shL, db.classes.map(function (c) { return [c.id, c.name, c.teacher || '', c.room || '', c.schedule || '']; }));
    dem.classes = db.classes.length;
  }
  if (db.students && db.students.length) {
    var now = new Date();
    var shH = ss.getSheetByName(SH.STUDENT);
    ghiDe_(shH, db.students.map(function (s) { return [s.id, s.name, s.classId, s.avatar || '🧑', now]; }));
    dem.students = db.students.length;
  }
  if (db.sessions && db.sessions.length) {
    var shB = ss.getSheetByName(SH.SESSION);
    ghiDe_(shB, db.sessions.map(function (s) { return [s.id, s.title, s.phase || '']; }));
    dem.sessions = db.sessions.length;
  }
  return dem;
}

function ghiDe_(sh, rows) {
  if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).clearContent();
  if (rows.length) sh.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
}

/* ═════════════════ 2. TẠO 3 GOOGLE FORM ═════════════════ */
function taoCacForm_(ss, folder) {
  var props = PropertiesService.getScriptProperties();
  var lop = docCot_(ss, SH.CLASS, 1, 2);      // [[mã, tên], ...]
  var buoi = docCot_(ss, SH.SESSION, 1, 2);
  var tenLop = lop.length ? lop.map(function (r) { return r[0] + ' — ' + r[1]; }) : ['8A', '8B', '9A', '10A'];
  var tenBuoi = buoi.length ? buoi.map(function (r) { return 'Buổi ' + r[0] + ' — ' + r[1]; }) : ['Buổi 1'];

  var ket = [];
  ket.push(dungForm_('FORM_SURVEY', '🧪 Khảo sát học viên — Chương trình STEM micro:bit',
    'Ý kiến của em giúp thầy cô cải thiện khoá học. Mỗi em điền 1 lần cho mỗi buổi/khoá.',
    function (f) {
      f.addTextItem().setTitle(Q.MA_HS).setHelpText('Ví dụ: s001 — bỏ trống nếu không nhớ');
      f.addTextItem().setTitle(Q.HO_TEN).setRequired(true);
      f.addTextItem().setTitle(Q.TRUONG);
      f.addListItem().setTitle(Q.LOP).setChoiceValues(tenLop).setRequired(true);
      f.addListItem().setTitle(Q.BUOI).setChoiceValues(tenBuoi);
      f.addTextItem().setTitle(Q.SO_BUOI)
        .setValidation(FormApp.createTextValidation().requireNumberBetween(0, 36).build());
      f.addCheckboxItem().setTitle(Q.THICH_NHAT)
        .setChoiceValues(['Lập trình MakeCode', 'Cảm biến', 'Robot & Servo', 'Nhà thông minh', 'MicroPython', 'Dự án cuối khoá']);
      f.addScaleItem().setTitle(Q.TONG_THE).setBounds(1, 5)
        .setLabels('Rất kém', 'Xuất sắc').setRequired(true);
      f.addMultipleChoiceItem().setTitle(Q.DO_KHO).setChoiceValues(['Quá dễ', 'Vừa phải', 'Hơi khó', 'Quá khó']);
      f.addMultipleChoiceItem().setTitle(Q.GIOI_THIEU).setChoiceValues(['Chắc chắn', 'Có thể', 'Không']);
      f.addTextItem().setTitle(Q.CAI_THIEN)
        .setValidation(FormApp.createTextValidation().requireNumberBetween(0, 100).build());
      f.addCheckboxItem().setTitle(Q.KY_NANG)
        .setChoiceValues(['Tư duy giải quyết vấn đề', 'Lập trình', 'Làm việc nhóm', 'Sáng tạo', 'Điện tử cơ bản', 'Thuyết trình']);
      f.addParagraphTextItem().setTitle(Q.DIEU_THICH);
      f.addParagraphTextItem().setTitle(Q.CAN_CAI);
      f.addTextItem().setTitle(Q.HOC_THEM).setHelpText('AI, IoT, Robotics nâng cao…');
    }, ss, folder, props));

  ket.push(dungForm_('FORM_PEER', '🔄 Đánh giá đồng đẳng — Học viên chấm bạn cùng nhóm',
    'Chấm trung thực và tôn trọng. Mỗi phiếu dành cho MỘT bạn trong buổi học.',
    function (f) {
      f.addListItem().setTitle(Q.BUOI).setChoiceValues(tenBuoi).setRequired(true);
      f.addListItem().setTitle(Q.LOP).setChoiceValues(tenLop).setRequired(true);
      f.addTextItem().setTitle(Q.MA_NGUOI);
      f.addTextItem().setTitle(Q.TEN_NGUOI).setRequired(true);
      f.addTextItem().setTitle(Q.MA_BAN);
      f.addTextItem().setTitle(Q.TEN_BAN).setRequired(true);
      CRITERIA.forEach(function (c) {
        f.addScaleItem().setTitle(c.icon + ' ' + c.label).setHelpText(c.desc)
          .setBounds(1, 5).setLabels('Cần cố gắng', 'Xuất sắc').setRequired(true);
      });
      f.addParagraphTextItem().setTitle(Q.NHAN_XET).setHelpText('Một điểm mạnh + một góp ý cho bạn');
    }, ss, folder, props));

  ket.push(dungForm_('FORM_TEACHER', '👩‍🏫 Phiếu đánh giá của giáo viên',
    'Giáo viên chấm từng học sinh theo 6 tiêu chí của chương trình.',
    function (f) {
      f.addTextItem().setTitle(Q.GIAO_VIEN).setRequired(true);
      f.addListItem().setTitle(Q.LOP).setChoiceValues(tenLop).setRequired(true);
      f.addTextItem().setTitle(Q.MA_HS);
      f.addTextItem().setTitle(Q.HO_TEN).setRequired(true);
      CRITERIA.forEach(function (c) {
        f.addScaleItem().setTitle(c.icon + ' ' + c.label).setHelpText(c.desc)
          .setBounds(1, 5).setLabels('Cần cố gắng', 'Xuất sắc').setRequired(true);
      });
      f.addParagraphTextItem().setTitle(Q.NX_GV);
    }, ss, folder, props));

  return ket;
}

function dungForm_(propKey, title, desc, build, ss, folder, props) {
  var id = props.getProperty(propKey), form = null;
  if (id) { try { form = FormApp.openById(id); } catch (e) { form = null; } }
  if (!form) {
    form = FormApp.create(title);
    props.setProperty(propKey, form.getId());
    build(form);
    chuyenVaoThuMuc_(form.getId(), folder);
  }
  form.setTitle(title).setDescription(desc)
      .setCollectEmail(false).setAllowResponseEdits(false)
      .setConfirmationMessage('✅ Đã ghi nhận. Cảm ơn em! — STEM Portal');
  // chỉ nối lần đầu — gọi setDestination lặp lại sẽ sinh thêm sheet "Câu trả lời" trùng
  try {
    if (form.getDestinationId() !== ss.getId()) {
      form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
    }
  } catch (e) {
    try { form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId()); } catch (e2) {}
  }
  return { key: propKey, name: title, id: form.getId(), publishedUrl: form.getPublishedUrl(), editUrl: form.getEditUrl() };
}

function docCot_(ss, sheetName, from, to) {
  var sh = ss.getSheetByName(sheetName);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, from, sh.getLastRow() - 1, to - from + 1).getValues()
           .filter(function (r) { return String(r[0]).trim() !== ''; });
}

/* ═════════════════ 3. TRIGGER ═════════════════ */
function caiTrigger_() {
  var props = PropertiesService.getScriptProperties();
  var existing = ScriptApp.getProjectTriggers().map(function (t) { return t.getHandlerFunction() + '|' + t.getTriggerSourceId(); });
  ['FORM_SURVEY', 'FORM_PEER', 'FORM_TEACHER'].forEach(function (k) {
    var id = props.getProperty(k);
    if (!id) return;
    if (existing.indexOf('xuLyFormSubmit|' + id) >= 0) return;
    ScriptApp.newTrigger('xuLyFormSubmit').forForm(FormApp.openById(id)).onFormSubmit().create();
  });
  if (existing.filter(function (x) { return x.indexOf('capNhatTongHop') === 0; }).length === 0) {
    ScriptApp.newTrigger('capNhatTongHop').timeBased().everyHours(6).create();
  }
}

/** Chuẩn hoá phản hồi Google Form → bảng tổng */
function xuLyFormSubmit(e) {
  try {
    var props = PropertiesService.getScriptProperties();
    var formId = e.source.getId();
    var ans = {};
    e.response.getItemResponses().forEach(function (ir) {
      ans[ir.getItem().getTitle()] = ir.getResponse();
    });
    var thoiGian = e.response.getTimestamp() || new Date();

    if (formId === props.getProperty('FORM_SURVEY')) {
      var b = tachSo_(ans[Q.BUOI]);
      luuKhaoSat_({
        id: 'form_' + e.response.getId(),
        studentId: ans[Q.MA_HS] || '', studentName: ans[Q.HO_TEN] || '',
        school: ans[Q.TRUONG] || '', classId: tachMaLop_(ans[Q.LOP]),
        sessionId: b.so, sessionTitle: b.ten,
        sessions: ans[Q.SO_BUOI] || '', fav: ans[Q.THICH_NHAT] || [],
        overall: ans[Q.TONG_THE] || '', difficulty: ans[Q.DO_KHO] || '',
        recommend: ans[Q.GIOI_THIEU] || '', skill: ans[Q.CAI_THIEN] || '',
        skill_gained: ans[Q.KY_NANG] || [], best: ans[Q.DIEU_THICH] || '',
        improve: ans[Q.CAN_CAI] || '', topic: ans[Q.HOC_THEM] || '',
        submittedAt: thoiGian
      }, 'Google Form', '');
    } else if (formId === props.getProperty('FORM_PEER')) {
      var bb = tachSo_(ans[Q.BUOI]);
      luuDanhGiaDongDang_({
        sessionId: bb.so, sessionTitle: bb.ten, classId: tachMaLop_(ans[Q.LOP]),
        raterId: ans[Q.MA_NGUOI] || '', raterName: ans[Q.TEN_NGUOI] || '',
        targetId: ans[Q.MA_BAN] || '', targetName: ans[Q.TEN_BAN] || '',
        scores: layDiemTieuChi_(ans), note: ans[Q.NHAN_XET] || '', savedAt: thoiGian
      }, 'Google Form', '');
    } else if (formId === props.getProperty('FORM_TEACHER')) {
      luuDiemGiaoVien_({
        studentId: ans[Q.MA_HS] || '', studentName: ans[Q.HO_TEN] || '',
        classId: tachMaLop_(ans[Q.LOP]), teacher: ans[Q.GIAO_VIEN] || '',
        scores: layDiemTieuChi_(ans), note: ans[Q.NX_GV] || '', updatedAt: thoiGian
      }, 'Google Form', '');
    }
    ghiLog_('formSubmit', formId, 'OK', '');
  } catch (err) {
    ghiLog_('formSubmit', '', 'LỖI', err.message);
  }
}

function layDiemTieuChi_(ans) {
  var s = {};
  CRITERIA.forEach(function (c) {
    var v = ans[c.icon + ' ' + c.label];
    if (v !== undefined && v !== '') s[c.id] = Number(v);
  });
  return s;
}
function tachSo_(v) {
  var t = String(v || '');
  var m = t.match(/(\d+)/);
  return { so: m ? Number(m[1]) : '', ten: t.replace(/^Buổi\s*\d+\s*[—-]?\s*/, '') };
}
function tachMaLop_(v) { return String(v || '').split('—')[0].trim(); }

/* ═════════════════ 4. GHI DỮ LIỆU ═════════════════ */
function bang_() {
  var id = PropertiesService.getScriptProperties().getProperty('SS_ID');
  if (!id) throw new Error('Chưa chạy taoToanBo() — bảng tính chưa tồn tại.');
  return SpreadsheetApp.openById(id);
}

/** Thêm dòng mới, hoặc ghi đè dòng có cùng "khoá" ở cột 2 */
function upsert_(sheetName, khoa, row) {
  var ss = bang_(), sh = ss.getSheetByName(sheetName) || taoSheet_(ss, sheetName, HEADERS[sheetName]);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var last = sh.getLastRow();
    var dong = 0;
    if (khoa && last > 1) {
      var keys = sh.getRange(2, 2, last - 1, 1).getValues();
      for (var i = 0; i < keys.length; i++) {
        if (String(keys[i][0]) === String(khoa)) { dong = i + 2; break; }
      }
    }
    if (!dong) dong = last + 1;
    sh.getRange(dong, 1, 1, row.length).setValues([row]);
    return { row: dong, updated: dong <= last };
  } finally {
    lock.releaseLock();
  }
}

function luuKhaoSat_(p, nguon, thietBi) {
  var khoa = p.id || ('sv_' + (p.studentId || p.studentName) + '_' + (p.sessionId || ''));
  var row = [
    p.submittedAt ? new Date(p.submittedAt) : new Date(), khoa,
    p.studentId || '', p.studentName || '', p.school || '', p.classId || p.grade || '',
    p.sessionId || '', p.sessionTitle || '', p.sessions || '',
    gop_(p.fav), p.overall || '', p.difficulty || '', p.recommend || '',
    p.skill || '', gop_(p.skill_gained), p.best || '', p.improve || '', p.topic || '',
    nguon || 'Web', thietBi || ''
  ];
  return upsert_(SH.SURVEY, khoa, row);
}

function luuDanhGiaDongDang_(p, nguon, thietBi) {
  var khoa = [p.raterId || p.raterName, 'b' + (p.sessionId || 0), p.targetId || p.targetName].join('|');
  var diem = CRIT_IDS.map(function (id) { return (p.scores && p.scores[id]) || ''; });
  var so = diem.filter(function (v) { return v !== ''; }).map(Number);
  var tb = so.length ? Math.round(so.reduce(function (a, b) { return a + b; }, 0) / so.length * 10) / 10 : '';
  var row = [
    p.savedAt ? new Date(p.savedAt) : new Date(), khoa,
    p.sessionId || '', p.sessionTitle || '', p.classId || '',
    p.raterId || '', p.raterName || '', p.targetId || '', p.targetName || ''
  ].concat(diem, [tb, p.note || '', nguon || 'Web', thietBi || '']);
  return upsert_(SH.PEER, khoa, row);
}

function luuDiemGiaoVien_(p, nguon, thietBi) {
  var khoa = 'gv|' + (p.studentId || p.studentName) + '|' + (p.teacher || '');
  var diem = CRIT_IDS.map(function (id) { return (p.scores && p.scores[id]) || ''; });
  var so = diem.filter(function (v) { return v !== ''; }).map(Number);
  var tb = so.length ? Math.round(so.reduce(function (a, b) { return a + b; }, 0) / so.length * 10) / 10 : '';
  var row = [
    p.updatedAt ? new Date(p.updatedAt) : new Date(), khoa,
    p.studentId || '', p.studentName || '', p.classId || '', p.teacher || ''
  ].concat(diem, [tb, p.note || '', nguon || 'Web', thietBi || '']);
  return upsert_(SH.TEACHER, khoa, row);
}

function gop_(v) { return Array.isArray(v) ? v.join(', ') : (v || ''); }

/* ═════════════════ 5. WEB APP: POST ═════════════════ */
function doPost(e) {
  var body = {};
  try { body = JSON.parse(e.postData.contents); } catch (err) {
    return traVe_({ ok: false, error: 'JSON không hợp lệ' });
  }
  if (CONFIG.TOKEN && body.token !== CONFIG.TOKEN) {
    return traVe_({ ok: false, error: 'Sai mã bảo mật' });
  }
  try {
    var ket = xuLyGoi_(body);
    ghiLog_('POST:' + body.type, body.uid || '', 'OK', JSON.stringify(ket).slice(0, 400));
    return traVe_({ ok: true, result: ket });
  } catch (err) {
    ghiLog_('POST:' + (body.type || '?'), body.uid || '', 'LỖI', err.message);
    return traVe_({ ok: false, error: err.message });
  }
}

function xuLyGoi_(body) {
  var type = body.type, p = body.payload || {}, dev = body.device || '';
  switch (type) {
    case 'survey':        return luuKhaoSat_(p, 'Web', dev);
    case 'peer_eval':     return luuDanhGiaDongDang_(p, 'Web', dev);
    case 'peer_eval_set': // nhiều bạn trong 1 buổi
      return (p.items || []).map(function (x) {
        return luuDanhGiaDongDang_(Object.assign({}, x, {
          sessionId: p.sessionId, sessionTitle: p.sessionTitle, classId: p.classId,
          raterId: p.raterId, raterName: p.raterName
        }), 'Web', dev);
      });
    case 'teacher_grade': return luuDiemGiaoVien_(p, 'Web', dev);
    case 'roster':        return luuDanhSach_(bang_(), p);
    case 'batch':
      return (body.items || []).map(function (it) {
        try { return { type: it.type, ok: true, r: xuLyGoi_({ type: it.type, payload: it.payload, device: it.device }) }; }
        catch (err) { return { type: it.type, ok: false, error: err.message }; }
      });
    case 'ping':          return { pong: true };
    default: throw new Error('Loại dữ liệu không hỗ trợ: ' + type);
  }
}

/* ═════════════════ 6. WEB APP: GET ═════════════════ */
function doGet(e) {
  var p = (e && e.parameter) || {};
  var action = p.action || 'ping';
  var kq;
  try {
    switch (action) {
      case 'ping':     kq = { ok: true, service: 'STEM Portal API', time: new Date().toISOString(), config: thongTinCauHinh_() }; break;
      case 'config':   kq = { ok: true, config: thongTinCauHinh_() }; break;
      case 'roster':   kq = { ok: true, data: docDanhSach_() }; break;
      case 'surveys':  kq = { ok: true, data: docSheet_(SH.SURVEY, p.limit) }; break;
      case 'peer':     kq = { ok: true, data: docSheet_(SH.PEER, p.limit) }; break;
      case 'teacher':  kq = { ok: true, data: docSheet_(SH.TEACHER, p.limit) }; break;
      case 'dashboard':kq = { ok: true, data: docSheet_(SH.DASH, p.limit) }; break;
      case 'summary':  kq = { ok: true, data: tomTat_() }; break;
      case 'rebuild':  capNhatTongHop(); kq = { ok: true, data: 'Đã cập nhật Tổng hợp' }; break;
      default: kq = { ok: false, error: 'Hành động không hỗ trợ: ' + action };
    }
  } catch (err) { kq = { ok: false, error: err.message }; }
  return traVe_(kq, p.callback);
}

function traVe_(obj, callback) {
  var txt = JSON.stringify(obj);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + txt + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(txt).setMimeType(ContentService.MimeType.JSON);
}

function thongTinCauHinh_() {
  var props = PropertiesService.getScriptProperties();
  var ra = { spreadsheetId: props.getProperty('SS_ID') || '', forms: {} };
  if (ra.spreadsheetId) ra.spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/' + ra.spreadsheetId + '/edit';
  [['FORM_SURVEY', 'khaoSat'], ['FORM_PEER', 'dongDang'], ['FORM_TEACHER', 'giaoVien']].forEach(function (pair) {
    var id = props.getProperty(pair[0]);
    if (!id) return;
    try {
      var f = FormApp.openById(id);
      ra.forms[pair[1]] = { title: f.getTitle(), url: f.getPublishedUrl(), editUrl: f.getEditUrl() };
    } catch (e) {}
  });
  return ra;
}

function docSheet_(name, limit) {
  var sh = bang_().getSheetByName(name);
  if (!sh || sh.getLastRow() < 2) return [];
  var head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  var n = sh.getLastRow() - 1;
  var lim = Math.min(Number(limit) || n, n);
  var vals = sh.getRange(sh.getLastRow() - lim + 1, 1, lim, sh.getLastColumn()).getValues();
  return vals.map(function (r) {
    var o = {};
    head.forEach(function (h, i) { o[h] = (r[i] instanceof Date) ? r[i].toISOString() : r[i]; });
    return o;
  });
}

function docDanhSach_() {
  var ss = bang_();
  return {
    classes: docCot_(ss, SH.CLASS, 1, 5).map(function (r) {
      return { id: r[0], name: r[1], teacher: r[2], room: r[3], schedule: r[4] };
    }),
    students: docCot_(ss, SH.STUDENT, 1, 4).map(function (r) {
      return { id: r[0], name: r[1], classId: r[2], avatar: r[3] || '🧑' };
    }),
    sessions: docCot_(ss, SH.SESSION, 1, 3).map(function (r) {
      return { id: Number(r[0]), title: r[1], phase: Number(r[2]) || 1 };
    }),
    criteria: docCot_(ss, SH.CRIT, 1, 4).map(function (r) {
      return { id: r[0], label: r[1], icon: r[2], desc: r[3] };
    })
  };
}

function tomTat_() {
  var ss = bang_();
  var dem = function (n) { var s = ss.getSheetByName(n); return s ? Math.max(0, s.getLastRow() - 1) : 0; };
  return {
    khaoSat: dem(SH.SURVEY), dongDang: dem(SH.PEER), giaoVien: dem(SH.TEACHER),
    hocSinh: dem(SH.STUDENT), lop: dem(SH.CLASS),
    capNhat: Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'dd/MM/yyyy HH:mm')
  };
}

/* ═════════════════ 7. SHEET TỔNG HỢP ═════════════════ */
function capNhatTongHop() {
  var ss = bang_();
  var hs = docCot_(ss, SH.STUDENT, 1, 3);            // [mã, tên, lớp]
  var peer = docSheet_(SH.PEER);
  var gv = docSheet_(SH.TEACHER);
  var sv = docSheet_(SH.SURVEY);

  var map = {};
  hs.forEach(function (r) {
    map[r[0]] = { id: r[0], name: r[1], classId: r[2], peer: [], gv: [], sv: [] };
  });
  var timHS = function (ma, ten) {
    if (map[ma]) return map[ma];
    for (var k in map) if (map[k].name === ten) return map[k];
    if (!ma && !ten) return null;
    map[ma || ten] = { id: ma || '', name: ten || '', classId: '', peer: [], gv: [], sv: [] };
    return map[ma || ten];
  };

  peer.forEach(function (r) {
    var o = timHS(r['Mã bạn được ĐG'], r['Bạn được đánh giá']);
    if (o && r['Trung bình'] !== '') o.peer.push(Number(r['Trung bình']));
  });
  gv.forEach(function (r) {
    var o = timHS(r['Mã HS'], r['Họ tên']);
    if (o && r['Trung bình'] !== '') o.gv.push(Number(r['Trung bình']));
  });
  sv.forEach(function (r) {
    var o = timHS(r['Mã HS'], r['Họ tên']);
    if (o) o.sv.push(Number(r['Đánh giá (1-5)']) || 0);
  });

  var tb = function (a) { return a.length ? Math.round(a.reduce(function (x, y) { return x + y; }, 0) / a.length * 10) / 10 : ''; };
  var now = new Date();
  var rows = Object.keys(map).map(function (k) {
    var o = map[k];
    var p = tb(o.peer), g = tb(o.gv);
    var tong = (p !== '' && g !== '') ? Math.round((p * 0.4 + g * 0.6) * 10) / 10 : (g !== '' ? g : p);
    return [o.id, o.name, o.classId, o.peer.length, p, g, tong, o.sv.length, tb(o.sv.filter(Boolean)), now];
  }).sort(function (a, b) { return String(a[2] + a[1]).localeCompare(String(b[2] + b[1]), 'vi'); });

  var sh = ss.getSheetByName(SH.DASH) || taoSheet_(ss, SH.DASH, HEADERS[SH.DASH]);
  ghiDe_(sh, rows);
  if (rows.length) {
    sh.getRange(2, 5, rows.length, 3).setNumberFormat('0.0');
    sh.getRange(2, 10, rows.length, 1).setNumberFormat('dd/MM/yyyy HH:mm');
  }
  ghiLog_('capNhatTongHop', '', 'OK', rows.length + ' học sinh');
  return rows.length;
}

/* ═════════════════ 8. NHẬT KÝ ═════════════════ */
function ghiLog_(hanhDong, khoa, ketQua, chiTiet) {
  try {
    var ss = bang_();
    var sh = ss.getSheetByName(SH.LOG) || taoSheet_(ss, SH.LOG, HEADERS[SH.LOG]);
    sh.appendRow([new Date(), hanhDong, khoa || '', ketQua || '', String(chiTiet || '').slice(0, 800)]);
    if (sh.getLastRow() > 5000) sh.deleteRows(2, 1000);
  } catch (e) { /* không để log làm hỏng luồng chính */ }
}

/* ═════════════════ 9. TIỆN ÍCH CHẠY TAY ═════════════════ */
function xemThongTin() {
  var t = thongTinCauHinh_();
  Logger.log(JSON.stringify(t, null, 2));
  return t;
}

/** Xoá toàn bộ dữ liệu nghiệp vụ (giữ danh sách lớp/học sinh). Cẩn thận! */
function xoaDuLieuNghiepVu() {
  var ss = bang_();
  [SH.SURVEY, SH.PEER, SH.TEACHER, SH.DASH].forEach(function (n) {
    var sh = ss.getSheetByName(n);
    if (sh && sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).clearContent();
  });
  ghiLog_('xoaDuLieuNghiepVu', '', 'OK', '');
}
