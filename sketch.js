const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var stand,stand2;
var ground;
var polygon,slingshot;
var polygon_image

function preload() {
    
polygon_image = loadImage("polygon.png");



}


function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

  polygon = Bodies.circle(50,200,20) ; 
  

World.add(world,polygon);

slingshot = new SlingShot(this.polygon,{x:100,y:200});

stand= new Ground(300,300,150,20);
stand2 = new Ground(600,200,150,20);

box1 = new Block(245,275,30,30);
box2 = new Block(275,275,30,30);
box3 = new Block(305,275,30,30);
box4 = new Block(335,275,30,30);
//box5 = new Box(305,300,20,20);
//box6 = new Box(305,300,20,20);
//box7 = new Box(305,300,20,20);
//box8 = new Box(305,300,20,20);
//box9 = new Box(305,300,20,20);
//box10 = new Box(305,300,20,20);

ground = new Ground(400,380,800,20);


}

function draw(){
    background("pink");
    Engine.update(engine);
 
imageMode(CENTER);
image(polygon_image,polygon.position.x,polygon.position.y,40,40);



stand.display();
stand2.display();

fill("blue");
box1.display();
box2.display();
box3.display();
box4.display();
ground.display();
slingshot.display();


}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
