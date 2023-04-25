//Sophie Knox 
//Assignment 5 Question 3: Populate your sim game

let breederButterfly = [];
let cloud = [];

function setup() {
  createCanvas(960, 400);
  
  addX = -3;
  
  butterfliesStart = 20;
  netsStart = 2;
  
  //Making the particles CLOUDS
  for (let cloudsDefined = 0; cloudsDefined < 50; cloudsDefined++) {
    let x = random(width);
    let y = random(height);
    let r = random(3, 50);
    cloud[cloudsDefined] = new Clouds(x, y, r);
   // Clouds.push(b);
  
  }
  //Making the breeders BUTTERFLIES
  butterflies = [];
  for(let butterfliesDefined = 0; butterfliesDefined < 25; butterfliesDefined++){ 
    let x = random(width);
    let y = random(height);
    butterflies.push(new Butterfly(x,y));
    
  }
  let nets = [];
  for(let netsDefined = 0; netsDefined < netsStart; netsDefined++){ 
    let x = random(width);
    let y = random(height);
    nets.push(new Net(x,y));
    
  }
  
  breederButterfly = new Butterfly(50, 150);
  catcherNet = new Net(350, 150);
}

function draw() {
  background("azure");

  //Move particles CLOUDS
  for (let cloudsShown = 0; cloudsShown < cloud.length; cloudsShown++) {
    cloud[cloudsShown].move();
    cloud[cloudsShown].show();
  }
  // //Move breeders BUTTERFLIES
  // for(let breedersShown =0; breedersShown < butterflies.length; breedersShown++){
  //   let thisButterfly = butterflies[breedersShown];
  //   //thisButterfly.move();
  //   thisButterfly.show();
  // }

  breederButterfly.show();
  catcherNet.show();
}

class Clouds {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.scale = size;
  }
  move() {
    this.x = this.x + random(-0.5, 0.5);
    this.y = this.y + random(-0.5, 0.5);
  }
  show() {
    push();
    fill("lightblue");
    noStroke();
    ellipse(this.x, this.y, 10);
    ellipse(this.x + 2, this.y, 13);
    ellipse(this.x - 1, this.y - 2, 14);
    ellipse(this.x - 5, this.y + 3, 13);
    ellipse(this.x + 7, this.y - 1, 12);
    ellipse(this.x + 10, this.y - 3, 14);
    ellipse(this.x + 5, this.y + 4, 12);
    pop();
  }
}

class Butterfly {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  move() {
    this.x = this.x + this.addX;
    //Reverse when they hit the wall
    let isTooFarLeft = (this.x < 0);
    let isTooFarRight = (this.x > width);
    if (isTooFarLeft || isTooFarRight){
      this.addX = -this.addX;
      this.y = random(height);
    }
    
  }
  show() {
    fill("rgb(84,42,42)");
    translate(this.x, this.y);
    push(); //base layer of butterfly
    shearX(-0.5);
    ellipse(5, 0, 12, 20);
    pop();
    push();
    shearX(0.5);
    ellipse(-5, 0, 12, 20);
    pop();

    push();
    shearX(-0.5);
    ellipse(9, 5, 15);
    pop();
    push();
    shearX(0.5);
    ellipse(-9, 5, 15);
    pop();

    push();
    shearX(-0.5);
    ellipse(5, 15, 15, 20);
    pop();
    push();
    shearX(0.5);
    ellipse(-5, 15, 15, 20);
    pop();

    //Toplayer of butterfly
    push();
    fill("#901F46");
    noStroke();

    push();
    shearX(-0.5);
    ellipse(5, 2, 7, 15);
    pop();
    push();
    shearX(0.5);
    ellipse(-5, 2, 7, 15);
    pop();

    push();
    shearX(-0.5);
    ellipse(9, 4, 10);
    pop();

    push();
    shearX(0.5);
    ellipse(-9, 4, 10);
    pop();

    push();
    shearX(-0.5);
    ellipse(5, 15, 10, 10);
    pop();
    push();
    shearX(0.5);
    ellipse(-5, 15, 10, 10);
    pop();

    pop(); //end of the top layer of butterfly (they are all in push and pop)

    push(); //body details of the butterfly
    fill("#ECAA47");
    noStroke();

    push();
    shearX(-0.5);
    ellipse(4, 0, 6, 10);
    pop();
    push();
    shearX(0.5);
    ellipse(-4, 0, 6, 10);
    pop();

    push();
    shearX(-0.5);
    ellipse(7, 3, 8);
    pop();
    push();
    shearX(0.5);
    ellipse(-7, 3, 8);
    pop();

    push();
    shearX(-0.5);
    ellipse(2, 10, 5, 8);
    pop();
    push();
    shearX(0.5);
    ellipse(-2, 10, 5, 8);
    pop();

    push();
    shearX(-0.5);
    ellipse(5, 12, 5, 10);
    pop();
    push();
    shearX(0.5);
    ellipse(-5, 12, 5, 10);
    pop();

    push(); // wing details left side top wing
    noStroke();
    fill("rgb(245,215,160)");
    ellipse(-11, -5, 2);
    ellipse(-10, -8, 2);
    // wing details bottom left wing
    ellipse(-5, 21, 2.5);
    ellipse(-9, 22, 4);
    ellipse(-10.5, 18, 2);
    fill("black");
    ellipse(-7, 17, 2);
    pop();

    push(); // wing details right side top wing
    noStroke();
    fill("rgb(245,215,160)");
    ellipse(11, -5, 2);
    ellipse(10, -8, 2);
    // wing details bottom left wing
    ellipse(5, 21, 2.5);
    ellipse(9, 22, 4);
    ellipse(10.5, 18, 2);
    fill("black");
    ellipse(7, 17, 2);
    pop();

    fill("black");
    ellipse(0, 5, 3, 25); //body of butterfly
  }
}

class Net {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isCatchingRight = false;
    this.addX = addX;
  }
  move() {
    this.x = this.x + this.addX;
    //Reverse when they hit the wall
    let isTooFarL = (this.x < 0);
    let isTooFarR = (this.x > width);
    if (isTooFarL || isTooFarR){
      this.addX = -this.addX;
      this.isCatchingRight = !this.isCatchingRight;
      this.y = random(height);
    }
    
  }
  show() {
    push();
    let d = +1;
    if(this.isCatchingRight){
      d = -d;
    }
    translate(this.x, this.y);
    push();
    noFill();
    stroke("rgb(85,131,85)");
    strokeWeight(2);
    ellipse(0, 0, 10, 30);
    curve(0, 0, 0, -15, 25, 5, 25, 60);
    curve(0, 0, 0, 15, 25, 5, 25, 25);
    curve(5, 5, 4, -9, 25, 5, 25, 60);
    curve(5, 5, 4, 9, 25, 5, 25, 25);
    curve(5, 5, 5, -5, 25, 5, 25, 60);
    curve(5, 5, 5, 5, 25, 5, 25, 25);
    curve(5, 5, 5, 1, 25, 5, 25, 60);
    curve(0, -16, 7, -12, 7, 12, -14, -14);
    curve(0, -16, 13, -9, 13, 9, -3, -14);
    curve(0, -15, 20, -3, 20, 5, 20, -14);
    line(0, 15, 2, 40)
    pop();
    pop();
    
    // if(this.isCatchingRight){
    //   //net facing the right (new code)
    // }else{
    //   //net facing the left
    // }
  }
}
