function setup(){
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
}

function draw() {
  background(33);
  fill(255);
  circle(200,100,50);
  fill(60);
  square(200,200,100);
  fill(120)
  triangle(300, 200, 250, 300, 350, 300);
  fill(255)
  line(100,100,400,300);
  
  arc(300,150,100,100,0,100);
}