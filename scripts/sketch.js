var pixel;
var video;
var sound;
var contact;
var code;
var home;
var thx;
let x = -250;
let y = 200;
let x2 = -50;
let y2 = 200;
let x3 = 150;
let y3 = 200;
let x4 = 350;
let y4 = 200;
let x5 = 550;
let y5 = 200;
let xspeed = 2;
let yspeed = 2;
let x2speed = 2;
let y2speed = 2;
let x3speed = 2;
let y3speed = 2;
let x4speed = 2;
let y4speed = 2;
let y5speed = 2;
let r = 10;
//let changeX;
let changeY;
let width = 700;
let height = 500;


function setup() {
  pixel = createImg('../images/pixelIconBig.png');
  video = createImg('../images/videoIconBig.png');
  sound = createImg('../images/soundIconBig.png');
  contact = createImg('../images/aboutIconBig.png');
  code = createImg('../images/codeIconBig.png')
  home = createImg('../images/welcome.gif');
  thx = createImg('../images/thx.png');
// thx is name
  var canvas = createCanvas(windowWidth,windowHeight);
      canvas.parent("p5Canvas");

  for (let i = 0; i < 4; i++) {
  //  changeX = random(-1, 1);
    changeY= random(-1, 1);
  }
}

function draw() {

  cursor('../cursors/rainbow.cur');
// code for dynamics adapted from the coding train bouncing ball example: https://thecodingtrain.com/beginners/p5js/3.2-bouncing-ball.html

  // Add the current speed to the position.
  y = y - yspeed;

  if ((y > height+r) || (y < r)) {
    yspeed = yspeed * -1;
  }

    // Add the current speed to the position.
  y2 = y2 + yspeed;

  if ((y2 < height+r) || (y2 < r)) {
    y2speed = y2speed * -1;
  }


    // Add the current speed to the position.
  y3 = y3 - y3speed;


  if ((y3 > height+r) || (y3 < r)) {
    y3speed = y3speed * -1;
  }

    // Add the current speed to the position.
  y4 = y4 + yspeed;

  if ((y4 < height+r) || (y4 < r)) {
    y4speed = y4speed * -1;
  }

  y5 = y5 - y5speed;


  if ((y5 > height+r) || (y5 < r)) {
    y5speed = y5speed * -1;
  }

  // Display circle at x position
  pixel.position(x,y).parent("p5Canvas");
  pixel.size(200,200);
  pixel.alt = "A 32-bit pixel rendition of a canvas featuring a pink painted heart symbol. Green text centered in the foreground reads Pixels.";
  pixel.mousePressed(openLink1);



  video.position(x2,y2).parent("p5Canvas");
  video.size(200,200);
  video.alt = "A 32-bit drawing of a pink double music note on top of a blue circle, in the centered foreground green text reads Music.";
  video.mousePressed(openLink2);


  sound.position(x3,y3).parent("p5Canvas");
  sound.size(200,200);
  sound.alt = "A 32-bit pixel rendition of a pink anteanna television set with the text Video in the centered foreground in green.";
  sound.mousePressed(openLink3);


  contact.position(x5,y5).parent("p5Canvas");
  contact.size(200,200);
  contact.alt = "A 32-bit image of a pink question mark in front of a blue circle. In the centered foreground green text reads About.";
  contact.mousePressed(openLink5);


  code.position(x4,y4).parent("p5Canvas");
  code.size(200,200);
  code.alt = "A 32-bit image of a pink computer keyboard in front of a blue circle. In the centered foreground green text reads Code.";
  code.mousePressed(openLink4);


  home.position(windowWidth/2,windowHeight/6.5).parent("p5Canvas");
  home.size(400,400);
  home.alt = "A small pixel gif of a simple home with a front door opening and closing.";
  home.mousePressed(openLink);


  thx.position(-45,windowHeight/1.25).parent("p5Canvas");
  thx.size(1075,71);
  thx.alt = "text in green";
  thx.mousePressed(openLink5);



}


function openLink() {
  window.open("../pages/open.html","_self");
}

function openLink1() {
  window.open("../pages/pixels.html","_self");
  

}

function openLink2() {
  window.open("../pages/video.html","_self");

}

function openLink3() {
  window.open("../pages/music.html","_self");

}

function openLink4() {
  window.open("../pages/code.html","_self");

}

function openLink5() {
  window.open("../pages/about.html","_self");

}
