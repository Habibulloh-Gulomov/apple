var elBtn = document.querySelector (".header__burger")
var elNav = document.querySelector (".header__nav")

elBtn.addEventListener('click', function(){
  elNav.classList.toggle("header__nav--open")
})