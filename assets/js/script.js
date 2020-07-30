/* JS FOR THE GAME */

//character properties
const character = document.getElementById('character');
const game = document.getElementById('game');

var characterPos = character.getBoundingClientRect();

var enemy = document.getElementsByClassName('enemy')[0];
var enemies = document.getElementsByClassName('enemy'); //each time we generate a new enemy we push it to the array. enemies.push(generatedEnemy);


//score decisions
const high = document.getElementById('high');
const score = document.getElementById('score');
var highScore = 0;

const characterHeight = character.clientHeight;
const characterWidth = character.clientWidth;

//game variables
//initial position of div (middle of game)
var pos = 13;
var scorePoints = 0;

//paused = 0 || running = 1
var gameState = 0;

setInterval(()=>{

},300)



//##### GAME CONTROLS #####//
function start() {
    if (!gameState) {
        gameState = 1;
        resetScore();
        enemy.classList.add('attack');
       
    }
}

function stop() {
    if(gameState) {
        gameState = 0;
        updateHighscore();
        enemy.classList.remove('attack');
    }
}

var properties = [];
lg(characterPos.y);
function detectCollision() {
    //compare enemy location with character location

        //get coordinates of enemy
        //compare to coord of character
        //if X,Y matches declare collision and end game
     
    for (i=0; i<enemies.length; i++)
    {
        //getting pos for character and enemy
        characterPos = character.getBoundingClientRect();
        properties[i] = enemies[i].getBoundingClientRect();
       
        if(characterPos.x + characterWidth > properties[i].x && characterPos.y == properties[i].y) {
            stop();
        } 
    }
        
}

setInterval( ()=>{
    detectCollision();
},10);

//beta
/*setInterval( () => {
    var iDiv = document.createElement('div');
    iDiv.className = 'enemy attack';
    game.appendChild(iDiv);
},1500);*/


//##### CHARACTER AND ENEMIES CONTROL + GENERATION #####//
function moveUp() {
    lg(getPosUp());
    lg(characterHeight);
    if(getPosUp() >= characterHeight) {
        pos -= 13;
        character.style.top = pos + 'vh';
    }
}

function moveDown() {
    if(getPosUp() < 2*characterHeight) {
        pos += 13;
        character.style.top = pos + 'vh';
    }
}

//##### SCORE AND HIGHSCORE CONTROLS #####//
setInterval( ()=>{
    if(gameState) {
        scorePoints += 1;
        score.innerHTML = scorePoints;
    }
},100);


function resetScore() {
    scorePoints = 0;
    score.innerHTML = scorePoints;
}

function updateHighscore() {
    if (scorePoints > highScore) {
        highScore = scorePoints;
        high.innerHTML = highScore;
    }
}


//##### HELPER FUNCTIONS #####//
function lg(message) {
    console.log(message);
}

function getPosUp() {
    return character.offsetTop - game.offsetTop;
}


//listen for keypress
document.onkeydown = (event) => {
    if ( event.keyCode === 38 ) {
        moveUp();
    } else if( event.keyCode === 40 ) {
        moveDown();
    }
}





