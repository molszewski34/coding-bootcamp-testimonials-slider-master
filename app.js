

const leftBtn = document.getElementById("btn-left")
const rightBtn = document.getElementById("btn-right")
// const textSlide = document.querySelector(".text__container")
// const imgSlide = document.querySelector(".img__container")



rightBtn.addEventListener("click", () => {
  document.querySelector(".tanya").style.display="none";
  document.querySelector(".john").style.display="block";
  document.querySelector(".text-tanya").style.display="none";
  document.querySelector(".text-john").style.display="block";
})

leftBtn.addEventListener("click", () => {
  document.querySelector(".tanya").style.display="block";
  document.querySelector(".john").style.display="none";
  document.querySelector(".text-tanya").style.display="block";
  document.querySelector(".text-john").style.display="none";
})











  // imgSlide.classList.appendChild("john")

  // textSlide.classList.add("text-john")

//   imgSlide.classList.remove("tanya")
//   imgSlide.classList.add("john")
//   textSlide.classList.remove("text-tanya")
//   textSlide.classList.add("text-john")


// hamburgerBtnClose.addEventListener("click", () => {
//   mainMenu.classList.toggle("btn-active")
//   hamburgerBtnOpen.classList.toggle("hidden")
//   hamburgerBtnClose.classList.toggle("active")
// })



// const colorSwitch = document.getElementById("style__switcher");

// colorSwitch.addEventListener("click", checkMode);
// function checkMode() {
//     if (colorSwitch.checked) {
//       darkModeOn();
//     } else {
//       darkModeOff();
//     }
//   }

// function darkModeOn() {
//     document.body.classList.add("dark_mode");
//   }
  
//   function darkModeOff() {
//     document.body.classList.remove("dark_mode");
//   }