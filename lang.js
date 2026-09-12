// Dil değişimi. Tercih localStorage'da tutulur; ilk ziyarette tarayıcı dilinden
// seçilir. JavaScript çalışmazsa sayfa TR bölümüyle okunabilir kalır — bölümler
// HTML'de "active" sınıfıyla geliyor.
(function () {
  var KEY = 'pondoku-legal-lang';

  function apply(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
    });

    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang));
    });

    var t = document.body.getAttribute('data-title-' + lang);
    if (t) document.title = t;
  }

  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {
    /* özel sekmede localStorage erişimi hata verebilir */
  }

  var browserIsTurkish = (navigator.language || 'en').toLowerCase().indexOf('tr') === 0;
  apply(saved || (browserIsTurkish ? 'tr' : 'en'));

  document.addEventListener('click', function (e) {
    var btn = e.target && e.target.closest ? e.target.closest('.lang button') : null;
    if (!btn) return;
    var lang = btn.getAttribute('data-set-lang');
    apply(lang);
    try {
      localStorage.setItem(KEY, lang);
    } catch (err) {
      /* yok say */
    }
  });
})();
