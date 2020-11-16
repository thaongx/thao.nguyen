//the website includes some interesting facts of the Internet
//by poiting the mouse to a specific elements, the text will be shown.

let gtlight; //font
let gtmedium; //font

let hit = false; //for collide
let col1, col2; //for color gradient
let a, b, c, d, e, f, g, h, i, j, k, l; //for animating running text of each elements 


const strawberry = []; //strawberryWeight
const slash = []; //doubleSlash
const flower = []; //largeFlower
const share = []; //shareButton
const smile = []; //smileyFace
const count = []; //dayCount
const at = [] //atSymbol
const name = [] //nameInternet



function preload() {
  gtlight = loadFont('fonts/GT America Expanded Ultra Light.otf');
  gtmedium = loadFont('fonts/GT America Expanded Medium.otf');
}

function setup() {
  createCanvas(1600, 900);
  collideDebug(true);

  //for animting running text
  a = width;
  b = width;
  c = width;
  d = width;
  e = width;
  f = width;
  g = width;
  h = width;
  i = width;
  j = width;
  k = width;
  l = width;

  // shapes for collide function
  //strawberryWeight
  strawberry[0] = createVector(88.83, 531.34);
  strawberry[1] = createVector(93.94, 503.77);
  strawberry[2] = createVector(47.98, 488.45);
  strawberry[3] = createVector(131.72, 455.77);
  strawberry[4] = createVector(207.3, 401.64);
  strawberry[5] = createVector(197.09, 450);
  strawberry[6] = createVector(292.06, 488.45);
  strawberry[7] = createVector(305.34, 557.89);
  strawberry[8] = createVector(118.45, 648.79);
  strawberry[9] = createVector(90.87, 632.45);

  //doubleSlash
  slash[0] = createVector(466.19, 45.72);
  slash[1] = createVector(696.98, 142.23);
  slash[2] = createVector(740.4, 62.57);
  slash[3] = createVector(903.81, 148.36);
  slash[4] = createVector(559.64, 761.13);
  slash[5] = createVector(398.79, 669.21);
  slash[6] = createVector(357.43, 761.13);
  slash[7] = createVector(182.79, 660.02);

  //largeFlower
  flower[0] = createVector(1052.91, 70.23);
  flower[1] = createVector(1209.17, 27.34);
  flower[2] = createVector(1253.6, 64.11);
  flower[3] = createVector(1218.36, 226.49);
  flower[4] = createVector(1267.38, 384.28);
  flower[5] = createVector(1226.02, 431.77);
  flower[6] = createVector(1051.38, 390.4);
  flower[7] = createVector(887.47, 436.36);
  flower[8] = createVector(858.36, 398.06);
  flower[9] = createVector(905.85, 238.74);
  flower[10] = createVector(879.17, 79.43);
  flower[11] = createVector(884.4, 35);

  //shareButton
  share[0] = createVector(1550.79, 41.13);
  share[1] = createVector(1549.26, 254.06);
  share[2] = createVector(1472.66, 175.94);
  share[3] = createVector(1415.98, 238.74);
  share[4] = createVector(1396.06, 338.32);
  share[5] = createVector(1348.57, 235.68);
  share[6] = createVector(1365.43, 157.55);
  share[7] = createVector(1405.26, 110.06);
  share[8] = createVector(1336.32, 42.66);

  //smileyFace
  smile[0] = createVector(290.02, 142.23);
  smile[1] = createVector(398.79, 129.98);
  smile[2] = createVector(481.51, 180.53);
  smile[3] = createVector(458.53, 278.57);
  smile[4] = createVector(355.89, 341.38);
  smile[5] = createVector(233.34, 344.45);
  smile[6] = createVector(159.81, 289.3);
  smile[7] = createVector(181.26, 205.04);

  //atSymbol
  at[0] = createVector(1373, 607);
  at[1] = createVector(1332, 674);
  at[2] = createVector(1342, 755);
  at[3] = createVector(1425, 777);
  at[4] = createVector(1505, 728);
  at[5] = createVector(1547, 654);
  at[6] = createVector(1528, 573);
  at[7] = createVector(1447, 560);

  //nameInternet
  name[0] = createVector(1090, 149);
  name[1] = createVector(1024, 274);
  name[2] = createVector(1468, 595);
  name[3] = createVector(1532, 384);

  //dayCount
  count[0] = createVector(381, 519);
  count[1] = createVector(436, 632);
  count[2] = createVector(94, 794);
  count[3] = createVector(43, 686);


}

