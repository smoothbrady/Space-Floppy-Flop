// VAR ?!? it's not the 2000's dude
var meteor = document.getElementById("meteor");
var gap = document.getElementById("gap");

// move this add event listener bit to later, after when we have all the things we need defined, and don't have unnecessary nesting ( see below jump and start game are now locally scoped to the anonymous callback function here - not ideal )
// consider full 'yeet' since you have your JS run after the body of your dom anyway
document.addEventListener('DOMContentLoaded', () => {
    // make spaceShip a pojo - also use camelCase
    const spaceship = document.querySelector('spaceship')
    // unused variable declarations
    const gameDisplay = document.querySelector('scheme')
    const ground = document.querySelector('ground')
    // add these variables to the spaceShip pojo as kvp's
    // instead of independent variables
    let spaceshipLeft = 440
    let spaceshipBottom = 200

    let gravity = 3
    let gameOver = false
    // use camel case
    function startgame() {
        spaceshipBottom -= gravity
        // spaceship.style is undefined, looks like you may have wanted to use setAttribute ? 
        spaceship.style.bottom = spaceshipBottom + 'px'
        spaceship.style.left =spaceshipLeft + 'px'
    }   
    // do we want to start the game every 20ms ?!
    let timerId = setInterval(startgame, 20)
    // control is not a descriptive name here
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
// camelCase ..................v
gap.addEventListener('animationiteration', () => {
    var random = -((Math.random()*600)+150);
    gap.style.top = random + "px";
});
// see how you had to redefine spaceShip here
// VAR !? use const or let 
var spaceship = document.getElementById("spaceship")
var counter = 0
setInterval(() => {
    // what does spaceShip is currently undefined here
    var spaceshipTop;
     () => {
        parseInt(window.getComputedStyle(spaceship).getPropertyValue);
        // bad practice to use before initiation, only works with hoisting / function declaration which you should not be doing 
        if (jumping == 0) {
            spaceship.style.top = (spaceshiptop + 3) + "px";
        }
    };
    if (spaceshipTop > 800) {
        // dont use alert, use JS dom methods instead
        alert("Game over! :(" + counter);
        spaceship.style.top = 600 + "px";
        counter = 0;
    }
},20)
// globally scope variable that should be attached to your spaceShip object
var jumping = 0;
// function declaration instead of a function expression 
// learn to use function expressions with arrow functions
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
    // using variable before initiation
    // CAMEL CASE 
    let jumpcount = 0;
    
    },20);
}

function gameOver() {
    clearInterval(timerId)
    console.log('game over')
    gameOver =true
    document.removeEventListener('keyup', control)
}
