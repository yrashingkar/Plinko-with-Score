var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var gamestate;
var play;
play=2;
var end;
end=3;
gamestate=2;

var lwall;
var rwall;

var score;
score=0;

var particle;

var turn;
turn = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(900, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 10; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 10; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }   
}

function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /* 
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   } */
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300 && particle.body.position.x>20){
        score=score+500
        particle=null;
        if(turn>=5) gamestate="end";
      }
    }
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>301 && particle.body.position.x<600){
        score=score+100
        particle=null;
        if(turn>=5) gamestate="end";
      }
    }
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>601 && particle.body.position.x<900){
        score=score+200
        particle=null;
        if(turn>=5) gamestate="end";
      }
    }
   }

   if(gamestate==="end"){
    textSize(90);
     text("GAMEOVER", 200,350)
   }
}

function mousePressed(){
  if(gamestate!=="end"){
    turn++;
    particle=new Particle(mouseX, 10, 10, 10)
  }
}