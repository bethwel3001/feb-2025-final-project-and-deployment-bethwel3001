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
    
    // Pagination (simulate product change)
    let currentPage = 1;
    const totalProducts = document.querySelectorAll('.product-card').length;
    const productsPerPage = 6;
    
    const showPage = (page) => {
      const start = (page - 1) * productsPerPage;
      const end = page * productsPerPage;
      const cards = document.querySelectorAll('.product-card');
      
      cards.forEach((card, index) => {
        if (index >= start && index < end) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    };
  
    document.querySelector('.next').addEventListener('click', () => {
      if (currentPage * productsPerPage < totalProducts) {
        currentPage++;
        showPage(currentPage);
      }
    });
  
    document.querySelector('.prev').addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
      }
    });
  
    // Initially show the first page
    showPage(currentPage);
  });
  