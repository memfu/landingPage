// Configuración inicial

const savedLang = localStorage.getItem('lang') || 'es'; // Esto es para que busque primero el idioma en localStorage, si no hay será ES

i18next.init({
  lng: savedLang,
  debug: false, // Así no se ven los mensajes en la consola
  resources: {} // Las traducciones las cargamos luego
  }, function(err, t) { // err por si hay un error al iniciar i18next, t es una función propia para traducir textos
  loadLanguage(savedLang); // Carga idioma del localStorage 
  }
);

// Función para cargar el archivo JSON del idioma seleccionado
function loadLanguage(lang) { // Aquí recibe el idioma seleccionado por el usuario
  fetch(`./assets/translations/${lang}.json`) // La función fetch() devuelve una promesa que se resuelve con un objeto de respuesta (Response).
  //Cuando el .json es descargado con fetch, JS lo trata como si no tuviera formato y por eso hay que convertirlo.
    .then(res => res.json()) // "res" es la respuesta HTTP y esto convierte la respuesta en un objeto JSON
    .then(translations => {
      i18next.addResourceBundle(lang, 'translation', translations, true, true); // Añade las traducciones
      /*
      translations: donde están las claves y sus textos traducidos
      1er true: si ya existía contenido para ese idioma, reemplázalo (overwrite).
      2o true: marca el bundle como inicializado para usarlo enseguida
      */
      i18next.changeLanguage(lang, () => { 
        // () => { ... } → función callback: el bloque de código se ejecuta justo después de que el idioma se haya cambiado correctamente.
        updateContent();
        localStorage.setItem('lang', lang);
      });
    });
}


// Función para traducir textos simples (con data-i18n)
function updateContent() {
  // Aquí busca todos los elementos en el HTML que tengan el atributo data-i18n y luego hace un forEach en cada uno de ellos
  document.querySelectorAll('[data-i18n]').forEach(el => { 
    const key = el.getAttribute('data-i18n'); // Por cada elemento (el) obtiene el valor dentro del atributo data-i18n
    const text = i18next.t(key); // Si encuentra la key devuelve el texto traducido con .t
    /*
     * if (text) es equivalente a if (text !== null && text !== undefined && text !== '') {el.textContent = text;}
     */
    if (text) el.textContent = text; // cambia el texto visible del elemento del HTML
  });

  // Si hay contenido dinámico como el CV, actualizamos también eso
  if (typeof renderEducation === 'function') renderEducation();
  if (typeof renderExperience === 'function') renderExperience();
  updateCvDownloadLink();
  if (typeof renderProjects === 'function') renderProjects();
  updateCvDownloadLink();
}