function draw() {
  let pX, pY;
  let darkblue = color(11, 25, 45);
  let blue = color(83, 207, 239);



  background(darkblue);

  pX = mouseX;
  pY = mouseY;

  collide();
  doubleSlash();
  smileyFace();
  strawberryWeight();
  dayCount();
  internetGlobe();
  playButton();
  largeFlower();
  nameInternet();
  shareButton();
  atSymbol();
  surfInternet();
  yearNumber();

}


function collide() {

  let darkblue = color(11, 25, 45);
  let pink = color(255, 124, 151);
  let yellow = color(246, 214, 33);
  let brown = color(194, 145, 114);
  let purple = color(167, 111, 213);
  let blue = color(83, 207, 239);
  let red = color(236, 75, 44);
  let lightgreen = color(140, 198, 63);
  let green = color(38, 165, 122);


  textFont(gtmedium);
  noStroke();
  fill(255);
  textSize(38);

  //background will turn into the object's color when the mouse is in that object and also text will run in the bottom from right to left
  if (hit = collidePointPoly(mouseX, mouseY, slash)) {
    background(hit ? color(purple) : 0); //doubleSlash
    a = a - 3.5;
    if (a < -1050 - width) {
      a = width;
    }

    text('THE DOUBLE SLASH ON THE WEB URLS IS A GREATEST REGRET OF THE INVENTOR, TIM BERNERS-LEE.', a, 870);
  }
  if (hit = collidePointCircle(mouseX, mouseY, 886, 560, 440, 440)) {
    background(hit ? color(blue) : 0); //internetGlobe
    b = b - 3.5;
    if (b < -3900 - width) {
      b = width;
    }
    text('THE INTERNET AND THE WORLD WIDE WEB ARE NOT THE SAME. THE INTERNET IS A NETWORK OF COMPUTERS, WHILE THE WORLD WIDE WEB IS A BRIDGE FOR ACCESSING AND SHARING INFORMATION ACROSS IT.', b, 870);
  }
  if (hit = collidePointTriangle(mouseX, mouseY, 971, 698, 1318, 763, 1197, 451)) {
    background(hit ? color(red) : 0); //playButton
    c = c - 3.5;
    if (c < -50 - width) {
      c = width;
    }
    text('THE FIRST YOUTUBE VIDEO WAS UPLOADED APRIL 23, 2005.', c, 870);
  }
  if (hit = collidePointPoly(mouseX, mouseY, strawberry)) {
    background(hit ? color(pink) : 0); //strawberryWeight
    d = d - 3.5;
    if (d < -810 - width) {
      d = width;
    }
    text('THE ENTIRE INTERNET WEIGHTS ABOUT 50 GRAMS, THE SAME AS A PLUMP STRAWBERRY.', d, 870);
  }
  if (hit = collidePointPoly(mouseX, mouseY, smile)) {
    background(hit ? color(yellow) : 0); //smileyFace
    e = e - 3.5;
    if (e < -1900 - width) {
      e = width;
    }
    text('ON SEPTEMBER 19, 1982, CARNEGIE MELLON PROFESSOR DR. SCOTT FAHLMAN INVENTED THE FIRST EMOTICON: THE HUMBLE SMILEY :-).', e, 870);
  }
  if (hit = collidePointPoly(mouseX, mouseY, flower)) {
    background(hit ? color(brown) : 0); //largeFlower
    f = f - 3.5;
    if (f < -4600 - width) {
      f = width;
    }
    text("404 ERROR IS A HTTP STATUS CODE. THE FIRST 4 INDICATES A CLIENT ERROR, THE MIDDLE 0 REFERS TO A GENERAL SYNTAX ERROR AND THE LAST 4 INDICATES THE SPECIFIC ERROR IN THE GROUP OF 40X, SUCH AS 400: BAD REQUEST.", f, 870); //********

  }
  if (hit = collidePointPoly(mouseX, mouseY, share)) {
    background(hit ? color(green) : 0); //shareButton
    g = g - 3.5;
    if (g < -20 - width) {
      g = width;
    }
    text('TODAY, MORE THAN 3.2 MILLION IMAGES WILL BE SHARED.', g, 870);
  }
  if (hit = collidePointRect(mouseX, mouseY, 51, 37, 236, 72)) {
    background(hit ? color(brown) : 0); //yearNumber
    h = h - 3.5;
    if (h < -3900 - width) {
      h = width;
    }
    text('THE MILLENIUM BUG (Y2K) WAS AN UNFORESEEN PROBLEM IN THE COMPUTER SYSTEM. THE EVENTS CAUSED EXTENSIVE HAVOC AS THE YEAR CHANGED FROM 1999 TO 2000 AT THE TURN OF THE MILLENIUM.', h, 870);
  }
  if (hit = collidePointRect(mouseX, mouseY, 57, 167, 46, 238)) {
    background(hit ? color(blue) : 0); //surfInternet
    i = i - 3.5;
    if (i < -1500 - width) {
      i = width;
    }
    text('THE PHRASE "INTERNET SURFING" WAS COINED BY A LIBRARIAN NAMED JEAN AMOUR PLLY, AKA "NET MOM", IN 1992.', i, 870);
  }
  if (hit = collidePointPoly(mouseX, mouseY, count)) {
    col1 = color(darkblue);
    col2 = color(255);
    // noprotect
    push();
    noFill();
    for (let y = 0; y < height; y++) {
      let inter = map(y, 0, height, 0, 1);
      let col = lerpColor(col1, col2, inter);
      stroke(col);
      line(0, y, width, y);
    }
    pop();
    fill(darkblue);
    j = j - 3.5;
    if (j < 600 - width) {
      j = width;
    }
    text('THIS IS HOW OLD THE INTERNET IS.', j, 870);
  }
  if (hit = collidePointPoly(mouseX, mouseY, at)) {
    background(hit ? color(yellow) : 0); //atSymbol
    k = k - 3.5;
    if (k < -1200 - width) {
      k = width;
    }
    text('THE AT SIGN, @, IS ORIGINALLY USED AS AN ACCOUNTNG AND INVOICE ABBREVIATION MEANING "AT A RATE OF".', k, 870);
  }
  if (hit = collidePointPoly(mouseX, mouseY, name)) {
    col1 = color(darkblue);
    col2 = color(255);
    // noprotect
    push();
    noFill();
    for (let y = 0; y < height; y++) {
      let inter = map(y, 0, height, 0, 1);
      let col = lerpColor(col1, col2, inter);
      stroke(col);
      line(0, y, width, y);
    }
    pop();
    fill(darkblue);
    l = l - 3.5;
    if (l < -1050 - width) {
      l = width;
    }
    text('"INTERNET" IS A SHORTENING OF THE TERM "INTERNET WORKING" OR "INTER-SYSTEM NETWORKING".', l, 870);
  }

}


