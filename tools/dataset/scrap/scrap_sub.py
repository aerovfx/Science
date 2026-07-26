import os, re, requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def fetch_links(index_url):
    r = requests.get(index_url)
    soup = BeautifulSoup(r.text, "html.parser")
    links = []
    for a in soup.select("a"):
        href = a.get("href", "")
        if "trac-nghiem-vat-li-12-ket-noi-bai" in href:  # lọc link con
            links.append(urljoin(index_url, href))
    return list(set(links))

def scrap_quiz(url, outdir):
    r = requests.get(url)
    text = r.text
    questions = re.findall(r"(Câu\s*\d+:.+?)(?=Câu\s*\d+:|$)", text, re.S)

    data = []
    for q in questions:
        number = re.search(r"Câu\s*\d+", q).group()
        question = re.sub(r"Câu\s*\d+: ?", "", q.strip())
        data.append({"number": number, "question": question, "choices": [], "answer": None})

    # tên file từ slug của URL
    slug = url.split("/")[-1]
    filepath = os.path.join(outdir, f"{slug}.json")
    os.makedirs(outdir, exist_ok=True)

    import json
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"✅ Saved {len(data)} questions -> {filepath}")

if __name__ == "__main__":
    url = input("Nhập URL trang trắc nghiệm: ").strip()
    sub_links = fetch_links(url)
    if not sub_links:
        print("⚠️ Trang này không chứa link con phù hợp.")
    else:
        for link in sub_links:
            scrap_quiz(link, outdir="questions/vat-li-12-ket-noi-tri-thuc")