import { dragging, dragStart, dragStop, moveCarusel } from "./hour-forecast-carusel.js";
import { loadHumidityChart } from "./humidity-chart-load.js";
import { getCurrentDateInfo } from "./clock-and-this-day.js";

window.onload = () => {
  // Hour forecast scroll
  const carusel = document.querySelector(".hour-forecast");
  carusel.addEventListener("mousedown", dragStart);
  carusel.addEventListener("mousemove", dragging);
  carusel.addEventListener("mouseup", dragStop);

  // Initialization hour forecast carusel
  moveCarusel();

  // Load humidity chart
  loadHumidityChart();

  // Initalization clock and date
  const [clockNode, dateNode] = Array.from(
    document.querySelector(".clock-and-current-date").children
  );
  let clockReloadInterval = setInterval(() => {
    const {time: digitalClockTime, date: digitalClockDate } = getCurrentDateInfo();
    clockNode.innerText = digitalClockTime;
    dateNode.innerText = digitalClockDate;
  }, 1000)


};
