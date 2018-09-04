var posX = 0;
var dir = 1;
var vel = 0;
var ren = 50;
var chan = 20;
var luna = 30;
var men = -20;
var kun = 0;
var tu = 50;
var ni = 45;
var si = 60;
var ki = 35;
var mi = 25;
var li = 30;
var te = 10;
var lol = 0.1;
var sol = 0;

function setup() {
createCanvas(240.94, 155.91);
background(0);

frameRate(30);	
}
function draw() {
background(0);
	
	
strokeWeight(2)
stroke(700);{
point(tu, 35);
point(ni, 45);
point(tu, 35);
point(si, 50);	
point(ki, 35);
point(ki, 45);
point(si, 45);
point(si, 60);	
point(mi, 35);
point(li, 45);
point(te, 45);
point(mi, 60);
point(tu, 50);	
point(te, 60);
point(mi, 35);
	
tu = tu + sol * lol;
ni = ni + sol * lol;
si = si + sol * lol;
ki = ki + sol * lol;
mi = mi + sol * lol;
li = li + sol * lol;
te = te + sol * lol;
tu = te + sol * lol;
	
if (posX >= 0 && posX < 45) {
sol = 3;

}	
	
}
	
strokeWeight (9)	
stroke(200);
fill(200);	{
quad(240.49,0,0,0,0,18,240.49,18);
quad(240.49,75,0,75,0,155.91,240.94,155.91);	
quad(0,0,0,75,30,75,15,28.5);	
quad(240.94,18,240.94,75,60,75,84,50);	
quad(240.94,18,84,50,75,18);	
quad(0,0,0,75,25,18);	
}
	
	strokeWeight (10);
	stroke (51);
	noFill();
	ellipse(50, 46, 55, 55);

	
fill(700);	
strokeWeight (1);	
quad(200, posX, 200, ren, 210, chan, 200, chan, 205, chan, 205, posX, 200, posX);

posX = posX + vel * dir;
ren = ren + vel * dir;
chan = chan + vel * dir;
	
if (posX >= 0 && posX < 45) {
vel = 9;
}
if (posX >= 45 && posX < 52) {
vel = 6;
}	
if (posX >= 54 && posX < 55) {
vel = 0.1;
}	
quad(100, men, 100, luna, 110, kun, 100, kun, 105, kun, 105, men, 100, men);
	
luna = luna + vel * dir;
men = men + vel * dir;
kun = kun + vel * dir;	
	
if (kun >= 20 && kun < 35) {
vel = 9;
}
if (kun >= 45 && kun < 48) {
vel = 3;
}	
	
if (posX > width - 183) {

dir = - 1;
}
if (posX < 0) {
dir = -1;
}

}