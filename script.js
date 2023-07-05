const countToDate = new Date().setHours(new Date().getHours() + 240);
let previous;

setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
  if (timeBetweenDates !== previous) {
    flipAllCards(timeBetweenDates);
  }
  previous = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time / 3600) % 24);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.floor(time % 60); // Update the days card

  const daysCard = document.querySelector(".days .time1");
  const formattedDays = days.toString().padStart(2, '0')
  daysCard.querySelector(".top").textContent = formattedDays;
  daysCard.querySelector(".bottom").textContent = formattedDays; // Update the hours, minutes, and seconds cards

  time1(document.querySelector(".hours .time1"), hours);
  time1(document.querySelector(".minutes .time1"), minutes);
  time1(document.querySelector(".seconds .time1"), seconds);
}

function time1(time1, time) {
  time = String(time).padStart(2, "0");
  const currentValue = time1.querySelector(".top").innerText;
  if (time === currentValue) return;

  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  topFlip.innerText = currentValue;

  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  bottomFlip.innerText = time;

  const topHalf = time1.querySelector(".top");
  const bottomHalf = time1.querySelector(".bottom");

  topFlip.addEventListener("animationstart", () => {
    topHalf.innerText = time;
  });

  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.innerText = time;
    bottomFlip.remove();
  });

  time1.appendChild(topFlip);
  time1.appendChild(bottomFlip);
}
