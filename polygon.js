class Polygon{
    //creating constructor
    constructor(x,y){
        //creating options for polygon/this.body
        var options ={
            isStatic:false,
            restitution : 0.3,
            density:1.2,
            friction:0.5  
        }
        //assigning specific radius
        this.radius = 13;
        //creating polygon
        this.body = Bodies.circle(x,y,this.radius,options);  
        //adding image to this.body/polygon
        this.image = loadImage("Sprites/polygon.png");   
        //adding this.body/polygon 
        World.add(world,this.body);
        
    }

    //displaying everything
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS); 
        fill(255,255,0)
        ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,0 , 0, 61,31);  
        pop();
    }
}