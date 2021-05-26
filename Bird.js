class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if (this.body.position.x > 250 && this.body.velocity.x > 3 ){
      var position=[this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
      for(var i=0; i<this.trajectory.length; i=i+1){
       image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
      }
    }



    super.display();
  }
}
/*step1: store xy values of the bird in an array 
example [210,250]
step2: we will add this array into another array[[],[],[],.....]
[[x1,y1],[x2,y2]]
step 3:using big array we will display image*/ 