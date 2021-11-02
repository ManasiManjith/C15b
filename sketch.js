var ball;
var vx = 2;
var vy = 3

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
}

function draw() 
{
  background(51);
  if(ball.position.x<=50 || ball.position.x>=width-50)
  {
    vx= -vx;
  }
  ball.velocity.x = vx;

  if(ball.position.y<=50 || ball.position.y>=height-50)
  {
    vy= -vy;
  }
  ball.velocity.y= vy;
  drawSprites();

}

