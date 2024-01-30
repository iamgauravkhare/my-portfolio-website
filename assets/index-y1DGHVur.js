(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) s(t);
  new MutationObserver((t) => {
    for (const l of t)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(t) {
    const l = {};
    return (
      t.integrity && (l.integrity = t.integrity),
      t.referrerPolicy && (l.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : t.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function s(t) {
    if (t.ep) return;
    t.ep = !0;
    const l = r(t);
    fetch(t.href, l);
  }
})();
let f = document.querySelectorAll(".slider"),
  b = document.querySelectorAll(".sliderCtn"),
  c = document.querySelectorAll(".bt1"),
  u = document.querySelectorAll(".bt2"),
  n = document.querySelectorAll(".bt3"),
  i = document.querySelectorAll(".bt4"),
  a = document.querySelectorAll(".bt5"),
  y = document.querySelectorAll(".bt6"),
  g = document.querySelectorAll(".card");
document.querySelectorAll(".btns");
g.forEach((d, e) => {
  (b[e].style.display = "initial"), (c[e].style.backgroundColor = "white");
  let r = 0;
  setInterval(function () {
    r === -500 && (r = 100),
      (r -= 100),
      r === -100
        ? ((c[e].style.backgroundColor = "gray"),
          (u[e].style.backgroundColor = "white"))
        : r === -200
        ? ((u[e].style.backgroundColor = "gray"),
          (n[e].style.backgroundColor = "white"))
        : r === -300
        ? ((n[e].style.backgroundColor = "gray"),
          (i[e].style.backgroundColor = "white"))
        : r === -400
        ? ((i[e].style.backgroundColor = "gray"),
          (a[e].style.backgroundColor = "white"))
        : r === -500
        ? ((a[e].style.backgroundColor = "gray"),
          (y[e].style.backgroundColor = "white"))
        : r === 0 &&
          ((c[e].style.backgroundColor = "white"),
          (y[e].style.backgroundColor = "gray")),
      (f[e].style.transform = `translateX(${r}%)`);
  }, 2e3);
});
