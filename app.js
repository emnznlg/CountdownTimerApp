const countdown = () => {
  const futureDate = new Date("Jan 1, 2023 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const gap = futureDate - currentDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const lastDay = Math.floor(gap / day);
  const lastHour = Math.floor((gap % day) / hour);
  const lastMinute = Math.floor((gap % hour) / minute);
  const lastSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = lastDay;
  document.querySelector(".hour").innerText = lastHour;
  document.querySelector(".minute").innerText = lastMinute;
  document.querySelector(".second").innerText = lastSecond;
};
countdown();

setInterval(countdown, 1000);
