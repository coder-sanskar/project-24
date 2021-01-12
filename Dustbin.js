class Dustbin {
  constructor(x, y, width, height,o) {

var o={
  isStatic:true
}    
    
    this.body = Bodies.rectangle(x, y, width, height,o);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
