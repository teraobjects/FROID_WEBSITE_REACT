window.addEventListener("scroll", () => {
  const img = document.querySelector(".solutions-note-image");
  if (!img) return;

  const scrollY = window.scrollY;
  const offset = scrollY * 0.10;   // control speed

  img.style.transform = `translateX(${-offset}px)`;
});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let current = 0;

  const speed = 60; // lower = faster

  const updateCounter = () => {
    const increment = target / speed;

    if(current < target){
      current += increment;
      counter.innerText = Math.ceil(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
