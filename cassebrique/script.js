const div = document.createElement("div")
const ball = document.createElement("div")


ball.style.width = '30px';
ball.style.height = '30px';
ball.style.backgroundColor = 'red';
ball.style.borderRadius = '30px';


ball.style.position = "relative";
ball.style.left = window.innerWidth/2;

ball.style.top = window.innerHeight/2;

div.style.width = window.innerWidth; // 50% de la largeur de l'écran
div.style.height = window.innerHeight;

document.body.appendChild(div);
div.appendChild(ball);

ball.positionX +=ball.ballspeed *ball.directionX
ball.positionY += ball.ballspeed *ball.directionY
