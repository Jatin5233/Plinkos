class Particle{
    constructor(x,y){
        var options = {
       
            restitution:0.5
        }
        this.body=Bodies.circle(x,y,10,options);
        this.r=10;
     this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
   
      
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
       
    }
     
          
      }
