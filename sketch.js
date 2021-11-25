
var box1;

function setup() {
  createCanvas(600, 400);

  box1 = new Box();
  box1.setWidth(100);
  
}

function draw() {
  background(220);

  box1.show();
  

}

