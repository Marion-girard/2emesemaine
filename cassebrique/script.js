const div = document.createElement("div")
let radius = 15
let ballPosX = 100
let ballPosY = 100
let ball = document.createElement("div")


ball.style.width = '30px' = radius + 2 +'px'
ball.style.height = '30px'= radius + 2 +'px'
ball.style.backgroundColor = 'red';
ball.style.borderRadius = '50%';
ball.style.position = "absolute"
ball.style.top = ballPosX + "px",
ball.style.left = ballPosX + "px",

div.style.width = window.innerWidth; // 50% de la largeur de l'écran
div.style.height = window.innerHeight;

document.addEventListener('DOMContentLoaded', ()=> {

    document.body.appendChild(div);
    div.appendChild(ball);

    Window.setInterval(moveDiv, 500 / 60);
})



function moveDiv() {
    ballPosX +=2*directionX;
    ball.style.left = ballPosX + 'px';
    if(ballPosX + radius*2 >= window.innerWidth || ballPosX <= 0){
       directionX*=-1
    }

    else if (posY > window.innerWidth)
    {
        posX--;
        posY--;
        ball.style.left = posX + 'px';
        console.log("demi tours")
    }
    
}   









