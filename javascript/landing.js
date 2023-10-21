/*==================== Landing Page and Navbar Code by Navuuu ====================*/

const sections = document.querySelectorAll('section[id]');

// Store the IDs of visited sections
const visitedSections = [];

// Function to update history and scroll to a section
function scrollAndPushState(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    visitedSections.push(sectionId);
    history.pushState({ section: sectionId }, null, `#${sectionId}`);
  }
}

// Function to scroll to a section by ID
function scrollToSection(sectionId) {
  scrollAndPushState(sectionId);
}

// Add event listener to scroll to a section when a nav link is clicked
navLink.forEach(n => n.addEventListener('click', (event) => {
  const sectionId = event.target.getAttribute('href').slice(1); // Get the section ID
  scrollToSection(sectionId);
}));

// Add event listener for popstate (backward/forward) navigation
window.addEventListener('popstate', (event) => {
  const sectionId = event.state.section;
  if (sectionId) {
    scrollToSection(sectionId);
  }
});

/*==================== Scroll Top ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);