// '//'
function doubleSlash() {
  let darkblue = color(11, 25, 45);
  let purple = color(167, 111, 213);


  stroke(darkblue);
  strokeCap(PROJECT);
  strokeWeight(3);
  fill(purple);

  push();
  rotate(PI / 6);
  translate(670, -320 + sin(frameCount * -0.13));
  rect(0, 0, 194, 704);
  pop();

  push();
  fill(darkblue);
  rotate(PI / 7.5);
  translate(460, -130 + sin(frameCount * 0.13));
  rect(0, 0, 194, 704); //shadow
  pop();

  push();
  rotate(PI / 7.5);
  translate(440, -150 + sin(frameCount * 0.13));
  rect(0, 0, 194, 704);
  pop();






}

//smile emoji
function smileyFace() {
  let darkblue = color(11, 25, 45);
  let yellow = color(246, 214, 33);
  push();
  rotate(PI / -11);
  translate(260, 330 + sin(frameCount * -0.13));
  fill(darkblue);
  ellipse(0, 0, 346, 210); //shadow
  fill(yellow);
  ellipse(-20, -8, 346, 210);
  pop();

  push();
  stroke(darkblue);
  rotate(PI / -10);
  translate(200, 270 + sin(frameCount * -0.13));
  line(0, 0, 0, 65); //face
  line(65, 0, 65, 65);
  pop();

  push();
  stroke(darkblue);
  noFill();
  rotate(PI / 1.12);
  translate(0, 0 + sin(frameCount * 0.13));
  arc(-225, -350, 250, 80, -PI, 0);
  pop();
}

