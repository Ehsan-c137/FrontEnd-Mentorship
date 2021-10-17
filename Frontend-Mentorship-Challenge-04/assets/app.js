const homepageRightSideIcon = document.querySelector('.homepage__right-side-icon');
const horizontalRow = document.querySelector('.horizontal-row');
const homepageRigtSideText = document.querySelector('.homepage__right-side-text');

homepageRightSideIcon.addEventListener('click', function(){
   homepageRightSideIcon.querySelector('i').classList.toggle('rotate-icon')
   horizontalRow.classList.toggle('homepage-activeRow')
   homepageRigtSideText.classList.toggle('homepageRigtSideText-active')
})
