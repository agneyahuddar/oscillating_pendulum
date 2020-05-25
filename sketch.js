
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var oscillation,ball,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var oscillation_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

oscillation = Bodies.rectangle(200,100,200,20,oscillation_options);
World.add(world,oscillation);

var ball_options = {

  restitution : 1.3,
  density : 1.0

}

ball  = Bodies.circle(150,140,60,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : oscillation,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("blue");
}


function draw() {
  background(0); 
  Engine.update(engine);


  text("Click space bar - oscillate pendulum by dragging mouse",50,20);
  text("Click enter - it will stop the oscillation",80,50);

  fill ("yellow");
rectMode(CENTER);
rect(oscillation.position.x,oscillation.position.y,200,20);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("white");
line(ball.position.x,ball.position.y,oscillation.position.x,oscillation.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}

}








