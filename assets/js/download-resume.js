document.addEventListener('DOMContentLoaded', function () {
  const filePath = 'assets/resume/Diza, Clark Neilsen Tan RESUME.pdf';
  const fileName = 'Diza_Clark_Neilsen_Tan_RESUME.pdf';

  function triggerDownload() {
    const link = document.createElement('a');
    link.href = filePath;
    link.target = '_blank';
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const btn1 = document.getElementById('downloadResume');
  const btn2 = document.getElementById('downloadResume2');

  if (btn1) btn1.addEventListener('click', triggerDownload);
  if (btn2) btn2.addEventListener('click', triggerDownload);
});