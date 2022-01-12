class Block{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            restitution:0.4,
            friction:0
        }
        
        this.width = width;
        this.height = height;
        this.x = this.x;
        this.y = this.y;

        this.body = Bodies.rectangle(x,y,width,height,options);



        World.add(world, this.body);

    }
    display(){
       var pos =this.body.position;
       var angle=this.body.angle;
       push();
       translate(this.body.position.x, this.body.position.y);
       rotate(angle);
       rectMode(CENTER);
       rect(0,0, this.width, this.height);
       pop();
        
        
        
      }



  
  };