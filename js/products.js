document.addEventListener("DOMContentLoaded", () => {
  // Scroll-based fade-in animation for Product Cards
  const productCards = document.querySelectorAll(".animate-on-load");
  const onScroll = () => {
    productCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  // Pagination logic
  let currentPage = 1;
  const productsPerPage = 8;
  const cards = document.querySelectorAll('.product-card');
  const totalPages = Math.ceil(cards.length / productsPerPage);
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  const showPage = (page) => {
    const start = (page - 1) * productsPerPage;
    const end = page * productsPerPage;

    cards.forEach((card, index) => {
      card.style.display = (index >= start && index < end) ? 'block' : 'none';
    });

    // Disable buttons when needed
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;
  };

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Initially show first page
  showPage(currentPage);
});
