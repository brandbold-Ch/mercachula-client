let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

const toggle = () => {
    classList.toggle("active");
    if (classList.contains("active")) {
      profileDropdownList.style.display = "block";
    } else {
      profileDropdownList.style.display = "none";
    }
  };
  

window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
});
