class Ball {
    constructor(Posx, Posy, color,) {
        this.Posx = Posx;
        this.Posy = Posy;
        this.color = color;
        this.directionX = 1
        this.directionY = 1
        
    }
}

class Game {
    constructor() {
        this.elements = [];
    }

    add(ball) {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = `${ball.Posx}px`;
        div.style.top = `${ball.Posy}px`;
        div.style.width = '30px';
        div.style.height = '30px';
        div.style.borderRadius = '50%';
        div.style.backgroundColor = ball.color;
        this.elements.push({ ball, div });
        document.body.appendChild(div);
        return this; // permettre le chaînage des appels de méthode
    }

    start() {
        for (let i = 0; i < this.elements.length; i++) {
            let ball = this.elements[i].ball;
            let div = this.elements[i].div;
    
            ball.Posx += 2 * ball.directionX;
            ball.Posy += 2 * ball.directionY;
            div.style.left = ball.Posx + 'px';
            div.style.top = ball.Posy + 'px';
    
            let ballWidth = parseInt(div.style.width);
            let ballHeight = parseInt(div.style.height);
    
            if (ball.Posx + ballWidth >= window.innerWidth || ball.Posx <= 0) {
                ball.directionX *= -1;
            }
    
            if (ball.Posy + ballHeight >= window.innerHeight || ball.Posy <= 0) {
                ball.directionY *= -1;
            }
            for(let j = 0; j< this.elements.length; j++){
                if(i !== j){
                    let otherball = this.elements[j].ball
                    let dx = ball.Posx - otherball.Posx;
                    let dy = ball.Posxy - otherball.Posxy;
                    let distance = Math.sqrt(dx * dx + dy * dy);
        
                        if(distance < ballWidth + ballWidth){
                            ball.directionX *= -1;
                            ball.directionY *= -1;
                            otherball.directionX *= -1;
                            otherball.directionY *= -1;
                        }
                    
                    
                }
            }


        }
    }



}



document.addEventListener('DOMContentLoaded', () => {
    
    const ball = new Ball(100,100,'red')
    const ball2 = new Ball(50, 50, 'blue')
    const ball3 = new Ball(50, 50, 'blue')
    
    const game = new Game()
    game.add(ball).add(ball2).add(ball3)


 
    window.setInterval(() => {
        game.start();
    }, 1000 / 60);
    game.start()
})