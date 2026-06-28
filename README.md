# tools-hub

Lena의 `tool-*` 공개 웹 도구 모음 **허브 + 자동 교차링크 시스템**.

> 현재 **private**. 도구가 어느 정도 쌓이면 public 전환 + GitHub Pages 활성화 예정.
> (GitHub Pages 무료 플랜은 public repo만 호스팅하므로, public 전환 전까지 교차링크는 비활성.)

## 구성
```
tools-hub/
├── index.html   ← 도구 허브 랜딩 (tools.json 읽어 카드 자동 렌더)
├── tools.json   ← ★ 단일 진실 공급원 (모든 도구 목록)
├── footer.js    ← 각 도구가 공유하는 스크립트 (다른 도구·허브 링크 자동 주입)
└── README.md
```

## 새 도구 추가하는 법 (= 교차링크 갱신)
1. 새 `tool-xxx` repo 만들어 GitHub Pages로 배포
2. **`tools.json`의 `tools` 배열에 객체 하나 추가** 후 push
3. 끝. 허브와 기존 모든 도구의 footer에 자동 반영

`tools.json` 항목 형식:
```json
{
  "id": "char-counter",
  "name": "글자 수 세기",
  "name_en": "Character Counter",
  "url": "https://hanariago.github.io/tool-char-counter/",
  "repo": "https://github.com/hanariago/tool-char-counter",
  "desc": "한 줄 설명",
  "emoji": "🔢",
  "tags": ["text"],
  "status": "live"
}
```
> `status`가 `"live"`인 도구만 노출됩니다. 준비 중인 도구는 다른 값으로 두면 숨겨집니다.

## 각 도구에 교차링크 붙이는 법 (공개 전환 후)
도구 `index.html`의 `<footer>` 안에 한 줄 추가:
```html
<script src="https://hanariago.github.io/tools-hub/footer.js" defer></script>
```
원하는 위치를 지정하려면 `<div data-tools-footer></div>`를 두면 그 안에 주입됩니다.

## 공개 전환(Go-Live) 체크리스트
- [ ] repo를 Public으로 전환
- [ ] Settings → Pages → branch: main / 루트 활성화
- [ ] `https://hanariago.github.io/tools-hub/` 접속 확인
- [ ] 각 `tool-*`에 `footer.js` 스크립트 한 줄 추가 → push
- [ ] (선택) sitemap/SEO 메타 보강

---
Made by Lena · License: MIT
