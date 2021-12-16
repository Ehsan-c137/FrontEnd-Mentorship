"use strict";

const modalHamburgerBtn = document.querySelector(".modal_hamburger");
const modalHamburgerOpen = document.querySelector(".modal-hamburger-open");
const closeHamBtn = document.querySelector(".close-ham-btn");
const mainContainerSub = document.querySelector(".main-container-sub");
const currentTime = document.querySelector(".current-time");

const openModal = function () {
   mainContainerSub.classList.toggle("show-menu");
   closeHamBtn.classList.toggle("show-close-btn");
   modalHamburgerOpen.classList.toggle("modal-hamburger-open-hidden");
};
modalHamburgerBtn.addEventListener("click", openModal);

const time = new Date();
currentTime.textContent = `${time.getHours()}:${time.getMinutes()}`;
const weekday = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];
let day = weekday[time.getDay()];
document.querySelector(".current-date").textContent = day;

// chart js
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
   type: "line",

   data: {
      labels: [
         "saturday",
         "sunday",
         "monday",
         "tuesday",
         "wednesday",
         "thursday",
      ],
      datasets: [
         {
            label: "% humidity",
            data: [10, 19, 76, 5, 40, 3],
            Fill: true,
            backgroundColor: [
               "rgba(255, 99, 132, 0.2)",
               "rgba(54, 162, 235, 0.2)",
               "rgba(255, 206, 86, 0.2)",
               "rgba(75, 192, 192, 0.2)",
               "rgba(153, 102, 255, 0.2)",
               "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
               "rgba(255, 99, 132, 1)",
               "rgba(54, 162, 235, 1)",
               "rgba(255, 206, 86, 1)",
               "rgba(75, 192, 192, 1)",
               "rgba(153, 102, 255, 1)",
               "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
         },
      ],
   },
   options: {
      scales: {
         y: {
            beginAtZero: true,
         },
      },
   },
});
