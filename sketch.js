const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos=[];
var divisions=[];
var particles=[];
var divisionHeight=300;
var ground;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

ground=new Ground();
  for(var i=0;i<=width;i+=80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
        }
        
  for(var j=40;j<=width;j+=50){
    plinkos.push(new Plinko(j,75))
  }
  for(var k=15;k<=width-10;k+=50){
    plinkos.push(new Plinko(k,175))
  }
  for(var l=40;l<=width;l+=50){
    plinkos.push(new Plinko(l,275))
  }
  for(var m=15;m<=width-10;m+=50){
    plinkos.push(new Plinko(m,375))
  }
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display(); 
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10))
  }
  
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var a=0;a<particles.length;a++){
    particles[a].display();
  }
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();;
        }
  drawSprites();
}