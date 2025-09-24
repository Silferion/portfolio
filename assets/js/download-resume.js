document.getElementById('downloadResume').addEventListener('click', function() {
    // File path
    const filePath = 'assets/resume/Diza, Clark Neilsen Tan RESUME.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = filePath;
    link.target = '_blank';
    link.download = 'Diza_Clark_Neilsen_Tan_RESUME.pdf'; // Name of downloaded file
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    
    // Remove the temporary link
    document.body.removeChild(link);
  });