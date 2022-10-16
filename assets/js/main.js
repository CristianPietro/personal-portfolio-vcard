'use strict'



// element toggle function
const elementToggleFunc = function (elem) {elem.classList.toggle('active')}

//sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarbtn = document.querySelector("[data-sidebar-btn]");

//sidebar toggle functionality mobile
sidebarbtn.addEventListener("click", () =>{elementToggleFunc(sidebar)})
