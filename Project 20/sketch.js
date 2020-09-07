var car, wall;
var speed, weight, deformation;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  
  var car = createSprite(50, 200, 50, 70);
  car.velocityX = speed;
  var wall = createSprite (1500,200,60,height/2);
  wall.shapeColor = (80,80,80);

  
  
}

function draw() {
  background(135,234,223);
  
  Deformation ();
  drawSprites();

  
}

function Deformation () {
  if (wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;

    if (deformation>180) {
      car.shapeColor = color(228,0,0);
    }

    if (deformation<180 && deformation>100){
      car.shapeColor = color(255,230,0);
    }

    if (deformation<100){
      car.shapeColor = color(0,255,0);
    }
  } 
}