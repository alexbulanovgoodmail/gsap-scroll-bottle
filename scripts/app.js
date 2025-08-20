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

/* анимации */
function animationInit() {
  const tl = window.gsap.timeline({
    defaults: {
      ease: "power2.inOut",
    },
  });

  tl.to("body", {
    opacity: 1,
  })
    .to(
      ".header",
      {
        "--border-width": "100%",
        duration: 2,
      },
      0
    )
    .from(
      ".main-navigation a",
      {
        y: -100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        delay: 1,
        ease: "power3.out",
      },
      0
    )
    .to(
      ".sidebar",
      {
        "--border-height": "100%",
        duration: 2,
        delay: 0.45,
      },
      0
    )
    .from(
      ".socials a",
      {
        y: -100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.45,
        ease: "power3.out",
      },
      0
    )
    .to(
      ".intro",
      {
        "--border-width": "100%",
        duration: 1,
        delay: 1.2,
      },
      0
    )
    .to(
      ".hero-title",
      {
        opacity: 1,
        duration: 1,
      },
      0
    )
    .from(
      ".hero-title span",
      {
        x: (i) => (i % 2 === 0 ? -100 : 100),
        opacity: 0,
        delay: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      },
      0
    )
    .to(
      ".hero-bottle",
      {
        opacity: 1,
        delay: 1.5,
        duration: 1.3,
        ease: "power3.out",
      },
      0
    )
    .to(
      ".stamp",
      {
        opacity: 1,
        scale: 1,
        delay: 2.5,
        duration: 0.2,
        ease: "back.out(3)",
      },
      0
    );

  window.ScrollTrigger.matchMedia({
    "(min-width: 1024px)": () => {
      const offset = document.querySelector(".header")?.clientHeight;

      const tl1 = window.gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          endTrigger: ".intro",
          start: `top top+=${offset}`,
          end: `top top+=${offset * 2}`,
          markers: false,
          scrub: true,
          pin: ".hero-bottle",
          invalidateOnRefresh: true,
        },
      });

      tl1.to(".bottle", {
        rotate: 0,
        scale: 0.8,
      });

      const tl2 = window.gsap.timeline({
        scrollTrigger: {
          trigger: ".intro",
          endTrigger: ".timeline-entry:first-of-type",
          start: `top top+=${offset * 2}`,
          end: `top top+=${offset * 2}`,
          markers: false,
          scrub: true,
          pin: ".hero-bottle",
          invalidateOnRefresh: true,
        },
      });

      tl2.to(
        ".hero-bottle",
        {
          x: "33%",
        },
        0
      );

      tl2.to(
        ".bottle",
        {
          rotate: 10,
          scale: 0.7,
        },
        0
      );

      const tl3 = window.gsap.timeline({
        scrollTrigger: {
          trigger: ".timeline-entry:first-of-type",
          endTrigger: ".timeline-entry:last-of-type",
          start: `top top+=${offset * 2}`,
          end: `top top+=${offset * 2}`,
          markers: false,
          scrub: true,
          pin: ".hero-bottle",
          invalidateOnRefresh: true,
        },
      });

      tl3.to(
        ".hero-bottle",
        {
          x: "-33%",
        },
        0
      );

      tl3.to(
        ".bottle",
        {
          rotate: 0,
          scale: 0.7,
        },
        0
      );
    },
  });
}

animationInit();
