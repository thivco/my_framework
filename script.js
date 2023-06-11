//Infobulles !!! ->

let button = document.getElementsByClassName("info-btn")[0];

button.addEventListener("click", (e) => {
  if (button.getAttribute("data-placement") == "right") {
    console.log("adroit.");
  }
  // console.log("marsh")
});

//Dropdown !
let toHover = document.getElementsByClassName("nav-dropdown-link")[0];
let dropdownMenu = document.getElementsByClassName("nav-dropdown")[0];

toHover.addEventListener("click", function () {
  let expandedCheck = dropdownMenu.getAttribute("aria-expanded");
  if (expandedCheck == "false") {
    dropdownMenu.style.display = "flex";
    dropdownMenu.setAttribute("aria-expanded", "true");
    console.log(expandedCheck);
  }
  if (expandedCheck == "true") {
    dropdownMenu.style.display = "none";
    dropdownMenu.setAttribute("aria-expanded", "false");
    console.log(expandedCheck);
  }
});

// let toggle = document.getElementsByClassName("mobile-nav-toggle")[0];
// let navbar = document.getElementsByClassName("navbar")[0];
// console.log(toggle)
// console.log(navbar)

// toggle.addEventListener("click", (e) => {
//   let toggleState = toggle.getAttribute("aria-expanded");
//   console.log(toggleState)
//   if (toggleState == "false") {
//     navbar.style.display = "flex";
//     navbar.setAttribute("aria-expanded", "true");
//     console.log(toggleState);
//   }
//   if (toggleState == "true") {
//     navbar.style.display = "none";
//     navbar.setAttribute("aria-expanded", "false");
//     console.log(toggleState);
//   }
// })

let toggle = document.getElementsByClassName("mobile-nav-toggle")[0];
let navbar = document.getElementsByClassName("navbar-infos")[0];
const form = document.getElementsByClassName("nav-search-form")[0];

toggle.addEventListener("click", (e) => {
  let toggleState = toggle.getAttribute("aria-expanded");
  console.log(toggleState);
  if (toggleState == "false") {
    navbar.style.display = "flex";
    form.style.display = "flex";
    console.log(toggleState);
    toggle.setAttribute("aria-expanded", "true");
  }
  if (toggleState == "true") {
    navbar.style.display = "none";
    form.style.display = "none";
    console.log(toggleState);
    toggle.setAttribute("aria-expanded", "false");
  }
});

// MODAL ------------->

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("close-btn");

document
  .getElementById("open-modal-btn")
  .addEventListener("click", function () {
    modal.classList.add("modal-show");
  });

document.addEventListener("click", function (event) {
  let zone = event.target.classList;
  if (
    modal.classList.contains("modal-show") &&
    !zone.contains("modal-content") &&
    !zone.contains("btn")
  ) {
    modal.classList.remove("modal-show");
  }
});

// Add event listener to the close button to close the modal
closeBtn.addEventListener("click", function () {
  modal.classList.remove("modal-show");
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modal.classList.remove("modal-show");
  }
});

// let tabs = document.querySelectorAll(".tab-links");
// for (let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener("click", function () {
//     let currentTab = this;
//     let activeTabs = document.querySelector("tab-link-active");
//     activeTabs.classList.remove("tab-link-active");
//     currentTab.classList.add("tab-link-active");
//   });
// }

let hideButton = document.getElementById("hideAll");
let container = document.getElementById("container");

hideButton.addEventListener("click", function (e) {
  if (!container.classList.contains("container-hide")) {
    container.classList.add("container-hide");
  } else if (hideButton.getAttribute("aria-checked")) {
    container.classList.remove("container-hide");
  }
});

let navTitles = document.querySelectorAll(".tab-link");

navTitles.forEach((title) => {
  title.addEventListener(
    "click",
    function (e) {
      let activeTabs = document.querySelectorAll(".tab-active");
      for (let i = 0; i < activeTabs.length; i++) {
        activeTabs[i].classList.remove("tab-active");
      }
    }
    // this.classList.add('tab-active');
  );
});

// let titles = document.getElementsByClassName("row-title");
// console.log(titles)

// titles.forEach(title => {
//   title.addEventListener("click", function(){

//   })
// });

// if(isModalOpened == true){
//   document.addEventListener("click", function(e) {
//     if(modal.contains(e.target)){
//       console.log("rien ne se passe")
//     }
//     else {
//       modal.style.display = "none";
//     }
//   })
// }

// document.addEventListener('click', (event) => {
//   if (event.target !== modal && !modal.contains(event.target) && event.target != document.getElementById("open-modal-btn") && modal.classList.contains("modal-show")) {
//     console.log("C OUVERT")
//     modal.classList.remove('modal-show');
//   }
// });
