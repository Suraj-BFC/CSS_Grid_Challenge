function navHidden() {
  const outerGrid = document.querySelector(".outergrid");
  outerGrid.classList.toggle("outergrid-expanded");

  const navClass = document.querySelector("nav");
  navClass.classList.toggle("hide-nav");
}
