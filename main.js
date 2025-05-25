 // Set tanggal acara (YYYY-MM-DD format)
  const weddingDate = new Date("2025-10-28T09:00:00").getTime();

  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Acara telah berlangsung!";
    }
  }, 1000);


   function openInvitation() {
      document.getElementById('landingPage').style.display = 'none';
      document.getElementById('mainContent').style.display = 'flex';
    }

   const music = document.getElementById('bgm');
    const btn = document.getElementById('musicToggle');
    let isPlaying = false;

    btn.addEventListener('click', function () {
      if (isPlaying) {
        music.pause();
        btn.textContent = '▶'; // Play icon
      } else {
        music.play();
        btn.textContent = '⏸'; // Pause icon
      }
      isPlaying = !isPlaying;
    });