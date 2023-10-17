const div = document.createElement("div")
const ball = document.createElement("div")


ball.style.width = '30px';
ball.style.height = '30px';
ball.style.backgroundColor = 'red';
ball.style.borderRadius = '30px';


ball.style.position = "relative";
ball.style.left = "50%";
ball.style.right = "50%";
ball.style.top = "50%";
ball.style.bottom = "50%";
div.style.width = '100vw'; // 50% de la largeur de l'écran
div.style.height = '100vh';

document.body.appendChild(div);
div.appendChild(ball);

