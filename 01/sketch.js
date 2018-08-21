function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(`#D1C3B2`);
  
  var b = color(`#717A6D`); 
fill(b);
strokeWeight(0.5);
	ellipse(332, 381, 190, 190);
  
var j = color(`#D4B23C`); 
fill(j);
strokeWeight(0.5);
	triangle(197, 300, 318, 166, 365, 353)
  
var p = color(`#975D25`); 
fill(p);
strokeWeight(2);
	triangle(283, 0, 294, 0, 400, 179)
  
var o = color(`#975D25`); 
fill(o);
strokeWeight(3);
	triangle(321, 0, 330, 0, 382, 92)
  
  var i = color(`#82151C`); 
fill(i);
strokeWeight(4);
  rect(405, 448, 73, 65)
  
var l = color(`#BABF60`); 
fill(l);
strokeWeight(0.1);
	triangle(-65, -148, 126, 85, 141, 66)
  
var d = color(`#975D25`); 
fill(d);
strokeWeight(3);
	triangle(379, 0, 385, 0, 426, 71)
  
var c = color(`#715293`); 
fill(c);
strokeWeight(1);
	ellipse(105, 284, 118, 118);
  
strokeWeight(10);
  line(0, 13, 13, 0);
  line(450, -2, 516, 25);
  
var a = color(`#F1EDEF`); 
fill(a);
strokeWeight(1);
  arc(61, 160, 180, 180, PI, PI, OPEN);
  
strokeWeight(3);
  line(175, 509, 22, 0);
  line(0, 161, 320, 161);
  line(591, 537, 247, 0);
  line(442, 468, 500, 469)
  
strokeWeight(1.5);
  line(0, 283, 283, 283);
  line(65, 436, 305, 432);
  
  
strokeWeight(5);  
  line(0, 28, 324, 366);
  line(442, 482, 500, 483)

noFill()
strokeWeight(1);
  arc(-34, 449, 170, 170, PI, PI, OPEN);
}