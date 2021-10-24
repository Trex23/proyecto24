class Rubber{
	constructor(x,y,r){
		var options={
			'restitution':0.3,
			'friction':5,
			'density':1
		}
		this.body=Bodies.circle(x,y,(80-20)/2, options);
		this.radius=80;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
			var angle=this.body.angle;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(300,0,this.radius,this.radius);

			pop()
	}

}