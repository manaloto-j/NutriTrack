/* ============================================
   NutriTrack — Recipes Page Scripts
   recipes.js
   ============================================ */

// ── Filter Tabs ──
// Cards use data-categories="cat1,cat2" (comma-separated)
const filterTabs = document.querySelectorAll('.filter-tab');
const recipeCards = document.querySelectorAll('.recipe-card[data-categories]');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    recipeCards.forEach(card => {
      const cats = (card.dataset.categories || '').split(',').map(s => s.trim());
      const show = filter === 'all' || cats.includes(filter);

      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      card.style.opacity    = show ? '1' : '0.25';
      card.style.transform  = show ? '' : 'scale(0.97)';
      card.style.pointerEvents = show ? 'auto' : 'none';
    });
  });
});

// ── Card hover tilt ──
document.querySelectorAll('.recipe-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform   = `translateY(-6px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
    card.style.transition  = 'transform 0.1s ease, box-shadow 0.3s ease, border-color 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform  = '';
    card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  });
});
