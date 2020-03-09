class Chain{
constructor(bodyA,bodyB){
var options = {
bodyA :bodyA,
bodyB :bodyB,
stiffness : 0.01,
length : 50
}
this.chain = Matter.Constraint.create(options);
World.add(world,this.chain);
}//ok
display(){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y);
    
}
}