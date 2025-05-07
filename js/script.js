function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const icon = document.querySelector('.dark-mode-btn i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  }
  
  // Smooth scroll to top for Top link
  document.querySelectorAll('.top-link a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // fade-in animation => About Section
    const animatedSections = document.querySelectorAll(".animate-on-scroll");
    const onScroll = () => {
      animatedSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
  });
  