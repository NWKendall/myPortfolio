import "./stars.css";

export function stars(el) {
  let count = 100;
  let bgElement = document.querySelector(el);
  let i = 0;
  while (i <= count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 3;

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    star.style.animationDuration = 5 + duration + "s";
    star.style.animationDelay = duration + "s";

    if (y > 200 && y < 800 && (x < 700 || (x > 1200 && x < 1800))) {
      star.classList.add("star");

      bgElement.appendChild(star);
      i++;
    }
  }
}
