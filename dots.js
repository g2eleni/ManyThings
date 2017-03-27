var img;
var whichImage = 0;
var smallPoint, largePoint;
 
function preload() {
    img = [loadImage("dance2pics(15)/open001.jpg"),loadImage("dance2pics(15)/open002.jpg"),loadImage("dance2pics(15)/open003.jpg"),loadImage("dance2pics(15)/open004.jpg"),loadImage("dance2pics(15)/open005.jpg"),loadImage("dance2pics(15)/open006.jpg"),loadImage("dance2pics(15)/open007.jpg"),loadImage("dance2pics(15)/open008.jpg"),loadImage("dance2pics(15)/open009.jpg"),loadImage("dance2pics(15)/open010.jpg"),loadImage("dance2pics(15)/open011.jpg"),loadImage("dance2pics(15)/open012.jpg"),loadImage("dance2pics(15)/open013.jpg"),loadImage("dance2pics(15)/open014.jpg"),loadImage("dance2pics(15)/open015.jpg"),loadImage("dance2pics(15)/open016.jpg"),loadImage("dance2pics(15)/open017.jpg"),loadImage("dance2pics(15)/open018.jpg"),loadImage("dance2pics(15)/open019.jpg"),loadImage("dance2pics(15)/open020.jpg"),loadImage("dance2pics(15)/open021.jpg"),loadImage("dance2pics(15)/open022.jpg"),loadImage("dance2pics(15)/open023.jpg"),loadImage("dance2pics(15)/open024.jpg"),loadImage("dance2pics(15)/open025.jpg"),loadImage("dance2pics(15)/open026.jpg"),loadImage("dance2pics(15)/open027.jpg"),loadImage("dance2pics(15)/open028.jpg"),loadImage("dance2pics(15)/open029.jpg"),loadImage("dance2pics(15)/open030.jpg")];
}
 
function setup() {
    createCanvas(1080, 608);
    smallPoint = 2;
    largePoint = 50;
    imageMode(CENTER);
    noStroke();
    background(255);
    // pickImage();
    img[whichImage].loadPixels();
}
 
 
function draw() {
    //if (mouseIsPressed)
    drawAllDots(100);
}
 
function pickImage() {
    // background(255)
    img[whichImage].loadPixels();
    img[whichImage].updatePixels();
}
 
function drawAllDots(numDots) {
    for (var i = 0; i < numDots; i++) {
        drawSingleDot();
    }
}
 
function drawSingleDot() {
    ellipse(60, 60);
    frameRate(60);
    var pointillize = map(mouseX, 10, width, smallPoint, largePoint);
    var x = floor(random(img[whichImage].width));
    var y = floor(random(img[whichImage].height));
    var pix = img[whichImage].get(x, y);
    fill(pix, 128);
    ellipse(x, y, pointillize, pointillize);
     if (mouseIsPressed) {
        whichImage++;
        if (whichImage > 29) {
            whichImage = 0;
        }
        pickImage();
    }
      
}



function keyPressed() {
  if (keyCode === ENTER) {
   saveFrames();
  } 
   
}

//sources
//https://p5js.org/examples/image-pointillism.html