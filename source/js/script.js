let navWrapper = document.querySelector('.main-header__wrapper');
let navToggle = document.querySelector('.navigation-toggle');
let navMain = document.querySelector('.navigation');

navWrapper.classList.remove('main-header__wrapper--nojs');

navToggle.addEventListener('click', function() {

  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');

}  else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
}

let changeIcon = document.getElementsByClassName('navigation-toggle__popower-icon')

for (item of changeIcon) {
item.classList.toggle('hide')
}
})
