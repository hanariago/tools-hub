/*
 * tools-hub 공유 푸터 스크립트
 * 사용법: 각 도구 index.html에 아래 한 줄 추가
 *   <script src="https://hanariago.github.io/tools-hub/footer.js" defer></script>
 *
 * 동작: tools.json을 읽어 "다른 도구" 링크 + 허브 링크를 자동 주입한다.
 *   - 주입 위치: [data-tools-footer] 요소가 있으면 그 안, 없으면 <footer>, 없으면 <body> 끝
 *   - 현재 보고 있는 도구는 목록에서 자동 제외
 *   - 같은 hanariago.github.io 도메인이라 CORS 문제 없음
 */
(function () {
  "use strict";

  var HUB = "https://hanariago.github.io/tools-hub/";
  var MANIFEST = HUB + "tools.json";

  function norm(u) { return (u || "").replace(/\/+$/, ""); }

  function render(data) {
    var here = norm(location.href.split("?")[0].split("#")[0]);
    var tools = (data && data.tools) || [];
    var others = tools.filter(function (t) {
      return t.status === "live" && norm(t.url) !== here;
    });

    var wrap = document.createElement("div");
    wrap.className = "tools-hub-footer";
    wrap.setAttribute("role", "navigation");
    wrap.style.cssText =
      "margin-top:28px;padding-top:18px;border-top:1px solid rgba(0,0,0,0.08);" +
      "font-size:12px;color:#6B6660;text-align:center;line-height:1.9;" +
      "font-family:inherit;max-width:680px;width:100%;";

    var html = '<a href="' + HUB + '" style="color:#3D6B5E;text-decoration:none;font-weight:600;">🔧 도구 모음 전체 보기</a>';
    if (others.length) {
      html += '<div style="margin-top:8px;">';
      html += others.map(function (t) {
        return '<a href="' + t.url + '" style="color:#6B6660;text-decoration:none;border-bottom:1px solid rgba(0,0,0,0.12);margin:0 6px;white-space:nowrap;">' +
          (t.emoji ? t.emoji + " " : "") + t.name + "</a>";
      }).join("");
      html += "</div>";
    }
    wrap.innerHTML = html;

    var target = document.querySelector("[data-tools-footer]");
    if (target) { target.appendChild(wrap); return; }
    var f = document.querySelector("footer");
    if (f) { f.appendChild(wrap); return; }
    document.body.appendChild(wrap);
  }

  fetch(MANIFEST, { cache: "no-cache" })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) { if (data) render(data); })
    .catch(function () { /* 허브 미공개 시 조용히 무시 */ });
})();
