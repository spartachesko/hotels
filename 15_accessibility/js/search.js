document.querySelector(".header__search__btn__main").addEventListener("click", function() {
  document.querySelector(".header__search").classList.add("active");
  document.querySelector(".header__search__btn__main").classList.add("active");
})
document.querySelector(".header__search__close").addEventListener("click", function() {
  document.querySelector(".header__search").classList.remove("active");
  document.querySelector(".header__search__btn__main").classList.remove("active");
})