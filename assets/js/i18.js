i18next.init({
    lng: 'es',
    debug: false,
    resources: {
      es: { translation: {} },
      en: { translation: {} },
      de: { translation: {} }
    }
  }, function(err, t) {
    updateContent();
  });
  
  function loadLanguage(lang) {
    fetch(`./locales/${lang}.json`)
      .then(res => res.json())
      .then(translations => {
        i18next.addResourceBundle(lang, 'translation', translations, true, true);
        i18next.changeLanguage(lang, updateContent);
      });
  }
  
  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = i18next.t(key);
    });
  }
  