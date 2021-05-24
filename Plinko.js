class Plinko {
    constructor(x, y) {
        var options = {          
            restitution: 1,
            friction: 0,
            isStatic:true
            
        }
        //this.image = loadImage("smile2.png");
        this.r = 10;
        
        this.body = Bodies.circle(x, y, this.r, options);
        //this.simleImage = loadImage("simle.png");
        
        World.add(world, this.body);
        
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;   
        
          

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke(green);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        //image(this.image,0,0,this.r,this.r);
        pop();
    }

};