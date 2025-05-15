# Official Roger Portfolio Website

## Tools Used

- **HTML5**: Semantic structure for all pages and sections.
- **CSS3**: Custom styles, responsive design, dark/light mode, and modern layouts.
- **JavaScript (Vanilla)**: Dynamic greeting, dark/light mode toggle, form validation, interactive project details, and tabbed content.
- **Font Awesome**: For modern, scalable icons.
- **Google Fonts**: For clean, professional typography.
- **Google Maps Embed**: For location display on the contact page.

---

## Key Features Implemented

- **Multi-Page Portfolio**: Home, About, Portfolio, Contact, and Survey pages, all visually consistent.
- **Responsive Design**: Fully mobile-friendly layouts using CSS Flexbox, Grid, and media queries.
- **Modern Hero Section**: Large, centered image with gradient background, dynamic greeting, and professional stats.
- **About Me Tabs**: Switch between bio, education, and skills using JavaScript-powered tabs.
- **Services & Projects**: Card-based layouts with icons and images, scaling beautifully on all devices.
- **Showreel Section**: Embedded YouTube videos, centered and responsive.
- **Interactive Portfolio**: "Details/Hide" buttons reveal more info about each project without reloading the page.
- **Contact Form**: Validates input (including regex for email/phone), styled as a card, with a Google Map below.
- **Survey Form**: Collects user feedback with radio buttons, checkboxes, and textarea, with validation.
- **Dark/Light Mode**: Toggle button in the navbar, remembers user preference, and updates the icon.
- **Consistent Footer**: Social links, quick links, and contact info on every page.
- **Accessibility**: Proper labels, alt text, keyboard navigation, and color contrast.

---

## Challenges Faced & Solutions

- **Responsive Layouts**:  
  *Challenge*: Ensuring all sections (especially hero, about, and project grids) look great on both desktop and mobile.  
  *Solution*: Used CSS Flexbox/Grid, tested with various breakpoints, and added specific media queries for images, forms, and navigation.

- **Dark/Light Mode Consistency**:  
  *Challenge*: Making sure the theme toggle works and looks good on all pages, and that all elements (not just the background) adapt.  
  *Solution*: Centralized the toggle logic in JavaScript, used a `.light-mode` class on `<body>`, and wrote comprehensive CSS overrides for all major components.

- **Dynamic Content (Tabs & Project Details)**:  
  *Challenge*: Implementing tabbed content and show/hide project details with pure JavaScript, while keeping the code accessible and maintainable.  
  *Solution*: Used event listeners and class toggling, ensured ARIA roles and keyboard accessibility, and kept the code modular.

- **Form Validation**:  
  *Challenge*: Validating email and phone fields with regex, and providing user-friendly feedback.  
  *Solution*: Wrote custom JavaScript validation, displayed clear error messages, and reset forms on success.

- **Consistent Design Across Pages**:  
  *Challenge*: Keeping navigation, footer, and card styles consistent across all pages.  
  *Solution*: Used shared CSS classes, included Font Awesome and Google Fonts on every page, and tested for visual consistency.

---

**This project demonstrates a modern, accessible, and fully responsive portfolio site using only HTML, CSS, and JavaScript.** 