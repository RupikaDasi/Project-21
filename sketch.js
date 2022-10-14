
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,600,width,20);

	leftSide = new Ground (1100,600,20,120);
    rightSide = new Ground (width/2,600,20,120);

	//Create the Bodies Here.
    var ball_options = {
		isStatic:false,
		restiution:0.3,
		friction:0,
		density:1.2

	}

	ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS); 
  ellipse(ball.position.x,ball.position.y,20);

  groundObj.show()
  leftSide.show()
  rightSide.show()

  drawSprites();
 
  //step 7 - vertical
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		console.log (12345)
		Matter.Body.applyForce(ball, {x:0, y:0},{x:5, y:0})
	}
}



