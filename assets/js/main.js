 /**************************/
 /*CV*/
 // Renderiza la formación académica desde i18next
  function renderEducation() {
    const edList = i18next.t('cv.educationList', { returnObjects: true });
    const container = document.getElementById('education-list');
    if (!container) return;
  
    container.innerHTML = '';
    edList.forEach(item => {
      container.innerHTML += `
        <li>
          <strong>${item.degree}</strong><br>
          ${item.institution} (${item.years})
        </li>
        <br>
      `;
    });
  }
  
// Renderiza la experiencia profesional desde i18next
function renderExperience() {
    const expList = i18next.t('cv.experienceList', { returnObjects: true });
    const container = document.getElementById('experience-list');
    if (!container) return;
  
    container.innerHTML = '';
    expList.forEach(item => {
      container.innerHTML += `
        <li>
          <strong>${item.position}</strong> – ${item.company} (${item.years})<br>
          ${item.location}<br>
          <em>${item.description}</em>
        </li>
        <br>
      `;
    });
  }

  function updateCvDownloadLink() {
  const lang = i18next.language;
  const link = document.getElementById('cv-download');
  if (!link) return;

  // Ajusta los nombres de archivo a los reales
  const fileMap = {
    es: './assets/docs/CV_MariaEugenia_ES.pdf',
    en: './assets/docs/CV_MariaEugenia_EN.pdf',
    de: './assets/docs/CV_MariaEugenia_DE.pdf'
  };

  link.href = fileMap[lang] || fileMap.es; // fallback a español si no encuentra
}

 /**************************/
 /*Projects*/
 function renderProjects() {
    const expList = i18next.t('projects.projectsList', { returnObjects: true });
    const container = document.getElementById('projects-list');
    if (!container) return;
  
    container.innerHTML = '';
    expList.forEach(item => {
      container.innerHTML += `
        <li>
          <strong>${item.name}</strong><br>
          ${item.desc}<br>
          <a href="${item.url}" target="_blank">GitHub</a>
        </li>
        <br>
      `;
    });
  }

// function renderProjects() {
//   const projectList = i18next.t('projects.projectsList', { returnObjects: true });
//   const container = document.getElementById('projects-container');
//   if (!container) return;

//   container.innerHTML = '';

//   projectList.forEach(project => {
//     const projectDiv = document.createElement('div');
//     projectDiv.className = 'project-item';

//     projectDiv.innerHTML = `
//       <h3>${project.name}</h3>
//       <p>${project.desc}</p>
//       <a href="${project.url}" target="_blank">GitHub</a>
//       <br>
//     `;

//     container.appendChild(projectDiv);
//   });
// }
