class Box {
  //creating constructor
  constructor(x, y) {
    //creating options for this.body/rectangle
    var options = {
      isStatic: false,
      restitution: 0.8,
      friction: 0.3,
      density: 1.0
    }
    //creating this.body/rectangle
    this.body = Bodies.rectangle(x, y, 20, 20, options);
    //assigning specific width
    this.width = 20;
    //assigning specific height
    this.height = 20;

    this.visibility = 255;
    //adding this.body/rectangle
    World.add(world, this.body);
  }

  //displaying everything
  display() {

    if (this.body.speed < 3) {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255, 0, 0);
      rect(0, 0, this.width, this.height);
      pop();

    }
    else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      pop();
    }
  }


  score() {
  
    if (this.visibility < 0 && this.visibility > -105) {
      score++;

    }

  }
}