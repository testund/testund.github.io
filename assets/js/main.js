// Collect the ordered list of image sources on a piece page
function pieceImageList() {
  const strip = document.querySelectorAll('.thumb-strip img');
  if (strip.length) return Array.from(strip).map(t => t.getAttribute('onclick').match(/'([^']+)'/)[1]);
  const main = document.getElementById('main-img');
  return main ? [main.src] : [];
}

let lightboxIndex = 0;

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
  const list = pieceImageList();
  lightboxIndex = Math.max(0, list.indexOf(src));
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (lb && img) {
    img.src = src;
    lb.classList.add('open');
    lb.classList.toggle('single', list.length < 2);
  }
}

function closeLightbox(e) {
  // Only close when the backdrop (not the image or buttons) is clicked
  if (e && e.target && e.target.id !== 'lightbox') return;
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}

function lightboxStep(e, dir) {
  if (e) e.stopPropagation();
  const list = pieceImageList();
  if (!list.length) return;
  lightboxIndex = (lightboxIndex + dir + list.length) % list.length;
  const img = document.getElementById('lightbox-img');
  if (img) img.src = list[lightboxIndex];
}

document.addEventListener('keydown', function(e) {
  const lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('open')) return;
  if (e.key === 'Escape') lb.classList.remove('open');
  else if (e.key === 'ArrowRight') lightboxStep(e, 1);
  else if (e.key === 'ArrowLeft') lightboxStep(e, -1);
});
