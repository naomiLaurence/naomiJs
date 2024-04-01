const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d');

const ground = new Image();
ground.src = 'images/green.png'

const foodImg = new Image()
foodImg.src = 'images/diamond.png'

const snakeHead = new Image()
snakeHead.src = 'images/blue.png'

const snakeBody = new Image()
snakeBody.src = 'images/circleGreen.png'

let box = 32;

let score = 0;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
};

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

document.addEventListener('keydown', direction);

let dir;

function direction(event) {
    if (event.keyCode == 37 && dir != 'right') {
        dir = 'left';
    } else if (event.keyCode == 38 && dir != 'down') {
        dir = 'up';
    } else if (event.keyCode == 39 && dir != 'left') {
        dir = 'right';
    } else if (event.keyCode == 40 && dir != 'up') {
        dir = 'down';
    }
};

function eatTail(head, arr) {
    for (let i in arr) {
        if (head.x == arr[i].x && head.y == arr[i].y) {
            clearInterval(game);
        }
    }
}

function drawGame() {
    ctx.drawImage(ground, 0, 0);

    ctx.drawImage(foodImg, food.x, food.y, box, box)

    for (let i in snake) {
        if (i == 0) {
            ctx.drawImage(snakeHead, snake[i].x, snake[i].y, box, box)
        } else {
            ctx.drawImage(snakeBody, snake[i].x, snake[i].y, box, box)
        }
    }

    ctx.fillStyle = 'white';
    ctx.font = '50px Anta, sans-serif';

    ctx.fillText('Snake Game 🐍: ' + score, box * 2, box * 1.7);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // if (snakeX == food.x && snakeY == food.y) {
    if (snakeX >= food.x - 24 && food.x + 24 >= snakeX && snakeY >= food.y - 24 && food.y + 24 >= snakeY) {
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        };
    } else {
        snake.pop();
    }

    if (snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17) {
        clearInterval(game);
    }

    let resolution = 2;

    if (dir == 'left') snakeX -= resolution;
    if (dir == 'right') snakeX += resolution;
    if (dir == 'up') snakeY -= resolution;
    if (dir == 'down') snakeY += resolution;

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    eatTail(newHead, snake)
    snake.unshift(newHead);
}

let game = setInterval(drawGame, 10)