var thickness;
var bullet, wall
var speed, weight;
function setup() {
  createCanvas(1600,400);
  wall= createSprite(1200, 200, thickness, 400);
  wall.shapeColor= color(80, 80, 80);
  bullet= createSprite(50, 100, 80, 10);
  bullet.shapeColor= "white";

  speed= random(223, 321);
  weight= random(30, 52);

  bullet.velocityX= speed;
  thickness= random(22, 83);
}

function draw() {
  background(0); 
  var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if (bullet.collide(wall)){
    if (damage > 10){
      wall.shapeColor= "green";
      bullet.velocityX= 0;
    }
    if (damage > 10){
      wall.shapeColor= "red";
      bullet.velocityX= 0;
    }
  } 
  drawSprites();
}