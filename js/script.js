document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");
  const allNavItems = document.querySelectorAll(".nav-link");
  const navList = document.querySelector(".navbar-collapse");

  function addShadow() {
    if (window.scrollY >= 300) {
      console.log("True");
      nav.classList.add("shadow-bg");
    } else {
      console.log("False");
      nav.classList.remove("shadow-bg");
    }
  }

  allNavItems.forEach((item) =>
    item.addEventListener("click", () => navList.classList.remove("show"))
  );
  window.addEventListener("scroll", addShadow);
});
