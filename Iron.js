class Iron{
	constructor(x,y){
		var options={
			"restitution":0.8,
			"friction":3,
			"density":30
		}
		this.body=Bodies.rectangle(x, y,50,50, options);
		this.width=50;
		this.height=30;
		World.add(world, this.body);
	}
	display()
	{
			var hierropos=this.body.position;	
			var angle=this.body.angle;

			push()
			translate(hierropos.x, hierropos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(40,0,this.width,this.height);
			pop();
	}

}