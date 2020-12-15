class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);

    }
    display(){
        rectMode(CENTER);
        rect(this.x,this.y,width,height);
        fill("yellow");
    }

    
}