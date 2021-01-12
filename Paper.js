class Paper {
 constructor(x,y,r){

var options={
restitution:0.3,
friction:0.5,
density:1.2
}
this.r=r;
this.x=x;
this.y=y;

 this.body = Bodies.circle(this.x,this.y,this.r/2,options);
 World.add(world,this.body);
 }

display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("green");
    fill(255);
    ellipse(0,0,this.r,this.r);
  }

}