(function(){
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const params=new URLSearchParams(location.search);
  const base=location.pathname.endsWith('/course.html')||location.pathname.endsWith('course.html')?'':'./';
  fetch(base+'courses/catalog.json').then(r=>{if(!r.ok)throw Error('Không tải được danh mục');return r.json()}).then(init).catch(e=>{const el=document.querySelector('#course-grid,#markdown');if(el)el.innerHTML=`<p>${esc(e.message)}. Hãy chạy website qua HTTP thay vì mở file trực tiếp.</p>`});

  function init(data){ document.getElementById('course-grid')?catalog(data.courses):reader(data.courses); }
  function catalog(courses){
    const grid=document.getElementById('course-grid'), input=document.getElementById('search');
    const render=()=>{const q=input.value.toLocaleLowerCase('vi');const rows=courses.filter(c=>c.title.toLocaleLowerCase('vi').includes(q));grid.innerHTML=rows.map((c,i)=>`<article class="course-card"><span class="num">KHÓA ${(i+1).toString().padStart(2,'0')}</span><h3>${esc(c.title)}</h3><p>${c.lessonCount} bài · Lesson → Presentation → Exercise → Code → Project</p><a href="course.html?course=${encodeURIComponent(c.id)}">Xem nội dung →</a></article>`).join('')||'<p>Không tìm thấy khóa học phù hợp.</p>'};
    input.addEventListener('input',render);render();
  }
  function reader(courses){
    const course=courses.find(c=>c.id===params.get('course'))||courses[0];
    if(!course)return;
    document.getElementById('course-title').textContent=course.title;document.title=course.title+' — Science Workspace';
    const requested=params.get('doc'), selected=course.documents.find(d=>d.path===requested)||course.documents[0];
    const list=document.getElementById('doc-list'), search=document.getElementById('doc-search');
    const render=()=>{const q=search.value.toLocaleLowerCase('vi');let kind='';list.innerHTML=course.documents.filter(d=>d.title.toLocaleLowerCase('vi').includes(q)).map(d=>{const heading=d.kind!==kind?`<span class="doc-kind">${esc(kind=d.kind)}</span>`:'';return heading+`<a class="doc-link ${d.path===selected.path?'active':''}" href="?course=${encodeURIComponent(course.id)}&doc=${encodeURIComponent(d.path)}">${esc(d.title)}</a>`}).join('')};
    search.addEventListener('input',render);render();loadDocument(selected);
  }
  function loadDocument(doc){fetch(base+doc.path).then(r=>{if(!r.ok)throw Error('Không tải được tài liệu');return r.text()}).then(text=>{document.getElementById('markdown').innerHTML=doc.format==='md'?markdown(text,doc.path):codeDocument(text,doc)}).catch(e=>document.getElementById('markdown').innerHTML=`<p>${esc(e.message)}</p>`)}
  function codeDocument(source,doc){return `<h1>${esc(doc.title)}</h1><p><strong>4. Code</strong> · ${esc((doc.format||'text').toUpperCase())}</p><pre><code class="language-${esc(doc.format||'text')}">${esc(source)}</code></pre>`}
  function markdown(md,path){
    const dir=path.slice(0,path.lastIndexOf('/')+1);let code=[];
    md=md.replace(/```([\w+-]*)\n([\s\S]*?)```/g,(_,lang,src)=>`@@CODE${code.push(`<pre><code class="language-${esc(lang)}">${esc(src)}</code></pre>`)-1}@@`);
    const lines=md.split('\n'),out=[];let list=false,table=false;
    const inline=s=>esc(s).replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(_,a,u)=>`<img alt="${a}" src="${/^(https?:|\/)/.test(u)?u:dir+u}">`).replace(/\[([^\]]+)\]\(([^)]+)\)/g,(_,a,u)=>`<a href="${u.endsWith('.md')?'course.html?course='+encodeURIComponent(params.get('course'))+'&doc='+encodeURIComponent(dir+u):u}">${a}</a>`).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>');
    for(let i=0;i<lines.length;i++){let l=lines[i];if(/^@@CODE\d+@@$/.test(l)){if(list){out.push('</ul>');list=false}out.push(l);continue}if(/^\|.+\|\s*$/.test(l)&&i+1<lines.length&&/^\|?\s*:?-+/.test(lines[i+1])){if(list){out.push('</ul>');list=false}const heads=l.split('|').slice(1,-1);out.push('<table><thead><tr>'+heads.map(x=>`<th>${inline(x.trim())}</th>`).join('')+'</tr></thead><tbody>');table=true;i++;continue}if(table&&/^\|.+\|\s*$/.test(l)){const cells=l.split('|').slice(1,-1);out.push('<tr>'+cells.map(x=>`<td>${inline(x.trim())}</td>`).join('')+'</tr>');continue}if(table){out.push('</tbody></table>');table=false}const h=l.match(/^(#{1,4})\s+(.+)/);if(h){if(list){out.push('</ul>');list=false}out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`)}else if(/^[-*]\s+/.test(l)){if(!list){out.push('<ul>');list=true}out.push(`<li>${inline(l.replace(/^[-*]\s+/,''))}</li>`)}else if(/^>\s?/.test(l)){if(list){out.push('</ul>');list=false}out.push(`<blockquote>${inline(l.replace(/^>\s?/,''))}</blockquote>`)}else if(l.trim()){if(list){out.push('</ul>');list=false}out.push(`<p>${inline(l)}</p>`)}else if(list){out.push('</ul>');list=false}}
    if(list)out.push('</ul>');if(table)out.push('</tbody></table>');return out.join('\n').replace(/@@CODE(\d+)@@/g,(_,n)=>code[+n]);
  }
})();
