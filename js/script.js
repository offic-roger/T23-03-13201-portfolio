// Dynamic greeting
window.onload = function() {
  const greeting = document.getElementById('greeting');
  if (greeting) {
    const hour = new Date().getHours();
    let text = "Good Evening";
    if (hour < 12) text = "Good Morning";
    else if (hour < 18) text = "Good Afternoon";
    greeting.textContent = text + "!";
  }
};

// Toggle dark/light mode
document.getElementById('toggleMode').onclick = function() {
  document.body.classList.toggle('light-mode');
};

// Show/hide project details
function toggleProject(btn) {
  const article = btn.closest('.project');
  article.classList.toggle('active');
  btn.textContent = article.classList.contains('active') ? "Hide" : "Details";
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.onsubmit = function(e) {
    e.preventDefault();
    const email = contactForm.email.value;
    const phone = contactForm.phone.value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^\+?\d{10,15}$/;
    let msg = "";
    if (!emailRegex.test(email)) msg += "Invalid email. ";
    if (!phoneRegex.test(phone)) msg += "Invalid phone. ";
    document.getElementById('formMsg').textContent = msg || "Message sent!";
    if (!msg) contactForm.reset();
  };
}

// Survey form validation
const surveyForm = document.getElementById('surveyForm');
if (surveyForm) {
  surveyForm.onsubmit = function(e) {
    e.preventDefault();
    const source = surveyForm.source.value;
    const feedback = surveyForm.feedback.value.trim();
    let checked = false;
    surveyForm.querySelectorAll('input[type="checkbox"]').forEach(cb => { if (cb.checked) checked = true; });
    if (!source || !checked || !feedback) {
      document.getElementById('surveyMsg').textContent = "Please fill all fields and select at least one interest.";
    } else {
      document.getElementById('surveyMsg').textContent = "Thank you for your feedback!";
      surveyForm.reset();
    }
  };
}

// About Me Tabs functionality
const aboutTabs = document.querySelectorAll('.about-tab');
const aboutTabContents = {
  myself: document.getElementById('about-tab-myself'),
  education: document.getElementById('about-tab-education'),
  tools: document.getElementById('about-tab-tools')
};
if (aboutTabs.length) {
  aboutTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active from all tabs
      aboutTabs.forEach(t => t.classList.remove('active'));
      // Hide all contents
      Object.values(aboutTabContents).forEach(c => c.style.display = 'none');
      // Activate clicked tab and show content
      this.classList.add('active');
      const tabKey = this.getAttribute('data-tab');
      if (aboutTabContents[tabKey]) {
        aboutTabContents[tabKey].style.display = '';
      }
    });
  });
}

// Robust dark/light mode toggle for all pages
function setTheme(mode) {
  if (mode === 'light') {
    document.body.classList.add('light-mode');
    const icon = document.getElementById('toggleModeIcon');
    if (icon) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  } else {
    document.body.classList.remove('light-mode');
    const icon = document.getElementById('toggleModeIcon');
    if (icon) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
}

function getSavedTheme() {
  return localStorage.getItem('theme');
}

function saveTheme(mode) {
  localStorage.setItem('theme', mode);
}

const toggleModeBtn = document.getElementById('toggleMode');
if (toggleModeBtn) {
  toggleModeBtn.onclick = function() {
    const isLight = document.body.classList.toggle('light-mode');
    setTheme(isLight ? 'light' : 'dark');
    saveTheme(isLight ? 'light' : 'dark');
  };
}

// On page load, apply saved theme
const savedTheme = getSavedTheme();
if (savedTheme) {
  setTheme(savedTheme);
}

// Project details toggle for portfolio.html
const projectToggleBtns = document.querySelectorAll('.project-toggle-btn');
projectToggleBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const details = this.nextElementSibling;
    if (details && details.classList.contains('project-details')) {
      const isOpen = details.style.display === 'block';
      details.style.display = isOpen ? 'none' : 'block';
      this.textContent = isOpen ? 'Details' : 'Hide';
    }
  });
});
