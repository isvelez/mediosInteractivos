function setup() {
  createCanvas(320, 320);

  background(`#FFFFFF`);
  
var joshi = 0;
var dis = 40;
var may = 0;
var sam = 0;
var ham = 0;
var april = 0;
var cloud = 0;
var am = 0;
var shi = 0;
var luna = 160;
var sun = 160;
var deer = 160;
var dawn = 160

var c = color (`#5A5041`);
  fill (c) ;
  noStroke ();
  
triangle (joshi, 0, 0, dis, dis, dis);
joshi = joshi + 40;
triangle (joshi, 0, dis, dis, 80, dis);
joshi = joshi + 40;
triangle (joshi, 0, 120, 0, 120, dis);
joshi = joshi + 40;
triangle (joshi, 0, 160, 0, 160, dis);
joshi = joshi + 40;
triangle (joshi, dis, 200, 0, 200, dis);
joshi = joshi + 40;
triangle (joshi, dis, 240, 0, 240, dis);
joshi = joshi + 40;
triangle (joshi, 0, 240, dis, 280, 0);
joshi = joshi + 40;
triangle (joshi, 0, 280, dis, 320, 0);
  
triangle (may, 40, 0, 80, dis, 80);
may = may + 40;
triangle (may, 40, 80, dis, 80, 80);
may = may + 40;
triangle (may, 40, 120, dis, 120, 80); 
may = may + 40;  
triangle (may, 40, 120, 80, 160, 80); 
may = may + 40;    
triangle (may, 40, 160, 80, 200, dis);   
may = may + 40;   
triangle (may, 80, 240, 40, 240, 80);
may = may + 40;   
triangle (may, 80, 280, 40, 280, 80);  
may = may + 40;
triangle (may, 40, 320, 40, 280, 80); 
  
triangle (sam, 80, dis, 80, dis, 120);
sam = sam + 40;
triangle (sam, 80, 80, 80, 80, 120);
sam = sam + 40;
triangle (sam, 80, 80, 120, 120, 120); 
sam = sam + 40;  
triangle (sam, 80, 120, 120, 160, 120); 
sam = sam + 40;    
triangle (sam, 80, 160, 120, 200, 80);   
sam = sam + 40;   
triangle (sam, 80, 200, 120, 240, 80);
sam = sam + 40;   
triangle (sam, 120, 280, 120, 280, 80);  
sam = sam + 40;
triangle (sam, 120, 320, 80, 320, 120); 
    
triangle (ham, 120, dis, 120, dis, 160);
ham = ham + 40;
triangle (ham, 120, 40, 160, 80, 160);
ham = ham + 40;
triangle (ham, 120, 80, 160, 120, 160); 
ham = ham + 40;  
triangle (ham, 120, 160, 120, 160, 160); 
ham = ham + 40;    
triangle (ham, 160, 200, 120, 200, 160);   
ham = ham + 40;   
triangle (ham, 120, 240, 120, 240, 160);
ham = ham + 40;   
triangle (ham, 120, 280, 120, 280, 160);  
ham = ham + 40;
triangle (ham, 160, 320, 160, 320, 120);   
  
triangle (april, 160, 0, 200, dis, 160);   
april = april + 40;   
triangle (april, 200, 80, 160, 80, 200);
april = april + 40;   
triangle (april, 200, 120, 160, 120, 200);  
april = april + 40;
triangle (april, 160, 160, 160, 120, 200);  
  
triangle (cloud, 200, 0, 240, 40, 200);   
cloud = cloud + 40;   
triangle (cloud, 200, 40, 240, 80, 200);
cloud = cloud + 40;   
triangle (cloud, 240, 120, 200, 120, 240);  
cloud = cloud + 40;
triangle (cloud, 240, 160, 200, 160, 240);  
  
triangle (am, 280, 40, 240, 40, 280);   
am = am + 40;   
triangle (am, 240, 80, 240, 80, 280);
am = am + 40;   
triangle (am, 240, 120, 240, 120, 280);  
am = am + 40;
triangle (am, 280, 160, 240, 160, 280);   
  
triangle (shi, 320, 40, 280, 40, 320);
shi = shi + 40;
triangle (shi, 320, 80, 280, 80, 320);
shi = shi + 40;
triangle (shi, 280, 120, 280, 80, 320);
shi = shi + 40;
triangle (shi, 280, 160, 280, 120, 320); 
  
var l = color (`#FEC533`);  
  fill (l);
  noStroke ();
  
triangle (luna, 160, 160, 200, 200, 200);
luna = luna + 40;
triangle (luna, 160, 240, 160, 240, 200);
luna = luna + 40;
triangle (luna, 160, 280, 160, 280, 200); 
luna = luna + 40;  
triangle (luna, 200, 280, 160, 320, 200);  
  
triangle (sun, 200, 200, 200, 200, 240);
sun = sun + 40;
triangle (sun, 200, 240, 200, 240, 240);
sun = sun + 40;
triangle (sun, 200, 240, 240, 280, 240); 
sun = sun + 40;  
triangle (sun, 200, 280, 240, 320, 240); 
  
triangle (deer, 240, 200, 240, 200, 280);
deer = deer + 40;
triangle (deer, 240, 200, 280, 240, 280);
deer = deer + 40;
triangle (deer, 240, 240, 280, 280, 280); 
deer = deer + 40;  
triangle (deer, 240, 320, 240, 320, 280);   
 
triangle (dawn, 280, 160, 320, 200, 320);
dawn = dawn + 40;
triangle (dawn, 280, 200, 320, 240, 320);
dawn = dawn + 40;
triangle (dawn, 280, 280, 280, 280, 320);
dawn = dawn + 40;
triangle (dawn, 280, 320, 280, 320, 320);
}