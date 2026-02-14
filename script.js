console.log("Love Collage Loaded 💖");

// Music Player Functionality
const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const progressFill = document.getElementById('progressFill');
const progressBar = document.querySelector('.progress-bar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Format time helper
function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  } else {
    audio.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${progress}%`;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Load duration when metadata is loaded
audio.addEventListener('loadedmetadata', () => {
  durationDisplay.textContent = formatTime(audio.duration);
});

// Seek functionality
progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const percentage = clickX / width;
  audio.currentTime = percentage * audio.duration;
});

// Reset when song ends
audio.addEventListener('ended', () => {
  playIcon.style.display = 'block';
  pauseIcon.style.display = 'none';
  progressFill.style.width = '0%';
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add a subtle parallax effect to the bottle
window.addEventListener('scroll', () => {
  const bottle = document.querySelector('.bottle-container');
  if (bottle) {
    const scrolled = window.pageYOffset;
    const bottlePosition = bottle.getBoundingClientRect().top;
    
    if (bottlePosition < window.innerHeight && bottlePosition > -bottle.offsetHeight) {
      const parallax = (scrolled - bottle.offsetTop) * 0.1;
      bottle.style.transform = `translateY(${parallax}px)`;
    }
  }
});

// Optional: Log when user reaches the letter
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("📜 Letter discovered!");
    }
  });
}, { threshold: 0.5 });

const letterSection = document.querySelector('.letter-section');
if (letterSection) {
  observer.observe(letterSection);
}