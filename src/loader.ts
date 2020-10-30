// @ts-nocheck

export default function loadYm() {
  /* eslint-disable */
  // tslint:disable-next-line: only-arrow-functions
  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      // tslint:disable-next-line: only-arrow-functions
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    (k = e.createElement(t)),
      (a = e.getElementsByTagName(t)[0]),
      (k.async = 1),
      (k.src = r),
      a.parentNode.insertBefore(k, a);
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
  /* eslint-enable */
}
