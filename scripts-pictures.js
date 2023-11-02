document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
});