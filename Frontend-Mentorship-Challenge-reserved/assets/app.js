const selecting = document.querySelector('#aside-left')

selecting.addEventListener('click',function(e){
   const item = e.target;
   const pItem  = item.parentNode;
   if(item.tagName.toLowerCase() === 'p'){
      selecting.querySelector('.selected').classList.remove('selected');
      selecting.querySelector('.selected-icon').classList.remove('selected-icon');
      item.classList.add('selected');
      pItem.querySelector('i').classList.add('selected-icon')
   }
})

const input = document.querySelector('.container-main-searchbox input');
const backInput = document.querySelector('.container-main-searchbox');
input.addEventListener('focus', function(){
   backInput.style.backgroundColor = 'white';
})
input.addEventListener('blur', function(){
   backInput.style.backgroundColor = '#f6f1f5';
})


const profileAIcon = document.querySelector('.user-name_first i');
const accountContainer = document.querySelector('.profile-modal')
profileAIcon.addEventListener('click',function(){
   accountContainer.classList.toggle('profile-modal-active')
})