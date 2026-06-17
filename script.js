const player = document.getElementById("player");
const playBtn = document.getElementById("play-btn");

let x = 0;
let speed = 2;
let direction = 1;
let isPlaying = false;

function animate() {
  if (!isPlaying) return;

  x += speed * direction;

  if (x >= 560 || x <= 0) {
    direction *= -1;
  }

  player.style.left = x + "px";
  requestAnimationFrame(animate);
}

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    isPlaying = true;
    animate();
  }
});

/* dev note: see README Roadmap + issues for planned enhancements. */
