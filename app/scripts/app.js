import { dragging, dragStart, dragStop, moveCarusel } from "./hour-forecast-carusel.js";
import { loadHumidityChart } from "./humidity-chart-load.js";

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

  
};
