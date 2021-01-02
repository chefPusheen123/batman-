const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var t1,t2,t3,t4
var maximumDrops=100
var drops=[]
var thunderFrameCount=0
var thunder
function preload(){
    t1=loadImage("thunderbolt/1.png")
    t2=loadImage("thunderbolt/2.png")
    t3=loadImage("thunderbolt/3.png")
    t4=loadImage("thunderbolt/4.png")
}

function setup(){
   engine=Engine.create()
    world=engine.world
    createCanvas(400,700)
    umbrella=new Umbrella(200,500)
    if(frameCount%150===0){
for(var i=0;i<maximumDrops;i++){
drops.push(new Drop(random(0,400),random(0,400)))
}

}
}
function draw(){
    Engine.update(engine)
    background(0)
    umbrella.display()
    var rand=Math.round(random(1,4))
    if(frameCount%80===0){
 thunderFrameCount=frameCount
 thunder=createSprite(random(10,370),random(10,30),10,10)   
switch(rand){
case 1:thunder.addImage(t1)
break;
case 2:thunder.addImage(t2)
break;
case 3:thunder.addImage(t3)
break;
case 4:thunder.addImage(t4)
break;
default:break;
}
thunder.scale=random(0.3,0.6)
    }
    if(thunderFrameCount+10===frameCount&&thunder){
thunder.destroy()}
for(i=0;i<maximumDrops;i++){
    drops[i].display()
    drops[i].update()
}
drawSprites()
    
}



