const navigationToggle = document.querySelector(".navigation-toggle");
const mainNavigation = document.querySelector(".main-navigation");

navigationToggle.addEventListener("click", () => {
  const isActive = mainNavigation.classList.toggle("active");

  mainNavigation.style.maxHeight = isActive
    ? `${mainNavigation.scrollHeight}px`
    : `0px`;
});

/* плавный скролл  */
window.gsap.registerPlugin(window.ScrollTrigger);

const lenis = new window.Lenis();
lenis.on("scroll", window.ScrollTrigger.update);

window.gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

window.gsap.ticker.lagSmoothing(0);
