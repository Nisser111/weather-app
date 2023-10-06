const [clockNode, dateNode] = Array.from(
  document.querySelector(".clock-and-current-date").children
);
const lang = document.querySelector("html").lang;

const getCurrentDateInfo = () => {
  // clock
  let currentDate = new Date();

  let date = currentDate
    .toLocaleDateString(lang, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replaceAll(",", "");

  let time = currentDate.toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" });

  return {time: time, date: date};
};

export { getCurrentDateInfo };
