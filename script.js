window.onload = function() {
    canvas = document.getElementById("canvas");
    time = document.getElementById("time");
    score = document.getElementById("score");
    highscoretxt = document.getElementById("highscore");
    ctx = canvas.getContext("2d");

    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;

    setInterval(jogo, 100)

    document.addEventListener("keydown", function(e){
        switch(e.keyCode){
            case 39:
                velX = 1;
                velY = 0;
                break;
            case 37:
                velX = -1;
                velY = 0;
                break;
            case 38:
                velX = 0;
                velY = -1;
                break;
            case 40:
                velX = 0;
                velY = 1;
                break;
        }
    });

}

let highscore = 0;

function jogo(){
    ctx.fillStyle = "#2980B9";

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    positionX += velX;
    positionY += velY;

    if(positionX < 0){
        positionX = grid;
    }

    if(positionX > grid){
        positionX = 0;
    }

    if(positionY < 0){
        positionY = grid;
    }

    if(positionY > grid){
        positionY = 0;
    }

    snake.push({x: positionX, y: positionY});

    ctx.fillStyle = "#00f102";

    for(let i=0; i<snake.length; i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1);
    }

    while(snake.length > tam){
        snake.shift();
    }

    ctx.fillStyle = "#f1c40f";
    ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1);

    if(positionX == foodX && positionY == foodY){
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }

    document.getElementById("score").innerHTML = "Score: " + tam;
    //ctx.fillText("Score: "+tam, 10, 20);

    if (tam > highscore) {
        highscore = tam;
    }

    //ctx.fillText("Highscore: " + highscore, 10, 40);
    highscoretxt.innerHTML = "Highscore: " + highscore;


    for(let i=0; i<snake.length-1; i++){
        console.log(snake[i].x, snake[i].y);
        if(positionX == snake[i].x && positionY == snake[i].y){
            velX = 0;
            velY = 0;
            tam = 3;
            snake = [];
            positionX = 10;
            positionY = 10;
            foodX = 15;
            foodY = 15;
        }
    }
}

