# tools-hub

Lena의 `tool-*` 공개 웹 도구 모음 **허브 페이지**.

> ✅ **공개됨** — https://hanariago.github.io/tools-hub/ (GitHub Pages, public)

## 구조 (정적)
```
tools-hub/
├── index.html   ← 도구 허브 (정적 카드 직접 나열)
└── README.md
```
JS·매니페스트 없이 **정적 HTML 한 장**. 크롤링 100%, 깨질 일 없음.

## 교차링크 방식
- **각 도구**는 footer에 **허브로 가는 링크 한 줄**만 둔다 (다른 도구를 일일이 나열하지 않음 → 도구 늘어도 안 불어남):
  ```html
  <a href="https://hanariago.github.io/tools-hub/">🔧 다른 도구 모음 →</a>
  ```
- **전체 목록**은 이 허브가 보여준다.

## 새 도구 추가하는 법 (배포 루틴에 포함)
새 도구를 배포하는 그 작업 세션에서 **함께 처리**한다:
1. 새 `tool-xxx` repo 배포 (GitHub Pages)
2. **이 repo `index.html`의 grid 안에 카드 `<a>` 하나 추가** (파일 상단 주석의 템플릿 형식) → 커밋·push
3. 새 도구 footer에 위 허브 링크 한 줄 추가

> 도구가 아주 많아져서 수동 추가가 번거로워지면 → GitHub Action으로 `tool-*` repo를 스캔해 허브 자동 생성으로 승격 (그 전엔 불필요).

## 공개 전환(Go-Live) 체크리스트
- [ ] repo Public 전환
- [ ] Settings → Pages → branch: main / 루트 활성화
- [ ] `https://hanariago.github.io/tools-hub/` 접속 확인
- [ ] 각 `tool-*` footer에 허브 링크 한 줄 추가 → push

---
Made by Lena · License: MIT
