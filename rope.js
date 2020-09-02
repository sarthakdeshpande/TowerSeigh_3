class Rope{
    //creating constructor
    constructor(bodyA,pointB){
        //creating options for rope/constraint
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }  

        //assigning pointB to pointB
        this.pointB = pointB;
        //creating constraint and adding options
        this.rope = Constraint.create(options)
        //adding constraint to world
        World.add(world,this.rope);

    }

    //creating function to attach body to constraint
    attach(body){
        this.rope.bodyA = body;
    }

    //creating function to make the object fly after mouse realesed
    fly(){
        this.rope.bodyA = null;
    }

    //displaying everything
    display(){
        if (this.rope.bodyA){
            var pointA = this.rope.bodyA.position
            var pointB = this.pointB
            strokeWeight = 4
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
}