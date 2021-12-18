"use strict";

const modalHamburgerBtn = document.querySelector(".modal_hamburger");
const modalHamburgerOpen = document.querySelector(".modal-hamburger-open");
const closeHamBtn = document.querySelector(".close-ham-btn");
const mainContainerSub = document.querySelector(".main-container-sub");
const currentTime = document.querySelector(".current-time");

const openModal = function () {
   mainContainerSub.classList.toggle("show-menu");
};
modalHamburgerBtn.addEventListener("click", openModal);

// set time
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
document.querySelector(".current-date").textContent = `${day}`;

// GET CURRENT WEATHER DATA
let weather = {
   apiKey: "fdf7cba70862ec4cdb5083aebdd424b7",
   fetchWeather: function (city) {
      fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
      )
         .then((response) => response.json())
         .then((data) => {
            this.displayWeather(data);
         });
      //.catch((err) => alert(`somthing went wrong. ${err}`));
   },
   displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { sunrise, sunset } = data.sys;
      const { lon, lat } = data.coord;

      document.querySelector(".city-name").textContent = name;
      document.querySelector(
         ".first-container__overal-left img"
      ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      document.querySelector(
         ".description"
      ).textContent = `${day}, ${description}`;
      document.querySelector(".main-temp").textContent = `${Math.trunc(temp)}°`;
      document.querySelector(".humidity").textContent = `${humidity}%`;

      // sunrise,sunset time
      const unixTimestamp = [sunrise * 1000, sunset * 1000];
      function sunMoves(unixtime) {
         const sunTime = new Date(unixtime).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
         });
         return sunTime;
      }
      const sunriseTime = sunMoves(unixTimestamp[0]);
      const sunsetTime = sunMoves(unixTimestamp[1]);
      document.querySelector(".sunset").textContent = sunsetTime;
      document.querySelector(".sunrise").textContent = sunriseTime;

      // uv index
      fetch(
         `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${this.apiKey}`
      )
         .then((response) => response.json())
         .then((data) => showUV(data));
      function showUV(data) {
         const { uvi } = data.current;
         document.querySelector(".uvindex").textContent = ` ${Math.trunc(
            uvi
         )} of 10`;
      }
      // change the background According to location
      // need vpn for iran
      // document.querySelector("#first-container").style.backgroundImage =
      //    "url('https://source.unsplash.com/1600x900/?" + name + "')";
   },

   search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
   },
};
document
   .querySelector(".search-input button")
   .addEventListener("click", function () {
      weather.search();
   });
document
   .querySelector(".search-bar")
   .addEventListener("keyup", function (event) {
      if (event.key == "Enter") weather.search();
   });
