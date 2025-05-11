 /**************************/
 /*CV*/

 // Recopila y prepara la formación académica con i18next para meterla en el html
  function renderEducation() {
    /*
      Crea una variable constante edList que equivale a la traducción (método .t de i18next) 
      de la clave que se encuentra dentro del json en el elemento cv en el array de educationList.
      returnObjetcs true indica que quiero que me devuelva todos los elementos
      dentro del array como objetos independientes
    */
    const edList = i18next.t('cv.educationList', { returnObjects: true });
     /*
      Crea una variable constante container que se refiere al elemento del documento
      HTML que tiene el id "education-list"
    */
    const container = document.getElementById('education-list');
    // Si no encuentra el elemento, termina la ejecución de la función para evitar errores.
    if (!container) return;
  
    // Aquí se vacía el contenedor de HTML para evitar repeticiones de contenido
    container.innerHTML = '';

    // Aquí se crea una variable modificable
    let htmlContent = '';
    
    //Ahora se recorre la variable de "edList", y cada objeto de la iteración lo llamamos item
    edList.forEach(item => {
      /*
        Aquí se indica que en la variable htmlContent se vaya añadiendo por cada iteración
        el nuevo item (objeto) en forma de lista y con el formato indicado
      */ 
      htmlContent += `
        <li>
          <strong>${item.degree}</strong><br>
          ${item.institution} (${item.years})
        </li>
        <br>
      `;
    });
    // Finalmente se añade al contenedor de "education-list" la lista que hemos generado
    container.innerHTML = htmlContent;
  }
  
// Recopila y prepara la experiencia profesional con i18next para meterla en el html
function renderExperience() {
    const expList = i18next.t('cv.experienceList', { returnObjects: true });
    const container = document.getElementById('experience-list');
    if (!container) return;
  
    container.innerHTML = '';
    let htmlContent = '';

    expList.forEach(item => {
      htmlContent += `
        <li>
          <strong>${item.position}</strong> – ${item.company} (${item.years})<br>
          ${item.location}<br>
          <em>${item.description}</em>
        </li>
        <br>
      `;
    });
    container.innerHTML = htmlContent;
  }

  function updateCvDownloadLink() {
  // En esta variable se constata que idioma está escogido en ese momento
  const lang = i18next.language;
  // Esta variable se crea para el elemento del documento HTML con el id "cv-download"
  const link = document.getElementById('cv-download');

  // Si no encuentra el elemento, termina la ejecución de la función para evitar errores.
  if (!link) return;

  /*
    Aquí se crea una constante que asigna a cada clave de idioma (es, en, de)
    el directorio donde se encuentra el CV correspondiente
  */
 const fileMap = {
    es: './assets/docs/CV_MariaEugenia_ES.pdf',
    en: './assets/docs/CV_MariaEugenia_EN.pdf',
    de: './assets/docs/CV_MariaEugenia_DE.pdf'
  };

  /*
    Como la etiqueta <a> la hemos dejado en el HTML sin href, hace falta asignarle uno.
    Esto lo hacemos aquí y le decimos que coja del fileMap el directorio correspondiente
    al idioma que está seleccionado.
  */

  link.href = fileMap[lang] || fileMap.es; // En caso de no encontrar, escoge el español
}

 /**************************/
 /*Projects*/
 function renderProjects() {
    const expList = i18next.t('projects.projectsList', { returnObjects: true });
    const container = document.getElementById('projects-list');
    if (!container) return;
  
    container.innerHTML = '';
    let htmlContent = '';

    expList.forEach(item => {
      htmlContent += `
        <li>
          <strong>${item.name}</strong><br>
          ${item.desc}<br>
          <a href="${item.url}" target="_blank" class="project-icon">
              <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <br>
      `;
    });
    container.innerHTML = htmlContent;
  }
