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
 * This function fetches logs from the server and
 * displays them on the page.
 * 
 * @returns {void}
 */
function fetchLogs() {
  fetch("/get_logs")
    .then((response) => response.json())
    .then((data) => {
      const outputDiv = document.querySelector(".output");
      outputDiv.innerHTML = "";
      data.logs.forEach((log) => {
        const logElement = document.createElement("p");
        logElement.innerHTML = `
          <span class="log-circle" style="background-color: ${log.color};"></span>
          <span class="log-hour">[${log.time}]</span>
          <span class="log-normal">${log.message}</span>
          <span class="log-token">${log.token}</span>
        `;
        outputDiv.appendChild(logElement);
      });
    })
    .catch((error) => console.error("Failed to fetch logs", error));
}

// Fetch logs every 100ms to keep the logs updated
document.addEventListener("DOMContentLoaded", () => {
  fetchLogs();
  setInterval(fetchLogs, 100);
});
