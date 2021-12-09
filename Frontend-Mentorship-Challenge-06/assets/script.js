"use strict";

const modalHamburgerBtn = document.querySelector(".modal_hamburger");
const modalContainer = document.querySelector("#modal-container");
const mainContainerSub = document.querySelector(".main-container-sub");

const m = document.querySelector("#second-container");
console.log(m);
const openModal = function () {
   mainContainerSub.classList.toggle("show-menu");
};

modalHamburgerBtn.addEventListener("click", openModal);
