'use strict';

////////// DOM Selector /////////////////////////////////////
const btnsOpenModal = document.querySelectorAll('.show-modal'); //  위는  HTMLCollection Array
// const btnarray = Array.from(btnsOpenModal);  -> not iteratable
const btnOpenArray = Array.from(btnsOpenModal).entries();
const modals = document.querySelectorAll('.modal');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');

console.log(btnsOpenModal, btnOpenArray);
console.log(modals);

// Then use 'for...of'-loop with the index of each item in 'btnOpenArray' for listening to a click event which toggles each modal to open and close
for (let [index, button] of btnOpenArray) {
  ///-> [0, 'button.show-modal'],[1, 'button.show-modal'],[2, 'button.show-modal']
  let buttonIndex = index;

  function openModal() {
    // Optionally toggle a class for CSS animations
    modals[buttonIndex].classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
  function closeModal() {
    modals[buttonIndex].classList.add('hidden');
    overlay.classList.add('hidden');
  }
  //// Open Modal
  button.addEventListener('click', openModal);
  //// Close Modal
  btnsCloseModal[buttonIndex].addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);
}

// ////////// EVENT HANDLER //////////////////////////////////
// const openModal = function (event) {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
//   console.log(modal);
// };
// const closeModal = function (event) {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// ///// Array ㅇㅣ기 때문에 .textContent 를 할 수가 없다. 그래서 for loop 사용해서 array 내 발류들을 꺼내주는 것! ///////////////////////////////////////////
// //  console.log(btnsOpenModal.textContent);    -> undefined

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }

// btnsOpenModal.forEach(function (element) {
//   console.log(btnsOpenModal.element);
//   element.addEventListener('click', function () {});
// });

// //////////////// Close Modal
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// /////////// Handling 'ESC' Keypress event //
// document.addEventListener('keydown', function (event) {
//   console.log(event.key);

//   if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
