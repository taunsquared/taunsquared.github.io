/* ── Lightbox affect for images ─────────────────────────────────────────────
   Expands images in an overlay on the same page.
──────────────────────────────────────────────────────────────────────── */

(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<img src="" alt="" />';
  document.body.appendChild(overlay);

  const overlayImg = overlay.querySelector('img');

  // Open lightbox on click for any image with class "lightbox"
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox')) {
      overlayImg.src = e.target.src;
      overlayImg.alt = e.target.alt;
      overlay.classList.add('open');
    }
  });

  // Close on clicking the overlay
  overlay.addEventListener('click', () => overlay.classList.remove('open'));

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.classList.remove('open');
  });
})();
