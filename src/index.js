import "./styles.css";

const dropDownHeader = document.querySelectorAll(".dropdown > .header > i");

[...dropDownHeader].forEach((header) => {
  header.addEventListener("click", toggleDropdown);
});

function toggleDropdown(e) {
  e.target.parentNode.nextElementSibling.classList.toggle("hidden");
}
