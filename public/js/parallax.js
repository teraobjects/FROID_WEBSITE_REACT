// Man image: scroll down → move down + left; scroll up → move right + up
function initManImageParallax() {
  var wrapper = document.querySelector(".solutions-note-image-wrapper");
  var noteSection = document.querySelector(".solutions-note-wrapper");
  if (!wrapper || !noteSection) return;

  function update() {
    var scrollY = window.scrollY || window.pageYOffset;
    var rect = noteSection.getBoundingClientRect();
    var sectionTop = rect.top + scrollY;
    var viewHeight = window.innerHeight;
    var start = sectionTop - viewHeight * 0.4;
    var end = sectionTop + 350;
    var progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));
    var moveAmount = 45;
    var x = -(progress - 0.5) * moveAmount * 2;
    var y = (progress - 0.5) * moveAmount;
    wrapper.style.transform = "translate(" + x + "px, " + y + "px)";
    wrapper.style.transition = "transform 0.1s ease-out";
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initManImageParallax);
} else {
  initManImageParallax();
}

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
