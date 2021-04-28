const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var particles =[];
var plinkos = [];
var divisions =[];

var divisionHeight=300;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240,height,480,20);
   
for(var k = 0; k<=width; k = k + 80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

for (var j = 40; j <=width; j=j+50) 
{
    plinkos.push(new Plinko(j,75,15));
}

for (var j = 15; j <=width-10; j=j+50) 
{
    plinkos.push(new Plinko(j,175,15));
}

for (var j = 40; j <=width; j=j+50) 
{
    plinkos.push(new Plinko(j,275,15));
}

for (var j = 15; j <=width; j=j+50) 
{
    plinkos.push(new Plinko(j,375,15));
}
    

}

function draw(){
    background("lightblue");
    Engine.update(engine);
    text(mouseX + ',' + mouseY, 30, 45);
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }
    ground.display();

    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }
    for (var j = 0; j < particles.length; j++) {
        particles[j].display();
    }

}
