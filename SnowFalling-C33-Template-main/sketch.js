const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ran
var engine,world
var snow=[]
function preload(){
  bg1=loadImage("snow1.jpg")
  bg2=loadImage("snow2.jpg")
  bg3=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    background(bg1);
}

function draw() {
   
  Engine.update(engine)
 if(frameCount%200===0){
   ran=Math.round(random(1,3))
 }
if(ran===1){
  background(bg1)
}
else if(ran===2){
  background(bg2)
}
else if(ran===3){
  background(bg3)
}
else{
  background(bg1)
}
if(frameCount%5===0){
snow.push(new Snow(random(0,800),30,30))
}
for(var j=0;j>snow.length;j++){
  snow[j].display()
}
  
}