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

/**
 * This function adds a click event listener to a button
 * that sends a POST request to the server.
 * 
 * @param {string} className - The class name of the button
 * @param {string} endpoint - The endpoint to send the POST request to
 * 
 * @returns {void}
 */
function addButtonListener(className, endpoint) {
  const button = document.querySelector(className);
  button.addEventListener("click", function () {
    fetch(`http://localhost:54352/${endpoint}`, {
      method: "POST",
      body: JSON.stringify({}),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });
}

addButtonListener(".circle.red", "close");
addButtonListener(".circle.yellow", "minimize");
addButtonListener(".circle.green", "maximize");
