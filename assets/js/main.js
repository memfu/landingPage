// Renderiza la experiencia profesional desde i18next
function renderCvContent() {
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
      `;
    });
  }
  
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
  