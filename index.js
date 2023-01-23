const now = Date.now();

const afterDay = now + 1000 * 60 * 60 * 24;

const daysRef = document.getElementById("days");
const hoursRef = document.getElementById("hours");
const minsRef = document.getElementById("mins");
const secsRef = document.getElementById("secs");

const handleTime = () => {
  let difference = afterDay - Date.now();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((difference % (1000 * 60)) / 1000);

  daysRef.innerHTML = days;
  hoursRef.innerHTML = hours;
  minsRef.innerHTML = mins;
  secsRef.innerHTML = secs;

  if (days === 0 && hours === 0 && mins === 0 && secs === 0) {
    clearInterval(x);
  }
};

const x = setInterval(handleTime, 1000);
