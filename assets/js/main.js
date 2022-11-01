'use strict'



// element toggle function
const elementToggleFunc = function (elem) {elem.classList.toggle('active')}

//sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarbtn = document.querySelector("[data-sidebar-btn]");

//sidebar toggle functionality mobile
sidebarbtn.addEventListener("click", () =>{elementToggleFunc(sidebar)})

// testimonials variables

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

//modal toggle function

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}


//add click event to all modal items

for (let i = 0; i < testimonialsItem.length; i++){
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;

    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });
}

// add click event to model close button

modalCloseBtn.addEventListener("click", testimonialsModalFunc)
overlay.addEventListener("click", testimonialsModalFunc);;