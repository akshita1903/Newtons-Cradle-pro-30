class Bob{
    constructor(x,y,r)
{
    var options={
        'restruction':1.4,
        'friction':1.0,
         'density':1.0
    }
    this.x=x;
    this.y=y;
    this.r=r
    this.body=Bodies.circle(this.x, this.y,this.r,options)
    World.add(world, this.body);

}
display()
{
    var bobpos=this.body.position;
    push()
    translate(bobpos.x, bobpos.y);
    ellipseMode(RADIUS);
    fill(rgb(6,253,199));
    ellipse(0,0,this.r, this.r);
    pop()
}

}