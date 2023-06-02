"use strict";
const modalOpenButtons = document.querySelectorAll(".show-modal");
const modalCloseButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalOpenFunction = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const modalCloseFunction = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < modalOpenButtons.length; i++) {
  modalOpenButtons[i].addEventListener("click", modalOpenFunction);
}
modalCloseButton.addEventListener("click", modalCloseFunction);
overlay.addEventListener("click", modalCloseFunction);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    modalCloseFunction();
});
