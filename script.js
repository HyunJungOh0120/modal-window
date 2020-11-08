'use strict';

////////// DOM Selector /////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // Array

////////// EVENT HANDLER //////////////////////////////////
const openModal = function (event) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function (event) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

///// Array ㅇㅣ기 때문에 .textContent 를 할 수가 없다. 그래서 for loop 사용해서 array 내 발류들을 꺼내주는 것! ///////////////////////////////////////////
//  console.log(btnsOpenModal.textContent);    -> undefined

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/////////// Handling 'ESC' Keypress event //////////////////////////////////////////

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
