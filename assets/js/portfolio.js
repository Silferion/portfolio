// Portfolio data structure
const portfolioData = {
  'hfile-depot': {
    title: 'HFile Depot',
    category: 'Web Application',
    client: 'Sorsogon City Municipal Hall',
    type: 'Client Project',
    date: 'Aug 2022',
    url: 'http://112.198.156.92:5000/signin',
    description: 'HFile Depot - Document Tracking System',
    fullDescription: 'A comprehensive document tracking platform designed for the Sorsogon City Municipal Hall to efficiently manage and monitor procured items. The system streamlines documentation, ensures transparency, and provides real-time tracking for improved accountability.',
    technologies: ['Node.js', 'Vue.js', 'MySQL', 'PHP Laravel', 'PDF Generation', 'Email Integration', 'REST API', 'Ubuntu Server', 'NGINX', 'GitHub'],
    features: [
      'Multi-level document approval workflows',
      'Real-time procurement tracking dashboard',
      'Automated email notifications and alerts',
      'Comprehensive audit trail logging',
      'Role-based access control system',
      'PDF report generation and export',
      'Advanced search and filtering capabilities',
      'Mobile-responsive interface',
      'Government compliance integration'
    ],
    repository: 'N/A',
    images: ['city-1.jpg', 'city-2.jpg', 'city-3.jpg'],
    extension: 'jpg'
  },
  'prms': {
    title: 'PRMS',
    category: 'Resource Management System',
    client: 'Physics Pharmaceutical Company',
    type: 'Client Project',
    date: 'March 2025',
    url: 'https://prms-staging.jcatechsolutions.dev/auth/login',
    description: 'Pharmaceutical Resource Management System',
    fullDescription: 'A sophisticated pharmaceutical resource management platform designed for Physics Pharmaceutical Company. It efficiently handles medicine inventories, medical supplies, and streamlines operations while ensuring compliance and optimized stock management.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'MySQL', 'Docker', 'PHP Laravel', 'REST API', 'Ubuntu Server', 'NGINX', 'API Documentation', 'CI/CD Pipeline', 'GitHub'],
    features: [
      'Automated batch tracking and expiration monitoring',
      'Multi-branch inventory synchronization',
      'Automated payroll generation'
    ],
    repository: 'N/A',
    images: ['physics-1.png', 'physics-2.png', 'physics-3.png', 'physics-4.png'],
    extension: 'png'
  },
  'sptes': {
    title: 'SPTES',
    category: 'Traveler Tracking System',
    client: 'Sorsogon Provincial Government',
    type: 'Client Project',
    date: 'June 2021',
    url: '#',
    description: 'Sorsogon Province Traveler Entry System',
    fullDescription: 'A traveler entry tracking solution developed during the COVID-19 pandemic to monitor individuals entering Sorsogon City. This project ensured public safety through systematic traveler monitoring, contact tracing, and compliance verification at checkpoints.',
    technologies: ['Vue.js', 'PHP Laravel', 'MySQL', 'QR Code API', 'Ubuntu Server', 'NGINX'],
    features: [
      'QR code-based contactless check-in system',
      'Automated SMS alerts and notifications',
      'Multi-checkpoint deployment capability',
    ],
    repository: 'N/A',
    images: ['sptes-1.jpg', 'sptes-2.jpg', 'sptes-3.jpg'],
    extension: 'jpg'
  },
  'cmrms-mentorship': {
    title: 'CMRMS (Mentorship)',
    category: 'Construction Resource Management System',
    client: 'N/A',
    type: 'Capstone Mentorship',
    date: 'August 2023',
    url: '#',
    description: 'Construction Material Resource Management System',
    fullDescription: 'A resource management system designed for tracking construction materials and employee records using the Always Better Control (ABC) approach. It supports stock monitoring, payroll tracking, and systematic monitoring of out-of-stock items for improved operational efficiency.',
    technologies: ['PHP Laravel', 'MySQL', 'Bootstrap', 'ABC Approach', 'PDF Reporting', 'Email Integration'],
    features: [
      'ABC methodology-based inventory control system',
      'Automated low-stock alerts and reorder triggers',
      'Integrated employee time tracking and payroll',
      'Multi-project resource allocation tracking',
      'Cost analysis and budget monitoring',
      'Supplier management and purchase order automation',
      'Mobile-friendly interface for on-site access',
      'Comprehensive reporting and analytics dashboard',
      'Integration with accounting systems'
    ],
    repository: 'N/A',
    images: ['cmrms.jpg'],
    extension: 'jpg'
  },
  'lims-mentorship': {
    title: 'LIMS (Mentorship)',
    category: 'Inventory Management System',
    client: 'Lagamayo Electronics and Marketing Center (Sorsogon City Branch)',
    type: 'Capstone Mentorship',
    date: 'August 2023',
    url: '#',
    description: 'Lagamayo Inventory Management System',
    fullDescription: 'An intelligent inventory management platform designed to track stock levels and forecast seasonal demand using predictive algorithms. The system assists businesses in restocking efficiently, reducing shortages, and improving employee workflow.',
    technologies: ['PHP', 'MySQL', 'Exponential Smoothing Algorithm', 'Chart.js'],
    features: [
      'Exponential Smoothing based demand forecasting',
      'Real-time stock level monitoring across multiple locations',
      'Customer demand pattern analysis',
      'Mobile-first design approach'
    ],
    repository: 'N/A',
    images: ['lims.jpg'],
    extension: 'jpg'
  },
  'self-it-mentorship': {
    title: 'Self-IT (Mentorship)',
    category: 'Web-based Planner',
    client: 'N/A',
    type: 'Capstone Mentorship',
    date: 'August 2023',
    url: '#',
    description: 'Self-IT: A Web-based Planner Application',
    fullDescription: 'A productivity tool designed as a web-based planner, allowing users to manage schedules, track progress in real time, and set up reminders for tasks. It aims to improve personal organization and time management.',
    technologies: ['PHP Laravel', 'MySQL', 'Calendar API Integration', 'Data Visualization'],
    features: [
      'Real-time progress tracking with visual analytics',
      'Intelligent reminder system with custom triggers',
      'Habit formation tracking and behavioral insights',
      'Integration with popular calendar applications',
      'Goal setting framework with milestone tracking',
      'Time blocking and focus session management',
    ],
    repository: 'N/A',
    images: ['self-it.jpg'],
    extension: 'jpg'
  },
  'djournal-mentorship': {
    title: 'D-Journal (Mentorship)',
    category: 'Sorsogon City Tourism Office',
    client: 'N/A',
    type: 'Capstone Mentorship',
    date: 'September 2024',
    url: '#',
    description: 'D-Journal: A Travel Journaling App with Mood Tracking',
    fullDescription: 'A mobile travel journal that integrates Natural Language Processing (NLP) to detect user moods from journal entries. It features interactive maps to display the emotional sentiment of visitors at different tourist spots in Sorsogon City, combining travel experiences with data-driven insights.',
    technologies: ['React Native', 'Node.js', 'Natural Language Processing', 'Leaflet Maps API', 'Sentiment Analysis', 'MySQL',],
    features: [
      'NLP-powered sentiment analysis of journal entries',
      'Interactive emotional mapping of tourist destinations',
      'GPS-integrated location-based journaling',
      'Real-time mood tracking and visualization',
      'Tourism analytics dashboard for city planners',
      'Personalized destination recommendations based on mood patterns',
      'Social sharing with privacy controls',
      'Offline journaling with synchronization',
      'Tourism trend analysis and reporting for authorities'
    ],
    repository: 'N/A',
    images: ['d-journal.jpg'],
    extension: 'jpg'
  },
  'bbims-mentorship': {
    title: 'BBIMS (Mentorship)',
    category: 'Blood Bank Inventory Monitoring System',
    client: 'Philippine Red Cross (Legazpi City, Albay Branch)',
    type: 'Capstone Mentorship',
    date: 'September 2024',
    url: '#',
    description: 'Blood Bank Inventory Monitoring System',
    fullDescription: 'A health-focused system designed to track and predict blood bank inventory levels using the SARIMA forecasting algorithm. It helps identify demand for specific blood types per season, improves readiness for emergencies, and ensures availability of life-saving supplies.',
    technologies: ['PHP Laravel', 'SARIMA Algorithm', 'Vue.js', 'MySQL', 'SMS Integration', 'Real-time Analytics'],
    features: [
      'SARIMA-based blood demand forecasting by blood type',
      'Seasonal pattern analysis and emergency prediction',
      'Automated donor call-up system based on predicted shortages',
      'Real-time inventory monitoring with critical level alerts',
      'Blood expiration tracking and waste reduction algorithms',
      'Multi-location blood bank network coordination',
    ],
    repository: 'N/A',
    images: ['bbims.jpg'],
    extension: 'jpg'
  },
  'ailice-mentorship': {
    title: 'AILICE (Mentorship)',
    category: 'Learning Management System',
    client: 'The Lewis College (BED Teachers)',
    type: 'Capstone Mentorship',
    date: 'September 2024',
    url: '#',
    description: 'AILICE: AI-powered Learning Assistant',
    fullDescription: 'A modern Learning Management System integrated with an AI chatbot to deliver adaptive and personalized online learning experiences. It supports automated course recommendations, intelligent tutoring, and learner progress tracking to enhance digital education.',
    technologies: ['React.js', 'Node.js', 'OpenAI', 'Natural Language Processing', 'MongoDB', 'Learning Analytics'],
    features: [
      'AI chatbot tutor with natural language understanding',
      'Adaptive learning path generation based on student performance',
      'Real-time student progress analytics and insights',
      'Automated assessment generation and grading',
      'Interactive discussion forums',
      'Integration with existing educational tools and standards'
    ],
    repository: 'N/A',
    images: ['ailice.jpg'],
    extension: 'jpg'
  },
  'e-jeepney-mentorship': {
    title: 'E-Jeepney Connect (Mentorship)',
    category: 'Transport Booking System',
    client: 'BULANTRASCO',
    type: 'Capstone Mentorship',
    date: 'September 2024',
    url: '#',
    description: 'E-Jeepney Connect: Real-time GPS Tracking & Reservation',
    fullDescription: 'A transportation booking platform enabling passengers to reserve seats in advance for modern jeepneys. It uses GPS integration for real-time vehicle tracking. Conductors can monitor passengers\'s pickup/drop-off points, while riders can view the current location of nearby jeepneys for convenience and safety.',
    technologies: ['React Native', 'Node.js', 'MySQL', 'Google Maps API', 'GPS Tracking', 'Payment Gateway Integration'],
    features: [
      'Real-time GPS tracking with live vehicle locations',
      'Advance seat reservation and booking system',
      'Predictive arrival time calculations',
      'Dynamic route optimization and traffic integration',
      'Cashless payment processing and fare calculation',
      'Passenger pickup and drop-off point management',
      'Driver dashboard with route and passenger management',
    ],
    repository: 'N/A',
    images: ['ejeepney-connect.jpg'],
    extension: 'jpg'
  },

  // Enhanced Personal Projects (descriptions, tech, features, repository)
  'attrack': {
    title: 'ATTrack',
    category: 'Serverless Attendance Management System',
    client: 'N/A',
    type: 'Personal Project',
    date: '2024',
    url: 'https://golden-dawn-attendance.vercel.app/',
    description: 'Serverless Attendance Tracking with Google Workspace Integration',
    fullDescription: 'An innovative attendance management solution built with Vue.js 3 that demonstrates creative use of Google Apps Script and Google Sheets as a serverless backend database. This lightweight yet powerful system provides real-time attendance monitoring with automatic synchronization, eliminating the need for traditional server infrastructure. The project showcases modern web development practices, API integration skills, and cost-effective solutions for small to medium businesses seeking reliable attendance tracking without the overhead of complex database systems. This project was also used by the team I was handling during intramurals when I was an assistant team leader. It also has two options where you can enter the ID manually for attendance tracking or use camera with the help of OCR for identifying the ID captured.',
    technologies: ['Vue.js 3', 'Google Apps Script', 'Google Sheets API', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive Design', 'PaddleJS OCR'],
    features: [
      'Real-time attendance tracking with instant google workspace sync',
      'Serverless architecture using Google Workspace',
      'Student time-in/time-out with timestamp logging',
      'Automated attendance report generation and export',
      'Administrative dashboard with user management',
      'Mobile-responsive design for cross-device access',
      'Camera or Manual input attendance recording',
      'Data visualization with attendance analytics',
      'Cost-effective solution with zero server maintenance'
    ],
    repository: 'https://github.com/Silferion/attrack',
    images: ['attrack-1.jpg', 'attrack-2.jpg', 'attrack-3.jpg'],
    extension: 'jpg'
  },
  'slot-machine': {
    title: 'Interactive Slot Machine',
    category: 'Educational Gaming & Event Engagement',
    client: 'The Lewis College (TLC)',
    type: 'Personal Project',
    date: '2024',
    url: 'https://slot-machine-rho-ecru.vercel.app/',
    description: 'Web-based Gamification Tool for Educational Events',
    fullDescription: 'An engaging web-based slot machine game developed to enhance student participation and excitement during The Lewis College educational events. This interactive entertainment platform features smooth CSS3 animations, JavaScript-powered game mechanics, and customizable prize systems. The project demonstrates advanced front-end development skills including complex animation timing, game state management, and responsive design principles. Built entirely with vanilla web technologies, it showcases the power of modern JavaScript and CSS for creating compelling interactive experiences without external frameworks.',
    technologies: ['HTML5', 'CSS3 Animations', 'Vanilla JavaScript', 'Responsive Design'],
    features: [
      'Mobile-responsive gameplay experience',
      'Particle effects and visual celebrations for wins',
    ],
    repository: 'https://github.com/Silferion/slot-machine',
    images: ['slot-machine-1.jpg', 'slot-machine-2.jpg', 'slot-machine-3.jpg'],
    extension: 'jpg'
  },
  'caesar-cipher': {
    title: 'Caesar Cipher Encoder/Decoder',
    category: 'Educational Cryptography',
    client: 'N/A',
    type: 'Personal Project',
    date: '2023',
    url: 'https://caesar-cipher-xi.vercel.app/',
    description: 'Interactive Encryption Learning Platform for Students',
    fullDescription: 'An educational web application designed to make caesar cipher cryptography concepts accessible and engaging for IT students through hands-on interaction with the classic Caesar cipher algorithm. ',
    technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
    features: [
      'Customizable shift values with visual feedback',
    ],
    repository: 'https://github.com/Silferion/caesar-cipher',
    images: ['caesar-cipher-1.jpg', 'caesar-cipher-2.jpg'],
    extension: 'jpg'
  }
}


// Function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to update portfolio details page
// Function to update portfolio details page
function updatePortfolioDetails() {
  const projectId = getUrlParameter('project');
  
  if (!projectId || !portfolioData[projectId]) {
    // If no project specified or invalid project, redirect to home
    window.location.href = 'index.html';
    return;
  }
  
  const project = portfolioData[projectId];
  
  // Update page title
  document.title = `${project.title} - Portfolio Details`;
  
  // Update breadcrumb
  const breadcrumbTitle = document.querySelector('.page-title h1');
  if (breadcrumbTitle) {
    breadcrumbTitle.textContent = project.title;
  }
  
  // Update project information - NOW INCLUDING ALL FIELDS
  const projectInfo = document.querySelector('.portfolio-info ul');
  if (projectInfo) {
    projectInfo.innerHTML = `
      <li><strong>Category</strong>: ${project.category}</li>
      <li><strong>Client</strong>: ${project.client}</li>
      <li><strong>Type</strong>: ${project.type}</li>
      <li><strong>Project Date</strong>: ${project.date}</li>
      <li><strong>Project URL</strong>: <a href="${project.url}" target="_blank">${project.url !== '#' ? project.url : 'Not Available'}</a></li>
      <li><strong>Repository</strong>: ${project.repository !== 'N/A' ? `<a href="${project.repository}" target="_blank">${project.repository}</a>` : 'Not Available'}</li>
    `;
  }
  
  // Update project description
  const descriptionTitle = document.querySelector('.portfolio-description h2');
  const descriptionText = document.querySelector('.portfolio-description p');
  
  if (descriptionTitle) {
    descriptionTitle.textContent = project.title;
  }
  
  if (descriptionText) {
    descriptionText.textContent = project.fullDescription;
  }
  
  // ADD TECHNOLOGIES SECTION DYNAMICALLY
  const technologiesSection = document.querySelector('.portfolio-technologies');
  if (technologiesSection) {
    const techStack = technologiesSection.querySelector('.tech-stack');
    if (techStack && project.technologies) {
      techStack.innerHTML = project.technologies.map(tech => 
        `<span class="badge bg-primary me-2 mb-2">${tech}</span>`
      ).join('');
    }
  }
  
  // ADD FEATURES SECTION DYNAMICALLY  
  const featuresSection = document.querySelector('.portfolio-features');
  if (featuresSection) {
    const featuresList = featuresSection.querySelector('.features-list');
    if (featuresList && project.features) {
      featuresList.innerHTML = project.features.map(feature => 
        `<li><i class="bi bi-check-circle"></i> ${feature}</li>`
      ).join('');
    }
  }
  
  // Update project images in swiper
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.innerHTML = '';
    
    project.images.forEach(imageName => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `<img src="assets/img/portfolio/${imageName}" alt="${project.title}">`;
      swiperWrapper.appendChild(slide);
    });
    
    // Reinitialize Swiper if it exists
    if (window.Swiper) {
      // Destroy existing swiper instance if it exists
      const existingSwiper = document.querySelector('.portfolio-details-slider').swiper;
      if (existingSwiper) {
        existingSwiper.destroy();
      }
      
      // Initialize new swiper
      new Swiper('.portfolio-details-slider', {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        }
      });
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  updatePortfolioDetails();
});

// Function to handle portfolio item clicks (add this to your main portfolio page)
function setupPortfolioLinks() {
  // Update portfolio links to include project parameter
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
    const detailsLink = item.querySelector('.details-link');
    const title = item.querySelector('.portfolio-info h4').textContent.toLowerCase();
    
    let projectId = '';
    if (title.includes('hfile') || title.includes('depot')) {
      projectId = 'hfile-depot';
    } else if (title.includes('prms')) {
      projectId = 'prms';
    } else if (title.includes('sptes')) {
      projectId = 'sptes';
    }
    
    if (detailsLink && projectId) {
      detailsLink.href = `portfolio-details.html?project=${projectId}`;
    }
  });
}

