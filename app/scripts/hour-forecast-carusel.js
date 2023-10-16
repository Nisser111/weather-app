const carusel = document.querySelector(".hour-forecast");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carusel.scrollLeft;
  carusel.classList.add("dragging");
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carusel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  carusel.classList.remove("dragging");
};

const caruselArrowBtns = Array.from(document.querySelectorAll(".scrollBtn"));
const firstCardWidth = document.querySelector(".single-hour").offsetWidth;
const moveCarusel = () => {
  caruselArrowBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      carusel.scrollLeft +=
        btn.id === "previusBtn" ? -firstCardWidth : firstCardWidth;
        hideArrowBtns();
    });
  });
};

const hideArrowBtns = () => {
  let prevBtn = document.querySelector("#previusBtn");
  let nextBtn = document.querySelector("#nextBtn");

  if (carusel.scrollLeft === 0) prevBtn.style.display = "none";
  else prevBtn.style.display = "block";

  if (carusel.scrollLeft + carusel.offsetWidth === carusel.scrollWidth)
    nextBtn.style.display = "none";
  else nextBtn.style.display = "block";
};

export { dragging, dragStart, dragStop, moveCarusel, hideArrowBtns };
