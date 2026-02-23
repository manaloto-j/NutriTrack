/* ============================================
   NutriTrack — Contact Page Scripts
   contact.js
   ============================================ */

// ── Send a Message Form ──
const contactForm = document.getElementById('contact-form');
const contactBtn = contactForm?.querySelector('.btn-submit');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  contactBtn.classList.add('loading');
  contactBtn.disabled = true;

  // Simulate network request
  await new Promise(r => setTimeout(r, 1800));

  contactBtn.classList.remove('loading');
  
  // Show success state
  const form = contactForm.querySelector('.form-fields');
  const success = contactForm.querySelector('.success-msg');
  if (form) form.style.display = 'none';
  if (success) success.classList.add('show');
});

// ── Share Recipe Form ──
const shareForm = document.getElementById('share-form');
const shareBtn = shareForm?.querySelector('.btn-submit');

shareForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  shareBtn.classList.add('loading');
  shareBtn.disabled = true;

  await new Promise(r => setTimeout(r, 2000));

  shareBtn.classList.remove('loading');

  const fields = shareForm.querySelector('.share-fields');
  const success = shareForm.querySelector('.success-msg');
  if (fields) fields.style.display = 'none';
  if (success) success.classList.add('show');
});

// ── Input Focus Glow ──
document.querySelectorAll('.form-control').forEach(input => {
  input.addEventListener('focus', () => {
    input.closest('.form-group')?.querySelector('label')?.style.setProperty('color', 'var(--green)');
  });
  input.addEventListener('blur', () => {
    input.closest('.form-group')?.querySelector('label')?.style.removeProperty('color');
  });
});

// ── Character counter for message textarea ──
const messageArea = document.querySelector('textarea[name="message"]');
const charCount = document.querySelector('.char-count');

if (messageArea && charCount) {
  messageArea.addEventListener('input', () => {
    const len = messageArea.value.length;
    charCount.textContent = `${len}/500`;
    charCount.style.color = len > 450 ? 'var(--green)' : 'var(--gray-3)';
  });
}
