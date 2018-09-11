var posXbi = 20;
var posYbi = 20;
var tamtch = 20;

var posXbi1 = 60;
var posYbi1 = 20;
var tamtch1 = 20;

var posXbi2 = 100;
var posYbi2 = 20;
var tamtch2 = 20;

var posXbi3 = 140;
var posYbi3 = 20;
var tamtch3 = 20;

var posXbi4 = 180;
var posYbi4 = 20;
var tamtch4 = 20;

var posXbi5 = 220;
var posYbi5 = 20;
var tamtch5 = 20;

var posXbi6 = 260;
var posYbi6 = 20;
var tamtch6 = 20;

var posXbi7 = 300;
var posYbi7 = 20;
var tamtch7 = 20;

var posXbi8 = 340;
var posYbi8 = 20;
var tamtch8 = 20;

var posXbi9 = 380;
var posYbi9 = 20;
var tamtch9 = 20;

var chu = 1;

var shi = 20;


function setup() {
  createCanvas(600, 600);
  background(400);
  
 
}


function draw() {
  
rect(posXbi, posYbi, tamtch, tamtch);
  
rect(posXbi1, posYbi1, tamtch1, tamtch1)
  
rect(posXbi2, posYbi2, tamtch2, tamtch2);
  
rect(posXbi3, posYbi3, tamtch3, tamtch3);
  
rect(posXbi4, posYbi4, tamtch4, tamtch4);
  
rect(posXbi5, posYbi5, tamtch5, tamtch5);
  
rect(posXbi6, posYbi6, tamtch6, tamtch6);
  
rect(posXbi7, posYbi7, tamtch7, tamtch7);  
  
rect(posXbi8, posYbi8, tamtch8, tamtch8);  

rect(posXbi9, posYbi9, tamtch9, tamtch9);  


  
  
  if (mouseIsPressed){
    
      
    
    if(chu == 1){
       if (mouseY === pmouseY && mouseX === pmouseX) {
    ellipse (mouseX, mouseY, 10, 10);
       }
    }
    
    if(chu == 2){
    ellipse (mouseX, mouseY, 60, 60);
    }
    
    if(chu == 3 ){
  
    	 if (mouseX < 200 ){
        fill (`#ea80fc`);
    rect (mouseX, mouseY, shi, shi);
    } else {
       fill (`#4a148c`);
        rect (mouseX, mouseY, shi, shi);
      	
      	 if (mouseY < 300 ){
        fill (`#ff9e80`);
    rect (mouseX, mouseY, shi, shi);
    } 
    }
      }
    
    if(chu == 4){
    line (mouseX + 10, mouseY + 10, mouseX - 50, mouseY - 50 );
    }
    
    if(chu == 5){
    triangle (mouseX, mouseY ,mouseX + 10 ,mouseY + 10 ,mouseX + 30 ,mouseY + 30);
    }
    
    if(chu == 6){
    line(width/2, height/2, mouseX,mouseY); 
    }
    
     if(chu == 7){
    quad (mouseX + 10, mouseY + 10, mouseY + 20, mouseY + 20, mouseY + 30, mouseY + 30 ); 
    }
    
    if(chu == 8){
    quad (mouseX +10, mouseY, mouseX, mouseY, 10,10); 
    }
    
    if(chu == 9 ){
    line(mouseX, mouseY, pmouseX, pmouseY);
    }
    
    if(chu == 10 ){
    arc(mouseX, mouseY, 60, 60, HALF_PI, PI);
    }
    
    if(mouseX >posXbi && mouseX <posXbi +tamtch && mouseY > posYbi && mouseY < posYbi + tamtch){
      background (`#000000`);
      strokeWeight(1);
      stroke(`#ffffff`);
      fill(`ffffff`); 
      chu = 1;
    }
    if(mouseX >posXbi1 && mouseX <posXbi1 +tamtch1 && mouseY > posYbi1 && mouseY < posYbi1 + tamtch1){
      background (`#d61a39`);
      strokeWeight(1);
      stroke(`#9b0000`);
      fill(`#ff80ab`);
      chu = 2;
    
      
    }
    if(mouseX >posXbi2 && mouseX <posXbi2 +tamtch2 && mouseY > posYbi2 && mouseY < posYbi2 + tamtch2){
      background (`#FFFFFF`);
      strokeWeight(1);
      stroke(`#000000`);
      fill(`#4a148c`);
      chu = 3;
    }
    if(mouseX >posXbi3 && mouseX <posXbi3 +tamtch3 && mouseY > posYbi3 && mouseY < posYbi3 + tamtch3){
      background (`#002157`);
      strokeWeight(1);
      stroke(`#FFFFFF`);
      fill(`#FFFFFF`);
      chu = 4;
    }
    
    if(mouseX >posXbi4 && mouseX <posXbi4 +tamtch4 && mouseY > posYbi4 && mouseY < posYbi4 + tamtch4){
      background (`#1b5e20`);
      strokeWeight(1);
      stroke(`#43a047`);
      fill(`#c5e1a5`);
      chu = 5;
    }
    
    if(mouseX >posXbi5 && mouseX <posXbi5 +tamtch5 && mouseY > posYbi5 && mouseY < posYbi5 + tamtch5){
      background (`#00cbcc`);
      strokeWeight(1);
      stroke(`#18ffff`);
      fill(`#f57f17`);
      chu = 6;
    }
    
    if(mouseX >posXbi6 && mouseX <posXbi6 +tamtch6 && mouseY > posYbi6 && mouseY < posYbi6 + tamtch6){
      background (`#ce93d8`);
      strokeWeight(1);
      stroke(`#9c64a6`);
      fill(`#ff8f00`);
      chu = 7;
    }
    
    if(mouseX >posXbi7 && mouseX <posXbi7 +tamtch7 && mouseY > posYbi7 && mouseY < posYbi7 + tamtch7){
      background (`#bf360c`);
      strokeWeight(1);
      stroke(`#ac1900`);
      fill(`#ffb300`);
      chu = 8;
    }
    
    if(mouseX >posXbi8 && mouseX <posXbi8 +tamtch8 && mouseY > posYbi8 && mouseY < posYbi8 + tamtch8){
      background (`#5472d3`);
      stroke(`#1faa00`);
      strokeWeight (5);
      fill(`#64dd17`);
      chu = 9;
    }
    
    if(mouseX >posXbi9 && mouseX <posXbi9 +tamtch9 && mouseY > posYbi9 && mouseY < posYbi9 + tamtch9){
      background (`#f8bbd0`);
      strokeWeight(1);
      stroke(`#880e4f`);
      fill(`#880e4f`);
      chu = 10;
    }
}
   
}