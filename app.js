console.log("FlyRank Capstone app is running successfully!");

const consoleOutput = document.getElementById("consoleOutput");
const airlineItems = document.querySelectorAll(".airline-list__item");
const metricCards = document.querySelectorAll(".metric-card");

function appendLog(message) {
  const line = document.createElement("p");
  line.className = "console__line";
  line.textContent = message;
  consoleOutput.appendChild(line);
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
  console.log(message);
}

function setActiveAirline(selected) {
  airlineItems.forEach((item) => {
    item.classList.toggle("is-active", item === selected);
  });
}

airlineItems.forEach((item) => {
  item.addEventListener("click", () => {
    const airline = item.dataset.airline;
    setActiveAirline(item);
    appendLog(`Airline selected: ${airline}`);
  });
});

metricCards.forEach((card) => {
  card.addEventListener("click", () => {
    const metric = card.dataset.metric;
    const label = card.querySelector(".metric-card__label").textContent;
    appendLog(`Metric card clicked: ${label} (${metric})`);
  });
});

function initSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const toggle = document.getElementById("sidebarToggle");

  toggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("is-open");
    overlay.classList.toggle("is-visible", isOpen);
    overlay.hidden = !isOpen;
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    overlay.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  appendLog("Dashboard loaded. Click a metric card or airline to interact.");
});