//strawberry
function strawberryWeight() {
  let darkblue = color(11, 25, 45);
  let pink = color(255, 124, 151);
  let lightgreen = color(140, 198, 63);
  push();
  rotate(-PI / 5);
  translate(-280, 475 + sin(frameCount * 0.1));
  fill(darkblue);
  beginShape(); //shadow
  vertex(190, 0);
  vertex(60, 0);
  vertex(0, 90);
  vertex(60, 228);
  vertex(190, 228);
  vertex(250, 90);
  endShape(CLOSE);
  pop();

  push();
  fill(darkblue);
  beginShape(); //shadow
  rotate(-PI / 6.5);
  translate(-170, 440 + sin(frameCount * 0.1));
  vertex(90.36, 15.64);
  bezierVertex(90.36, 15.64, -70, -35, 38.79, 40.16);
  bezierVertex(38.79, 40.16, -70, 120.15, 96.15, 65.09);
  bezierVertex(96.15, 65.09, 260, 120.15, 157.37, 40.16);
  bezierVertex(157.37, 40.16, 260, -35, 90.36, 15.64);
  endShape(CLOSE);
  pop();

  push();
  rotate(-PI / 5);
  translate(-300, 475 + sin(frameCount * 0.1));
  fill(pink);
  beginShape();
  vertex(190, 0);
  vertex(60, 0);
  vertex(0, 90);
  vertex(60, 228);
  vertex(190, 228);
  vertex(250, 90);
  endShape(CLOSE);
  pop();

  //strawbery leaf


  push();
  fill(lightgreen);
  beginShape();
  rotate(-PI / 6.5);
  translate(-190, 450 + sin(frameCount * 0.1));
  vertex(90.36, 15.64);
  bezierVertex(90.36, 15.64, -70, -35, 38.79, 40.16);
  bezierVertex(38.79, 40.16, -70, 120.15, 96.15, 65.09);
  bezierVertex(96.15, 65.09, 260, 120.15, 157.37, 40.16);
  bezierVertex(157.37, 40.16, 260, -35, 90.36, 15.64);
  endShape(CLOSE);
  pop();
}

//days 
function dayCount() {
  let darkblue = color(11, 25, 45);

  //reference: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  const oneDay = 24 * 60 * 60 * 1000;
  // hours*minutes*seconds*milliseconds

  //reference: https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
  const firstDate = new Date(yyyy, mm, dd);
  const secondDate = new Date(1989, 03, 11);
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  push();
  rotate(-PI / 7);
  translate(-245, 635 + sin(frameCount * -0.09));
  fill(darkblue);
  rect(15, 20, 380, 125); //shadow
  fill(255);
  rect(0, 0, 380, 125);
  pop();

  push();
  textFont(gtmedium);
  textSize(85);
  noStroke();
  fill(darkblue);
  rotate(-PI / 7);
  translate(-230, 668 + sin(frameCount * -0.09));

  text(diffDays + "D", -10, 60);
  pop();


}


//globe
function internetGlobe() {
  let darkblue = color(11, 25, 45);
  let blue = color(83, 207, 239);

  push();
  translate(670, 350 + sin(frameCount * 0.11));
  fill(darkblue);
  ellipse(198, 220, 440, 440); //shadow
  fill(blue);
  ellipse(220, 220, 440, 440);
  ellipse(220, 220, 200, 440);
  line(30, 110, 410, 110);
  line(0, 220, 440, 220);
  line(30, 330, 410, 330);
  pop();
}

