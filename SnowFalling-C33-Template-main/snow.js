class Snow{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.r=r
        this.body = Bodies.circle(x, y,this.r, options);
        
       this.image1 = loadImage("snow4.webp");
       this.image2 = loadImage("snow5.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var ran=Math.round(random(1,2))
        if(ran===1){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image1, 0, 0, this.r*2,this.r*2);
        pop();
      }else{
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image2, 0, 0, this.r*2,this.r*2);
        pop();
      }
    }
}