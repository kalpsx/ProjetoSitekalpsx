const bgm = document.getElementById('bgm');
const key = 'music-time-' + bgm.dataset.track;
bgm.volume = 0.3;

// Retoma de onde a faixa parou na página anterior
bgm.addEventListener('loadedmetadata', () => {
    const t = parseFloat(localStorage.getItem(key));
    if (t && t < bgm.duration) bgm.currentTime = t;
});


const saveTime = () => localStorage.setItem(key, bgm.currentTime);
window.addEventListener('pagehide', saveTime);
setInterval(() => { if (!bgm.paused) saveTime(); }, 2000);


bgm.play().catch(() => {
    const start = () => bgm.play();
    ['click', 'keydown', 'touchstart'].forEach(e =>
        document.addEventListener(e, start, { once: true })
    );
});