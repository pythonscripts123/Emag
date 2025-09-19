const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");
const scoreEl = document.getElementById("score");
let isJumping = false;
let score = 0;

// Jump function
function jump() {
    if (isJumping) return;
    isJumping = true;
    let jumpHeight = 0;
    const upInterval = setInterval(() => {
        if (jumpHeight >= 100) {
            clearInterval(upInterval);
            const downInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                jumpHeight -= 5;
                dino.style.bottom = jumpHeight + "px";
            }, 20);
        }
        jumpHeight += 5;
        dino.style.bottom = jumpHeight + "px";
    }, 20);
}

// Control jump with space or tap
document.addEventListener("keydown", e => { if (e.code === "Space") jump(); });
document.addEventListener("touchstart", jump);

// Move obstacle
function moveObstacle() {
    let obstaclePosition = 600;
    const obstacleInterval = setInterval(() => {
        obstaclePosition -= 10;
        obstacle.style.right = obstaclePosition + "px";

        // Collision detection
        const dinoBottom = parseInt(dino.style.bottom.replace("px",""));
        if (obstaclePosition < 90 && obstaclePosition > 50 && dinoBottom < 40) {
            alert("Game Over! Score: " + score);
            clearInterval(obstacleInterval);
            obstacle.style.right = "0px";
            score = 0;
            scoreEl.innerText = "Score: 0";
            obstaclePosition = 600;
            moveObstacle();
        }

        // Update score
        if (obstaclePosition === 0) {
            score++;
            scoreEl.innerText = "Score: " + score;
        }

        if (obstaclePosition <= -20) obstaclePosition = 600;
    }, 50);
}

moveObstacle();