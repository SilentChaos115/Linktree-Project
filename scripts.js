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
