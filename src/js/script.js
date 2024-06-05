"use strict";

const icons = document.querySelectorAll(".icon");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", () =>
    btn.parentElement.children[0].children[0].classList.add(
      btn.textContent.toLowerCase()
    )
  );
  btn.classList.add(btn.textContent.toLowerCase());
});

// icons.forEach((el, i) => {
//   el.classList.add(btns[i].textContent.toLowerCase());
// });
