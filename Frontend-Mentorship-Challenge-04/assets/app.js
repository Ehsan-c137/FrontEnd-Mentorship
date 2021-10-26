const homepageRightSideIcon = document.querySelector('.homepage__right-side-icon');
const horizontalRow = document.querySelector('.horizontal-row');
const homepageRigtSideText = document.querySelector('.homepage__right-side-text');

homepageRightSideIcon.addEventListener('click', function(){
   homepageRightSideIcon.querySelector('i').classList.toggle('rotate-icon')
   horizontalRow.classList.toggle('homepage-activeRow')
   homepageRigtSideText.classList.toggle('homepageRigtSideText-active')
})


    // ++-------------------++
    // || hamburger   menu  ||
    // ++-------------------++

const menu = document.querySelector('.menu'),
      menuItems = document.querySelectorAll('.menu-item'),
      hamburger = document.querySelector('.hamburger-buttons'),
      closeIcon = document.querySelector('.close-icon'),
      menuIcon = document.querySelector('.menu-icon');


function toggleMenu(){
   if(menu.classList.contains('show-menu')){
      menu.classList.remove('show-menu');
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
   } else {
      menu.classList.add('show-menu');
      closeIcon.style.display = 'block';
      menuIcon.style.display = 'none';
   }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
   function(menuItem){
      menuItem.addEventListener('click', toggleMenu)
   }
)