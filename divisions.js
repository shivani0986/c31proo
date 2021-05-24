class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.image = loadImage("s3.png");
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.w, this.h);
    }
};