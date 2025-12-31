
var playerX = 200
var fist = playerX
var playerY = 200
var playerhp = 100
var facing = "right"
var eye = playerX + 20
var sword1 = 20
var sword2 = 100
var swordY = playerX - 75
var swordX = playerX + 75

var scaleX = 1
var scaleY = 1

//hi
var level = 1
var leveltimer = 1
var swordtimer = 0

var enimyX = 550
var enimyhp = 100
var orbX = 575
var orbY = 200
var levelspeed = level/2
var baseorbspeed = 3
var orbSpeed = -(baseorbspeed + level)
var attacking = false

//hi

var gravity = 0.6
var velo = 0
var ground = 200

var gameMessage = ""
var timer = 0

var gametimer = 0
var game = ""

var baseW = 600;
var baseH = 400;



function setup() {
    createCanvas(windowWidth, windowHeight);
  updateScale();

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateScale();
}

function updateScale() {
  scaleX = width / baseW;
  scaleY = height / baseH;
}


function draw() {

  // scale all drawings
  scale(scaleX, scaleY);


var mx = mouseX / scaleX
var my = mouseY / scaleY


  
  gametimer = gametimer + 1
  
    //game beginning
  if(gametimer < 240){
    game = "begining"
  }
  else {
  game = "playing"
}

  
  if(game == "begining"){
  fill(0, 0, 0)
  rect(0, 0, 600, 400)
     textSize(15)
    fill(255, 255, 255)
    text("created by",260, 50)
  textSize(75)
  fill(0, 255, 0)
    text("Froggy", 250, 120)
    text("1", 500, 120)
    fill(255, 255, 255)
    text("super", 50, 120)
    textSize(50)
    text("Games", 225, 180)
    if(gametimer > 60){
      fill(0, 0, 0)
      rect(40, 15, 300, 50)
      fill(255, 255, 255)
      text("presents", 215, 250)
      if(gametimer > 120){
        textSize(75)
        fill(200, 40, 204)
        text("Ninja Battles 1", 50, 325)
      }
    }

  }
 
  
  if(game == "playing"){
  background(79, 26, 204);
fill(0, 0, 0)
rect(0, 100, 75, 150)
rect(75, 50, 75, 200)
rect(150, 125, 75, 125)
rect(225, 50, 75, 200)
rect(300, 100, 75, 150)
rect(375, 100, 75, 150)
rect(450, 50, 75, 200)
rect(525, 125, 75, 125)
rect(600, 50, 75, 200)
  

  
  //gravity
  velo = velo + gravity
  playerY = playerY + velo
  
  //level
  text(level, 25, 25)
  if(enimyhp < 1 ){
    leveltimer = leveltimer - 1
    if(leveltimer < 1){
    level = level - 1}
  }
  if(level % 5 === 0){
    background(50, 0, 255)
    fill(255, 255, 255)
  }
  
  
  //floor
  if(playerY >= 200){
    playerY = 200
    velo = 0
  }
  
  //floor
  fill(70, 250, 90)
  line(0, 250, 600, 250)
  rect(0, 250, 600, 250)
  
  
  //player
  if(facing == "right"){
    eye = playerX + 20
  }
  if(facing == "left"){
    eye = playerX - 20
  }
  fill(255, 255, 255)
  ellipse(playerX, playerY, 100, 100)
  fill(0, 0, 0)
  ellipse(eye, playerY - 10, 20, 20)
  fill(100, 0, 200)
  rect(playerX - 50, playerY, 100, 60)
  fill(240, 204, 70)
  triangle(playerX - 75, playerY - 20, playerX, playerY - 75, playerX + 75, playerY - 20)
    ellipse(fist, 200, 40, 40)
  
      //enimy
    fill(0, 0, 255)
  if(fist > enimyX - 20 && fist < enimyX + 20){
    fill(255, 0, 0)
  }
    rect(enimyX, 150, 50, 100)

      //player attack
  fill(0, 0, 0)
  rect(500, 300, 100, 100)

    if (mx > 500 && mx < 600 && my > 300 && my < 400) {
  attacking = true
  swordtimer++
} else {
  attacking = false
  swordtimer = 0
}


  
  if(swordtimer > 30){
    sword1 = 100
    sword2 = 20
    attacking = false
  }


if (attacking) {
  sword1 = 100
  sword2 = 20
  swordY = playerY

  if (facing == "right") {
    swordside = playerX + 75
  } else {
    swordside = playerX - 75 - sword1   // 🔥 THIS IS THE FIX
  }
}
else {
  sword1 = 20
  sword2 = 100
  swordY = playerY - 75

  if (facing == "right") {
    swordside = playerX + 75
  } else {
    swordside = playerX - 75
  }
}

var orbRadius = 25

if (
  attacking &&
  orbX + orbRadius > swordside &&
  orbX - orbRadius < swordside + sword1 &&
  orbY + orbRadius > swordY &&
  orbY - orbRadius < swordY + sword2
) {
  orbSpeed = abs(orbSpeed)
}



  fill(240, 204, 70)
  rect(swordside, swordY, sword1, sword2)
  

  if (
  orbSpeed > 0 &&
  orbX > enimyX &&
  orbX < enimyX + 50
) {
  enimyhp -= 10
  orbX = 575
  orbSpeed = -(baseorbspeed + level)
}

      //supermove
    fill(255, 255, 255)
    rect(400, 300, 75, 75)
if (mx > 400 && mx < 475 && my > 300 && my < 425) {
  if (fist < playerX + 100 && fist > playerX - 100)
    fist = playerX + 250
}

  
    //player damage
  if(fist > enimyX - 20 && fist < enimyX + 20){
    enimyhp = enimyhp - 1
  }
  //playerhp
  fill(255, 255, 255)
  textSize(15)
    text("health = " + playerhp, playerX - 30, playerY - 70)
    if(playerhp < 0){
      playerhp = 0
    }
  
    if(fist <= playerX - 70){
    fist = fist + 2
  }
  if(fist >= playerX + 70){
    fist = fist - 2
  }

  
  
  //enimyhp
  textSize(12)
  fill(255, 255, 255)
  text("health = " + enimyhp, enimyX - 10, 130)
  

  
    //enimy damage
    noStroke()
  fill(0, 0, 255)
ellipse(orbX, 200, 50, 50)
  orbX = orbX + orbSpeed
  if(orbX < playerX + 60 && orbX > playerX - 60 && orbY < playerY + 30 && orbY > playerY - 30){
    playerhp = playerhp - 20
    orbX = 575
  }
  if(orbX < 0){
    orbX = 575
  }
    
  
  //leftbutton
  fill(50, 50, 150)
  rect(0, 325, 75, 75)
if (mx > 0 && mx < 75 && my > 325 && my < 400) {
  playerX = playerX - 3
  facing = "left"
}

//rightbutton
  fill(50, 50, 150)
  rect(100, 325, 75, 75)
if (mx > 100 && mx < 175 && my > 325 && my < 400) {
  playerX = playerX + 3
  facing = "right"
}

  
  //jump
  rect(50, 247, 75, 75)
if (mx > 50 && mx < 125 && my > 247 && my < 310) {
  if (playerY >= 200) {
    velo = -15
  }
}

    

    

  
  
        //button text
  textSize(17)
  fill(255, 255, 255)
  text("right", 20, 370)
  text("jump", 70, 300)
  text("left", 120, 370)
  text("try to destroy the evil rectangle to win", 150, 20)
  textSize(13)
  text("sword attack", 520, 350)
  fill(0, 0, 0)
  text("orb attack", 410, 350)
  

  }
// INSIDE draw():

// lose
if (playerhp < 1) {
  gameMessage = "GAME OVER";
}

// win
if (enimyhp < 1) {
  gameMessage = "YOU WIN";
  level = level + 1
}


// message mode
if (gameMessage !== "") {
  
  // dark background
  fill(0, 0, 0, 150);
  rect(0, 0, 600, 400);
  
  // text
  fill(255);
  textSize(75);
  text(gameMessage, 80, 200);
  
  // increase timer
  timer = timer + 1;
  
  // after 2 seconds, reset game
  if (timer > 120) {
    gameMessage = "";
    timer = 0;
    
    playerhp = 100;
    enimyhp = 100;
    orbX = 575;
    playerX = 200;
  }
  return;
}
  
}

