const homepageRightSideIcon = document.querySelector('.homepage__right-side-icon');
const horizontalRow = document.querySelector('.horizontal-row');
const homepageRigtSideText = document.querySelector('.homepage__right-side-text');

homepageRightSideIcon.addEventListener('click', function(){
   homepageRightSideIcon.querySelector('i').classList.toggle('rotate-icon')
   horizontalRow.classList.toggle('homepage-activeRow')
   homepageRigtSideText.classList.toggle('homepageRigtSideText-active')
})


// hamburger   menu

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


// customers Page slider 
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.customers-page__sample');
// buttons
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
// counter 
let counter = 1;
const size = carouselItems[0].clientWidth;
// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// btn listeners
nextBtn.addEventListener('click', function(){
   carouselSlide.style.transition = 'transform 0.4s ease-in-out';
   counter++;
   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});
prevBtn.addEventListener('click', function(){
   carouselSlide.style.transition = 'transform 0.4s ease-in-out';
   counter--;
   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend',function(){

   if(carouselItems[counter].id === 'last-clone'){
      carouselSlide.style.transition = 'none';
      counter = carouselItems.length - counter - 3;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }
})

// || customers Page slider end ||


// GO TO TOP (LANDING PAGE) BUTTON 

const goToTopBtn = document.getElementById('go-to-top');
goToTopBtn.addEventListener('click',function(){
   document.getElementById('homepage').scrollIntoView({
      behavior: 'smooth'
    });
})

window.addEventListener("scroll",()=>{
   let scroll = window.scrollY;
   if(scroll > 600){
      goToTopBtn.classList.add('go-to-top-active')
   } else {
      goToTopBtn.classList.remove('go-to-top-active')
   }
});

// GO TO TOP (LANDING PAGE) BUTTON   END

