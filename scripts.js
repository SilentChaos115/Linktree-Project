// Toggle fullscreen for the clicked image using the Fullscreen API
const img = document.querySelector('.images');
if (img) {
  img.addEventListener('click', async () => {
    // If document is already in fullscreen, exit
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    try {
      // Request fullscreen on the image element
      await img.requestFullscreen();
    } catch (err) {
      // Fallback: open the image in a new tab if Fullscreen API isn't available
      window.open(img.src, '_blank');
    }
  });

  // Optional: exit fullscreen on Escape is handled by browser by default, but
  // also listen for keydown to close if you want custom behavior
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.fullscreenElement) {
      document.exitFullscreen();
    }
  });
}

  // Enable fullscreen for all certificate images (HTML, CSS, etc.)
  document.querySelectorAll('.certificates').forEach(certImg => {
    certImg.addEventListener('click', async () => {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        return;
      }
      try {
        await certImg.requestFullscreen();
      } catch (err) {
        window.open(certImg.src, '_blank');
      }
    });
  });
// Equalize heights of bottom contact boxes so their tops and bottoms match
(function () {
  function equalizeContactHeights() {
    const left = document.querySelector('.contact-left');
    const right = document.querySelector('.contact-right');
    if (!left || !right) return;
    // Clear any inline heights so we measure natural heights
    left.style.height = '';
    right.style.height = '';
    const leftH = left.getBoundingClientRect().height;
    const rightH = right.getBoundingClientRect().height;
    const maxH = Math.max(leftH, rightH);
    // Apply the same height to both (only changes box size)
    left.style.height = `${maxH}px`;
    right.style.height = `${maxH}px`;
  }

  let _equalizeTimer = null;
  window.addEventListener('load', equalizeContactHeights);
  window.addEventListener('resize', () => {
    clearTimeout(_equalizeTimer);
    _equalizeTimer = setTimeout(equalizeContactHeights, 120);
  });
})();
