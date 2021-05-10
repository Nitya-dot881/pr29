const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  world;
var ground,slingshot ,box1;


function preload()
{
	IMG=loadImage("bn.png")

}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
   world=engine.world


  ground=new Ground (400,305,300,20)
 
  box1=new Box(330,235,30,40)

  box2=new Box(360,235,30,40)
  box3=new Box(390,235,30,40)
  box4=new Box(420,235,30,40)
  box5=new Box(450,235,30,40)
  box6=new Box(360,195,30,40)
  box9=new Box(390,195,30,40)
  box7=new Box(420,195,30,40)
  box8=new Box(390,155,30,40)
  box10=new Box(360,275,30,40)
  box11=new Box(390,275,30,40)
  box12=new Box(420,275,30,40)
  box13=new Box(390,275,30,40)
  box14=new Box(330,275,30,40)
  box15=new Box(300,275,30,40)
  box16=new Box(450,275,30,40)
  box17=new Box(480,275,30,40)



  
  poly=new Polygon(250,180,40,40)
  slingshot = new SlingShot(poly.body,{x:100, y:200});
  
}

function draw() {
  background(IMG); 
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
 
 
  poly.display()
  slingshot.display()
  
  drawSprites();
}
function mouseDragged(){
  
      Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}
