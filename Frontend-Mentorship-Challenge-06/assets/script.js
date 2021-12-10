"use strict";

const modalHamburgerBtn = document.querySelector(".modal_hamburger");
const modalHamburgerOpen = document.querySelector(".modal-hamburger-open");
const closeHamBtn = document.querySelector(".close-ham-btn");
const mainContainerSub = document.querySelector(".main-container-sub");

const openModal = function () {
   mainContainerSub.classList.toggle("show-menu");
   closeHamBtn.classList.toggle("show-close-btn");
   modalHamburgerOpen.classList.toggle("modal-hamburger-open-hidden");
};

modalHamburgerBtn.addEventListener("click", openModal);
