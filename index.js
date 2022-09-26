var meteor = document.getElementById("meteor");
var gap = document.getElementById("gap");

document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.querySelector('spaceship')
    const gameDisplay = document.querySelector('scheme')
    const ground = document.querySelector('ground')
    
    let spaceshipLeft = 440
    let spaceshipBottom = 200
    let gravity = 3
    let gameOver = false
    
    function startgame() {
        spaceshipBottom -= gravity
        spaceship.style.bottom = spaceshipBottom + 'px'
        spaceship.style.left =spaceshipLeft + 'px'
    }   
    let timerId = setInterval(startgame, 20)

    function control(event) {
        if (event.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (spaceshipBottom < 680) spaceshipBottom += 100
        spaceship.style.bottom = spaceship + 'px'
    }
    document.addEventListener('keyup', jump)

})

gap.addEventListener('animationiteration', () => {
    var random = -((Math.random()*600)+150);
    gap.style.top = random + "px";
});

var spaceship = document.getElementById("spaceship")
var counter = 0
setInterval(() => {
    var spaceshipTop; () => {
        parseInt(window.getComputedStyle(spaceship).getPropertyValue);
        if (jumping == 0) {
            spaceship.style.top = (spaceshiptop + 3) + "px";
        }
    };
    if (spaceshipTop > 800) {
        alert("Game over! :(" + counter);
        spaceship.style.top = 600 + "px";
        counter = 0;
    }
},20)

var jumping = 0;

function jump() {
    jumping = 1
    var jumpInterval = setInterval(function(){
        var spaceshipTop = parseInt(window.getComputedStyle(spaceship).getPropertyValue)
        if(spaceship)
        spaceship.style.top =(spaceshipTop-4) +"px"
        if(jumpcount > 30){
            clearInterval(jumpInterval);
            jumping=0;
            jumpcount=0;
        }
    let jumpcount = 0;
    
    },20);
}

function gameOver() {
    clearInterval(timerId)
    console.log('game over')
    gameOver =true
    document.removeEventListener('keyup', control)
}
