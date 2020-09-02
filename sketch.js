//creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating global variables
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var box16;

var box17, box18, box19, box20, box21, box22, box23;
var box24, box25, box26, box27, box28;
var box29, box30, box31;
var box32;

var polygon;
var rope;

//creating score and assigning it to 0
var score = 0;

function setup() {
  //creating canvas
  var canvas = createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  //creating grounds
  ground1 = new Ground(370, 300, 160, 10);
  ground2 = new Ground(600, 250, 160, 10);

  //creating boxes
  box1 = new Box(370, 280);
  box2 = new Box(350, 280);
  box3 = new Box(330, 280);
  box4 = new Box(310, 280);
  box5 = new Box(390, 280);
  box6 = new Box(410, 280);
  box7 = new Box(430, 280);

  box8 = new Box(370, 260);
  box9 = new Box(350, 260);
  box10 = new Box(330, 260);
  box11 = new Box(390, 260);
  box12 = new Box(410, 260);

  box13 = new Box(370, 240);
  box14 = new Box(350, 240);
  box15 = new Box(390, 240);

  box16 = new Box(370, 220);



  //creating boxes
  box17 = new Box(600, 230);
  box18 = new Box(580, 230);
  box19 = new Box(560, 230);
  box20 = new Box(540, 230);
  box21 = new Box(620, 230);
  box22 = new Box(640, 230);
  box23 = new Box(660, 230);

  box24 = new Box(600, 210);
  box25 = new Box(580, 210);
  box26 = new Box(560, 210);
  box27 = new Box(620, 210);
  box28 = new Box(640, 210);

  box29 = new Box(600, 190);
  box30 = new Box(580, 190);
  box31 = new Box(620, 190);

  box32 = new Box(600, 160);

  //creating polygon
  polygon = new Polygon(100, 200);
  //adding constraint to polygon body and point
  rope = new Rope(polygon.body, { x: 100, y: 200 });

}



function draw() {
  //giving colour to background
  background(2);

  //giving size to text
  textSize(35)
  //giving colour to text
  fill("white")
  //adding text
  text("Score:  " + score, 50, 50)




  Engine.update(engine);

  //displaying grounds
  ground1.display();
  ground2.display();

  //displaying boxes
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  //displaying polygon
  polygon.display();
  //displaying rope/constraint
 


  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  box32.score();

  drawSprites();
}

//creating function to attach polygon body to constraint again
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, { x: 100, y: 200 });
    rope.attach(polygon.body);
  }
}

//creating mouse dragged function
function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

//creating mouse released function
function mouseReleased() {
  rope.fly();
}


