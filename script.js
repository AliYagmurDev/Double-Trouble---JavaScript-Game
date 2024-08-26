const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.height = 700;

let gameFrame = 0;
const staggerFrames = 8;

let xPos = 0;
let yPos = 0;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(xPos, yPos, 50, 50);

    if (gameFrame % staggerFrames === 0) {
        document.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowUp') {
                if (yPos > 1) {
                    yPos -= 1;
                }
            }
            if (e.code === 'ArrowDown') {
                if (yPos < CANVAS_HEIGHT - 50) {
                    yPos += 1;
                }
            }
            if (e.code === 'ArrowLeft') {
                if (xPos > 1) {
                    xPos -= 1;
                }
            }
            if (e.code === 'ArrowRight') {
                if (xPos < CANVAS_WIDTH - 50) {
                    xPos += 2;
                }
            }
        });

    }
    

    //ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();