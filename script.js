console.log("Love Collage Loaded");

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
      console.log("Letter discovered!");
    }
  });
}, { threshold: 0.5 });

const letterSection = document.querySelector('.letter-section');
if (letterSection) {
  observer.observe(letterSection);
}