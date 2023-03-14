let tabsBtn = document.querySelectorAll('.stages__button');
let tabsItem = document.querySelectorAll('.how__article__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('stages__button--active')});
    e.currentTarget.classList.add('stages__button--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('how__article__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how__article__item--active');
  });
});
