const navigationToggle = document.querySelector(".navigation-toggle");
const mainNavigation = document.querySelector(".main-navigation");

navigationToggle.addEventListener("click", () => {
  const isActive = mainNavigation.classList.toggle("active");

  mainNavigation.style.maxHeight = isActive
    ? `${mainNavigation.scrollHeight}px`
    : `0px`;
});
