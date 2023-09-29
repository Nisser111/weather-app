import { dragging, dragStart, dragStop, moveCarusel} from "./hour-forecast-carusel.js";

// Hour forecast scroll
const carusel = document.querySelector(".hour-forecast");
carusel.addEventListener("mousedown", dragStart);
carusel.addEventListener("mousemove", dragging);
carusel.addEventListener("mouseup", dragStop);

moveCarusel();
