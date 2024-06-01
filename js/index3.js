let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);

  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  const countdownTime = (hours * 3600 + minutes * 60 + seconds) * 1000;
  const endTime = Date.now() + countdownTime;

  countdownInterval = setInterval(() => {
    const now = Date.now();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown-display").innerText = "Time is over";
      return;
    }

    const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeLeft / 1000) % 60);

    document.getElementById(
      "countdown-display"
    ).innerText = `${hoursLeft}ч ${minutesLeft}м ${secondsLeft}с`;
  }, 1000);
}