//play button
function playButton() {
  let darkblue = color(11, 25, 45);
  let red = color(236, 75, 44);
  push();
  translate(1040, 440 + sin(frameCount * -0.1));
  rotate(PI / 15);
  fill(darkblue);
  triangle(142, 9, -34, 293, 319, 294);

  fill(red);
  triangle(174, 0, 0, 281, 349, 281);
  pop();
}

//flower
function largeFlower() {
  let darkblue = color(11, 25, 45);
  let brown = color(194, 145, 114);
  push();
  fill(darkblue);
  beginShape(); //shadow
  translate(860, 45 + sin(frameCount * -0.12));
  translate(-20, 15);
  vertex(194, 26);
  bezierVertex(194, 26, -137.5, -137.5, 44, 194);
  bezierVertex(44, 194, -137.5, 521, 194, 344);
  bezierVertex(194, 344, 528.5, 521, 344, 194);
  bezierVertex(344, 194, 528.5, -137.5, 194, 26);
  endShape(CLOSE);

  translate(20, -15);
  fill(brown);
  beginShape();
  vertex(194, 26);
  bezierVertex(194, 26, -137.5, -137.5, 44, 194);
  bezierVertex(44, 194, -137.5, 521, 194, 344);
  bezierVertex(194, 344, 528.5, 521, 344, 194);
  bezierVertex(344, 194, 528.5, -137.5, 194, 26);
  endShape(CLOSE);
  pop();
}

//internet
function nameInternet() {
  let darkblue = color(11, 25, 45);
  push();
  translate(1090, 150 + sin(frameCount * 0.12));
  rotate(PI / 6.5);
  fill(darkblue);
  rect(20, 22, 502, 141); //shadow 
  fill(255);
  rect(0, 0, 502, 141);
  pop();

  push();
  textFont(gtmedium);
  textSize(70);
  noStroke();
  fill(darkblue);
  rotate(PI / 6.5);
  translate(1060, -335 + sin(frameCount * 0.12));
  text('INTERNET', -10, 60);
  pop();


}

//share
function shareButton() {
  let darkblue = color(11, 25, 45);
  let green = color(38, 165, 122);
  push();
  translate(1320, 40 + sin(frameCount * -0.13));
  fill(darkblue);
  translate(-10, 0);
  beginShape();
  vertex(75, 71);
  bezierVertex(75, 71, -45, 162, 66, 299);
  bezierVertex(66, 299, 60, 200, 142, 139);
  vertex(223, 223);
  vertex(223, 0);
  vertex(0, 0);
  endShape(CLOSE);

  fill(green);
  beginShape();
  translate(20, 0);
  vertex(75, 71);
  bezierVertex(75, 71, -45, 162, 66, 299);
  bezierVertex(66, 299, 60, 200, 142, 139);
  vertex(223, 223);
  vertex(223, 0);
  vertex(0, 0);
  endShape(CLOSE);
  pop();
}

//'@'
function atSymbol() {
  push();
  rotate(-PI / 4);
  translate(415 + sin(frameCount * 0.11), 1400 + sin(frameCount * 0.11));
  strokeWeight(4);
  stroke(255);
  noFill();
  ellipse(130, 89, 260, 178);
  pop();

  push();
  textFont(gtlight);
  textSize(140);
  noStroke();
  fill(255);
  translate(1340 + sin(frameCount * 0.11), 675 + sin(frameCount * 0.11));
  rotate(PI / -4)
  text('@', 0, 100);
  pop();
}

//wave
function surfInternet() {
  push()
  stroke(255);
  strokeWeight(4);
  noFill();
  translate(60, 170 + sin(frameCount * -0.12));
  beginShape();
  curveVertex(42, 0);
  curveVertex(42, 0);
  curveVertex(0, 33);
  curveVertex(42, 66);
  curveVertex(0, 99);
  curveVertex(42, 132);
  curveVertex(0, 165);
  curveVertex(42, 198);
  curveVertex(0, 231);
  curveVertex(0, 231);
  endShape();
  pop();
}

//Y2K
function yearNumber() {
  push();
  textFont(gtlight);
  textSize(100);
  noStroke();
  fill(255);
  text('Y2K', 55, 110 + sin(frameCount * 0.11));
  pop();
}