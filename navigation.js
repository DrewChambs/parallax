// Wednesday, May 5th 2021

// NAVIGATION SCRIPT /////////////////////

const nav = document.querySelector(".dropx");
const navigation = document.querySelector(".navigation");
const contentpage = document.querySelector(".main-content");

nav.addEventListener("click", function () {
  navigation.classList.toggle("show-links");
  contentpage.classList.toggle("lowermain");
});
// END  NAVIGATION SCRIPT /////////////////////

///////////////////////////////////////////////

//          1
// const navToggle = document.querySelector(".nav-toggle");
// const links = document.querySelector(".links");

// navToggle.addEventListener("click", function () {
//   links.classList.toggle("show-links");
// });
//         1

//      2
// const navToggle = document.querySelector(".btnMenu");
// const links = document.querySelector(".links");

// navToggle.addEventListener("click", () => {
//   links.classList.toggle("show-links");
// });
//      2

//////        3

// const navToggle = document.querySelector(".navToggle");
// const links = document.querySelector(".links");

// navToggle.addEventListener("click", () => {
//   links.classList.toggle("show-links");
//   console.log("working");
// });
//////        3
