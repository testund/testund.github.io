// Image switcher for piece pages
function switchImage(src, thumb) {
  const main = document.getElementById('main-img');
  if (main) {
    main.src = src;
    document.querySelectorAll('.thumb-strip img').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  }
}

// Lightbox
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (lb && img) {
    img.src = src;
    lb.classList.add('open');
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('open');
  }
});
