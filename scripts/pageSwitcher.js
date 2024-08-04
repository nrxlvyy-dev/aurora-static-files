/**
 * Aurora Raider (c) 2024
 *
 * This file is part of Aurora Raider,
 * a discord raid toolkit for intended for
 * educational purposes only.
 * 
 * This is a public script and it does not
 * contain any sensitive content or logic.
 * However, NEVER change any content of 
 * this file since will break the functionality 
 * of whole application and you will need to
 * reinstall it.
 */

const buttons = document.querySelectorAll(".button[data-target]");
const sections = document.querySelectorAll(".section");

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");
    sections.forEach((section) => {
      if (section.classList.contains(target)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
});
