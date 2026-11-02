document.addEventListener('DOMContentLoaded', () => {

  // 1. FILTER NG MGA SAMURAI (All, Great Unifiers, Swordsmen)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const samuraiCards = document.querySelectorAll('.samurai-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      samuraiCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCat === filterCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. BUSHIDO QUOTE GENERATOR
  const quotes = [
    "\"Master the sword by mastering your mind first.\" — Miyamoto Musashi",
    "\"If the bird does not sing, kill it.\" — Oda Nobunaga",
    "\"If the bird does not sing, coax it.\" — Toyotomi Hideyoshi",
    "\"If the bird does not sing, wait for it.\" — Tokugawa Ieyasu",
    "\"A single arrow is easily broken, but not ten in a bundle.\" — Mori Motonari",
    "\"Even if the body should die, honor remains immortal.\" — Sanada Yukimura"
  ];

  const quoteDisplay = document.getElementById('quoteDisplay');
  const nextQuoteBtn = document.getElementById('nextQuoteBtn');
  let currentIndex = 0;

  if (nextQuoteBtn && quoteDisplay) {
    nextQuoteBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % quotes.length;
      quoteDisplay.textContent = quotes[currentIndex];
    });
  }

});