"use strict";
let qs = (selector) => document.querySelector(selector);

let $ = {};

// selecting the search div
$.search = qs('[data-id="search"]');
// selecting the search button
//selecting search-btn which is in our case the icon
$.searchBtn = qs('[data-id="search-btn"]');
// the navigation menu div
$.navigationMenu = qs('[data-id="navigation-menu"]');
// the search input field
$.searchInputField = qs('[data-id="search-input-field"]');
// the link try premium for free
$.link = qs('[data-id="link"]');

//for profile info
$.profile = qs('[data-id="profile"]');
$.profileInfo = qs('[data-id="profile-info"]');
$.closeBtn = qs('[data-id="close"]');

window.innerWidth <= 1025
  ? $.searchInputField.classList.add("hidden")
  : $.searchInputField.classList.remove("hidden");

// state variable
let visible = false;

// element visibility toggle based on screen width

let hideSearchBarWithArgument = (isVisible) => {
  if (isVisible) {
    if (document.activeElement !== $.searchInputField) {
      $.navigationMenu.classList.remove("hidden");
      $.link.classList.remove("hidden");
      $.search.classList.remove("search-smallScreen");
      $.searchInputField.classList.add("hidden");
      visible = !visible;
    }
  }
};

let showSearchBar = () => {
  $.searchBtn.addEventListener("click", () => {
    if (window.innerWidth <= 1025 && !visible) {
      $.navigationMenu.classList.add("hidden");
      $.link.classList.add("hidden");
      $.search.classList.add("search-smallScreen");
      $.searchInputField.classList.remove("hidden");
      $.searchInputField.style.outlineColor = "blue";
      $.searchInputField.focus();

      visible = !visible;
      console.log(visible);
    }
  });
};

window.requestAnimationFrame(showSearchBar);
setInterval(() => hideSearchBarWithArgument(visible), 1000);

//this is for when the user tries to resize the browser of its own
// window.onresize = () => {
//   if (window.innerWidth > 1025) {
//     $.searchInputField.classList.remove("hidden");
//   } else {
//     $.searchInputField.classList.add("hidden");
//   }
// };
//this below function is for the Profile when the user clicks On ME inside the navbar
$.profile.addEventListener("click", () => {
  $.profileInfo.classList.toggle("hidden");
});
$.closeBtn.addEventListener("click", () => {
  $.profileInfo.classList.add("hidden");
});
