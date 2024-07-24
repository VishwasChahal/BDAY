let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

document.addEventListener('DOMContentLoaded', () => {
    showPage(currentPage);
    startCountdown(); // Ensure countdown starts on page load
});

function showPage(page) {
    document.querySelectorAll('.page').forEach((section, index) => {
        section.classList.toggle('active', index === page - 1);
    });

    document.getElementById('prevBtn').style.display = (page === 1) ? 'none' : 'inline-block';
    document.getElementById('nextBtn').style.display = (page === totalPages) ? 'none' : 'inline-block';
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');

    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });
});


