class Ground {
   //creating constructor
  constructor(x, y, width, height) {
    //creating options for this.body/rectangle
    var options = {
        isStatic : true,
        restitution:0.8,
        friction:0.3,
        density:1.0
    }
    //creating rectangle
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //adding rectangle
    World.add(world, this.body);
  }

  //displaying everything
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate (pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("blue");
    rect(0, 0, this.width, this.height);
    pop();
  }
};