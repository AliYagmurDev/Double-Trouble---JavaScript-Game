const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.height = 700;

let gameFrame = 0;
const staggerFrames = 3;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(10, 10, 50, 50);

  //ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();