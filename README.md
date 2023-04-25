[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/pJv4oXRo)

## Question 1
In this sketch I creaed a class for "Bubble" which creates an object with its own properties. In this section I used show and move to create the bubble and make it animated. Next in setup I called 5 bubbles and set them equal to a new "Bubble" object with their own parameters. Lastly for them to show up I called the bubbles in draw with move and show so they sill show on the canvas. 

```Javascript
function draw() {
  background(0);
  
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();

}
```
Link: https://editor.p5js.org/Sophiek/sketches/f3AO4_LCU
-------------------------------------------------------------------------------------------------------------------------------

## Question 2
For this skecth I just added on to the code that was used for the first question. 
In setup I added a for let statements to make the bubbles show up randomly on the canvas, and create 50 bubbles. To make each bibble different I added a random length, random width (for position on the canvas) and I added a random muber for the radius of each bubble. 
```Javascript
  for (let i = 0; i < 50; i++) {
    let x = random(width)
    let y = random(height)
    let r = random(3, 50)

    bubbles[i] = new Bubble(x, y, r);
  }
  ```
  I also had to call a similar for let statement in draw to make the bubbles show on the screen as well as move.
  ```Javascript 
    for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
  ```
  
Link: https://editor.p5js.org/Sophiek/sketches/6R34gIHF_ 

-------------------------------------------------------------------------------------------------------------------------------

## Question 3: Populate Sim game
For this assignment I created a class for each of my 3 "sprites". One for clouds, one for butterflies, and one for nets. 
In setup I put for let statements to make the particles, breeders, and catchers show up randomly on the canvas, these statements will determine how many breeders, particles and catchers will show up when we continue with the game.
To place the breeders and the catchers on the canvas I set parameters in each of the constructors in the classes. 
```Javascript
class Butterfly {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  ```
 Then to simply populate the sim game I called the classes with set parameters in setup
 ```Javascript
  breederButterfly = new Butterfly(50, 150);
  catcherNet = new Net(350, 150);
  ```
  And I called them in draw as well
  ```Javascript
  breederButterfly.show();
  catcherNet.show();
  ```
  Link: https://editor.p5js.org/Sophiek/sketches/0Q9NOhTC3
  
  ----------------------------------------------------------------------------------------------------------------------------------------
  
  ## Question 4
  
