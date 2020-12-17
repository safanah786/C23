class Box
{
    constructor(xPos, yPos, w, h)
{
    var options=
    {
        restitution:0.4
    }
    this.body=Bodies.rectangle(xPos,yPos,w,h, options);
    this.width=w;
   this.height=h;
    World.add(world, this.body);
}
display_Box()
{
    
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rect(0,0,this.width,this.height);
    pop();
}   

};