var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	box1=createSprite(width/2,665,200,20),
	box1.shapeColor=color("red");
    box1m=Bodies.rectangle(width/2,665,200,20,{isStatic:true})
    World.add(world,box1m);

	box2=createSprite(width/2-100,615,20,100);
	box2.shapeColor=color("red");
	box2m=Bodies.rectangle(width/2-100,615,20,100,{isStatic:true})
	World.add(world,box2m);

	box3=createSprite(width/2+100,615,20,100)
	box3.shapeColor=color("red");
	box3m=Bodies.rectangle(width/2+100,615,20,100,{isStatic:true})
    World.add(world,box3m);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine);

  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody,false)   
  }
}