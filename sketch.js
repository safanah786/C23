const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var boxA,boxB;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    
    ground =new Ground(200,390,400,20);
   
    boxA=new Box(100, 150, 50, 60);
    boxB=new Box(140,100,70,60);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    

    boxA.display_Box();
    boxB.display_Box();
    ground.display();
}