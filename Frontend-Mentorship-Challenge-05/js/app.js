// const { response } = require("express");

// 1- get elements
const formContainer = document.querySelector(".form-container");
const username = document.querySelector("#username");
const apiKey = document.querySelector("#api_key");
const apiSecret = document.querySelector("#api_secret");
const btnSubmit = document.querySelector("#btn_submit");

const apiUrl = "/api/v1";

const sendToServer = function () {
   // 1- get data
   const _username = username.value;
   const _apiKey = apiKey.value;
   const _apiSecret = apiSecret.value;

   // 2- validate data
   if (_username && _apiKey && _apiSecret) {
      fetch(apiUrl + "/save", {
         method: "POST",
         body: {
            username: _username,
            api_key: _apiKey,
            secret_key: _apiSecret,
         },
      })
         .then((response) => {
            alert("resid");
         })
         .catch((error) => {
            console.log("Error", error);
         });
   } else {
      // alert box
   }
};

btnSubmit.addEventListener("click", sendToServer);

// TODO change the btn color when form complete.
// formContainer.addEventListener("keyup", function () {
//    if (_username && _apiKey && _apiSecret) {
//       btnSubmit.style.backgroundColor = "#225f20";
//    }
// });

// const sendToServer = () => {
//    // validate data api_key, api_secret
//    if (apiKey.value && apiSecret.value)
//       alert("mitoni data send koni be server");
//    else alert("nemitni bug dari!");
//    // send to server!
// };
