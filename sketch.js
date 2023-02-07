//TODO:
//add more colours
//add preset codes
//add yeet component of beans(whaaa)
//convert particles to classes <--done (working out the kinks):
// - fix speed increase (expanding universe biz) might not be using "speed" variable since class conversion (maybe delete particles that have increased too much and create new ones)
//find a way to make code more efficient

//you know what this means (probably)//
let whaaa = 1;
let yeet = 1;

let distance = 20; //distance (obviously!)//
let mode = 1; //graph render setting//
let polar = 0; //polarity//
let radi = 0; //graph rotation//
let amount = 10; //density of data present on screen//
let click = 0; //menu position//
let blend = 0; //blendmode setting//

//transparency settings//
let transSettings = 0;
let backTrans = 20;
let lineTrans = 255;
let fillTrans = 50;

//point, line, triangle settings//
let lineSettings = 1;
let pointSpacing = 10;

let bpress = 0; //prints to console if button is pressed or not//

let trails = 0; //whether "o" (Y on controller) is pressed or not//
let twist = 180; //the direction/speed the graph is generated (I guess?)//

let colour = 0;

let speed = 0.05;

// let t = 200;
let timerCount = 0;
let timerRunning = 0;

let analogStickSign = 1;
let analogStickMap = 1000;
let check = 1;
let analogStickTimer;
let analogsticky;

let cosX,
sinY,
tanX,
tanY,
atanY,
secX,
cscY,
cotY,
acotY,
start0,
start1,
start2,
starty0,
starty1,
starty2,
startw0,
startw1,
startw2,
turn;

// function changeTimer() {
//             t = t++;
//         }

function setup() {
  particles = [];
for(let i = 0;i< 500;i++){
  particles.push(new Particle(i));
} //points generated//

  for (let i = 0; i < 12; i++) {
    click = i;
    buttonUpdate(0);
  }
  mybutton(0);
  blendMode(SCREEN);

  if (windowHeight < windowWidth) {
    createCanvas(windowHeight, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth);
  }

  // for (var i = 0; i < data.length; i++) {
  //   //fill array with different individual values
  //   data[i] = i * pointSpacing;
  // }
  whaaa = 1;
}

function windowResized() {
  if (windowHeight < windowWidth) {
    resizeCanvas(windowHeight, windowHeight);
  } else {
    resizeCanvas(windowWidth, windowWidth);
  }
}

Controller.search();

window.addEventListener(
  "gc.controller.found",
  function (event) {
    var controller = event.detail.controller;
    console.log("Controller found at index " + controller.index + ".");
    console.log("'" + controller.name + "' is ready!");
  },
  false
);

window.addEventListener(
  "gc.controller.lost",
  function (event) {
    console.log(
      "The controller at index " +
        event.detail.index +
        " has been disconnected."
    );
    console.log(Controller.getController(0));
  },
  false
);

// window.addEventListener(
//   "gc.button.press",
//   function (event) {
//     var button = event.detail;
//     console.log(button);
//   },
//   false
// );

// window.addEventListener(
//   "gc.analog.start",
//   function (event) {
//     var stick = event.detail;
//     console.log(stick);
//   },
//   false
// );

function timeIt() {
  if (Math.abs(analogStickMap) > Math.abs(analogsticky)) {
    if (Math.sign(analogStickMap) == 1) {
      buttonUpdate(-1);
    } else if (Math.sign(analogStickMap) == -1) {
      buttonUpdate(1);
    }
  } else if (Math.abs(analogStickMap) < Math.abs(analogsticky)) {
    if (analogsticky == 1) {
      if (click == 11) {
        click = 0;
      } else {
        click++;
      }
      mybutton(click);
    } else if (analogsticky == -1) {
      if (click == 0) {
        click = 10;
      } else {
        click--;
      }
      mybutton(click);
    }
  }

  clearInterval(analogStickTimer);
  analogStickTimer = setInterval(
    timeIt,
    map(Math.abs(analogStickMap), 0, 1, 500, 0)
  );
}

window.addEventListener(
  "gc.analog.start",
  function (event) {
    if (event.detail.name == "RIGHT_ANALOG_STICK") {
      analogStickTimer = setInterval(
        timeIt,
        map(Math.abs(analogStickMap), 0, 1, 500, 0)
      );
      timerRunning = 1;
    }
  },
  false
);

window.addEventListener(
  "gc.analog.hold",
  function (event) {
    if (event.detail.name == "RIGHT_ANALOG_STICK") {
      // changeTimer();
      // analogStickSign = Math.sign(event.detail.position.y);
      analogStickMap = event.detail.position.y;
      analogsticky = event.detail.position.x;
    }
  },
  false
);

window.addEventListener(
  "gc.analog.end",
  function (event) {
    if (event.detail.name == "RIGHT_ANALOG_STICK") {
      timerRunning = 0;
      clearInterval(analogStickTimer);
    }
  },
  false
);

function f1(x, y) {
  let X = x * Math.cos(radians(y));
  return X;
}
function f2(x, y) {
  let Y = x * Math.sin(radians(y));
  return Y;
}

function buttonUpdate(ha) {
  m = ha;
  let menu1 = document.getElementById("Distance");
  let menu2 = document.getElementById("Transparency");
  let menu3 = document.getElementById("Radians");
  let menu4 = document.getElementById("Lines");
  let menu5 = document.getElementById("Polarity");
  let menu6 = document.getElementById("Mode");
  let menu7 = document.getElementById("Amount");
  let menu8 = document.getElementById("Twist");
  let menu9 = document.getElementById("BlendMode");
  let menu10 = document.getElementById("Colour");
  let menu11 = document.getElementById("Beans");

  if (click == 0) {
    distance = distance + m;
    menu1.innerText = "Distance: " + nf(distance, 0, 0);
  } else if (click == 1) {
    if (transSettings == 0 && backTrans + m >= 0 && backTrans + m <= 255) {
      backTrans = backTrans + m;
      menu2.innerText =
        "Setting: BACK" + "\nTransparency: " + nf(backTrans, 0, 0) + "/255";
    } else if (
      transSettings == 1 &&
      lineTrans + m >= 0 &&
      lineTrans + m <= 255
    ) {
      lineTrans = lineTrans + m;
      menu2.innerText =
        "Setting: LINE" + "\nTransparency: " + nf(lineTrans, 0, 0) + "/255";
    } else if (
      transSettings == 2 &&
      fillTrans + m >= 0 &&
      fillTrans + m <= 255
    ) {
      fillTrans = fillTrans + m;
      menu2.innerText =
        "Setting: FILL" + "\nTransparency: " + nf(fillTrans, 0, 0) + "/255";
    }
  } else if (click == 2 && radi + m >= 0 && radi + m <= 360) {
    radi = radi + m;
    menu3.innerText = "Radians: " + nf(radi, 0, 0) + "/360";
  } else if (click == 5 && pointSpacing + m >= 1 && pointSpacing + m <= 10) {
    if (lineSettings == 1) {
      menu4.innerText = "Lines: OFF";
    } else if (lineSettings == 0) {
      pointSpacing = pointSpacing + m;
      menu4.innerText =
        "Lines: LINES" + "\nLine Spacing: " + nf(pointSpacing - 1, 0, 0) + "/9";
    } else {
      pointSpacing = pointSpacing + m;
      menu4.innerText =
        "Lines: TRIANGLES" +
        "\nLine Spacing: " +
        nf(pointSpacing - 1, 0, 0) +
        "/9";
    }
  } else if (click == 3 && polar + m >= 0 && polar + m <= 3) {
    polar = polar + m;
    menu5.innerText = "Polarity: " + nf(polar, 0, 0) + "/3";
  } else if (click == 4 && mode + m >= 1 && mode + m <= 8) {
    mode = mode + m;
    menu6.innerText = "Mode: " + nf(mode - 1, 0, 0) + "/7";
  } else if (click == 6 && amount + m >= 0 && amount + m <= 500) {
    amount = amount + m;
    menu7.innerText = "Amount: " + nf(amount, 0, 0) + "/500";
  } else if (click == 7) {
    twist = twist + m;
    menu8.innerText = "Twist: " + nf(twist, 0, 0);
  } else if (click == 8) {
    if (blend == 0) {
      bmode = BLEND;
    } else if (blend == 1) {
      bmode = SCREEN;
    } else if (blend == 2) {
      bmode = ADD;
    } else if (blend == 3) {
      bmode = DIFFERENCE;
    } else if (blend == 4) {
      bmode = EXCLUSION;
    } else if (blend == 5) {
      bmode = LIGHTEST;
    } else if (blend == 6) {
      bmode = OVERLAY;
    } else if (blend == 7) {
      bmode = HARD_LIGHT;
    } else if (blend == 8) {
      bmode = SOFT_LIGHT;
    } else if (blend == 9) {
      bmode = DODGE;
    }
    menu9.innerText = "BlendMode: " + blenders[blend];
  } else if (click == 9 && colour + m >= 0 && colour + m <= 5) {
    colour = colour + m;
    menu10.innerText = "Colour: " + nf(colour, 0, 0);
  } else if (click == 10) {
    //HEREEEEEEE
    whaaa = whaaa + m;
    if (yeet == 1000 * PI) {
      menu11.innerText = "Beans: PI" + "\nwhaaa: " + nf(whaaa, 0, 0);
    } else if (yeet == 1) {
      menu11.innerText = "Beans: Normal" + "\nwhaaa: " + nf(whaaa, 0, 0);
    }
  }
}

//SCREEN ADD DIFFERENCE EXCLUSION LIGHTEST OVERLAY HARD_LIGHT SOFT_LIGHT DODGE

let blenders = [
  "DEFAULT",
  "SCREEN",
  "ADD",
  "DIFFERENCE",
  "EXCLUSION",
  "LIGHTEST",
  "OVERLAY",
  "HARD_LIGHT",
  "SOFT_LIGHT",
  "DODGE",
];
let elements = [
  "Distance",
  "Transparency",
  "Radians",
  "Polarity",
  "Mode",
  "Lines",
  "Amount",
  "Twist",
  "BlendMode",
  "Colour",
  "Beans",
];

function mybutton(boop) {
  click = boop;
  document.getElementById(elements[boop]).style.color = "#FFFFFF";
  for (let i = 0; i < elements.length; i++) {
    if (i != boop) {
      document.getElementById(elements[i]).style.color = "#8B8B8B";
    }
  }
  // document.getElementById("demo").innerHTML = "Hello World";
}

function reset(types) {
  let clickSave = click;
  if (types == 0) {
    distance = 20;
    transSettings = 0;
    backTrans = 20;
    lineTrans = 255;
    fillTrans = 50;
    radi = 0;
    polar = 0;
    mode = 1;
    amount = 10;
    pointSpacing = 10;
    // lineSettings = 1;
    // trails = 0;
    twist = 180;
    blend = 0;
    // mybutton(0);
    for (let i = 0; i < 9; i++) {
      click = i;
      buttonUpdate(0);
    }
  } else if (types == 1) {
    mybutton(0);
    distance = 100;
    transSettings = 0;
    backTrans = 20;
    lineTrans = 255;
    fillTrans = 50;
    radi = 3;
    polar = 1;
    mode = 6;
    amount = 1;
    pointSpacing = 10;
    // lineSettings = 1;
    // trails = 0;
    twist = 1;
    blend = 1;
    // mybutton(0);
    for (let i = 0; i < 10; i++) {
      click = i;
      buttonUpdate(0);
    }
  }
  click = clickSave;
  buttonUpdate(0);
  mybutton(click);
}

window.addEventListener(
  "gc.button.press",
  function (event) {
    if (event.detail.name == "RIGHT_SHOULDER") {
      reset(0);
    } else if (event.detail.name == "LEFT_SHOULDER") {
      reset(1);
    }

    if (event.detail.name == "FACE_4") {
      trails = 1;
    }

    if (event.detail.name == "FACE_3") {
      if (click == 1) {
        if (transSettings == 2) {
          transSettings = 0;
        } else {
          transSettings++;
        }
      } else if (click == 5) {
        if (lineSettings == 2) {
          lineSettings = 0;
        } else {
          lineSettings++;
        }
      } else if (click == 8) {
        if (blend == 9) {
          blend = 0;
        } else {
          blend++;
        }
      } else if (click == 10) {
        if (yeet == 1000 * PI) {
          yeet = 1;
        } else if (yeet == 1) {
          yeet = 1000 * PI;
        }
      }
      buttonUpdate(0);
    }

    if (event.detail.name == "FACE_2") {

    }
    if (event.detail.name == "FACE_1") {
      save(
        "WILTC5G-" +
          distance +
          "-" +
          radi +
          "-" +
          polar +
          "-" +
          amount +
          "-" +
          twist +
          ".png"
      );
    }

    if (event.detail.name == "DPAD_UP") {
      buttonUpdate(1);
    } else if (event.detail.name == "DPAD_DOWN") {
      buttonUpdate(-1);
    } else if (event.detail.name == "DPAD_RIGHT") {
      if (click == 10) {
        click = 0;
      } else {
        click++;
      }
      // buttonUpdate(0);
      mybutton(click);
    } else if (event.detail.name == "DPAD_LEFT") {
      if (click == 0) {
        click = 10;
      } else {
        click--;
      }
      // buttonUpdate(0);
      mybutton(click);
    }
    bpress = 1;
    console.log(bpress);
  },
  false
);

window.addEventListener(
  "gc.button.release",
  function (event) {
    if (event.detail.name == "FACE_4") {
      trails = 0;
    }

    bpress = 0;
    incriment = 25;
    console.log(bpress);
  },
  false
);

window.addEventListener(
  "gc.button.hold",
  function (event) {
    if (event.detail.name == "DPAD_UP") {
    } else if (event.detail.name == "DPAD_DOWN") {
    }
  },
  false
);

function plots(line1x, line1y, line2x, line2y, line3x, line3y) {
  fill(255, 255, 255, fillTrans);
  //color idea
  stroke(line1x + 150, line2x + 150, line3x + 150, lineTrans);
  fill(line1y + 150, line2y + 150, line3y + 150, fillTrans);
  if (polar == 0 && lineSettings == 1) {
    point(line1x, line1y);
  } else if (polar == 0 && lineSettings == 2) {
    triangle(line1x, line1y, line2x, line2y, line3x, line3y);
  } else if (polar == 0) {
    line(line1x, line1y, line2x, line2y);
  } else if (polar == 1 && lineSettings == 1) {
    point(f1(line1x, line1y), f2(line1x, line1y));
  } else if (polar == 1 && lineSettings == 2) {
    triangle(
      f1(line1x, line1y),
      f2(line1x, line1y),
      f1(line2x, line2y),
      f2(line2x, line2y),
      f1(line3x, line3y),
      f2(line3x, line3y)
    );
  } else if (polar == 1) {
    line(
      f1(line1x, line1y),
      f2(line1x, line1y),
      f1(line2x, line2y),
      f2(line2x, line2y)
    );
  } else if (polar == 2 && lineSettings == 1) {
    point(
      f1(f1(line1x, line1y), f2(line1x, line1y)),
      f2(f1(line1x, line1y), f2(line1x, line1y))
    );
  } else if (polar == 2 && lineSettings == 2) {
    triangle(
      f1(f1(line1x, line1y), f2(line1x, line1y)),
      f2(f1(line1x, line1y), f2(line1x, line1y)),
      f1(f1(line2x, line2y), f2(line2x, line2y)),
      f2(f1(line2x, line2y), f2(line2x, line2y)),
      f1(f1(line3x, line3y), f2(line3x, line3y)),
      f2(f1(line3x, line3y), f2(line3x, line3y))
    );
  } else if (polar == 2) {
    line(
      f1(f1(line1x, line1y), f2(line1x, line1y)),
      f2(f1(line1x, line1y), f2(line1x, line1y)),
      f1(f1(line2x, line2y), f2(line2x, line2y)),
      f2(f1(line2x, line2y), f2(line2x, line2y))
    );
  } else if (polar == 3 && lineSettings == 1) {
    point(
      f1(
        f1(f1(line1x, line1y), f2(line1x, line1y)),
        f2(f1(line1x, line1y), f2(line1x, line1y))
      ),
      f2(
        f1(f1(line1x, line1y), f2(line1x, line1y)),
        f2(f1(line1x, line1y), f2(line1x, line1y))
      )
    );
  } else if (polar == 3 && lineSettings == 2) {
    triangle(
      f1(
        f1(f1(line1x, line1y), f2(line1x, line1y)),
        f2(f1(line1x, line1y), f2(line1x, line1y))
      ),
      f2(
        f1(f1(line1x, line1y), f2(line1x, line1y)),
        f2(f1(line1x, line1y), f2(line1x, line1y))
      ),
      f1(
        f1(f1(line2x, line2y), f2(line2x, line2y)),
        f2(f1(line2x, line2y), f2(line2x, line2y))
      ),
      f2(
        f1(f1(line2x, line2y), f2(line2x, line2y)),
        f2(f1(line2x, line2y), f2(line2x, line2y))
      ),
      f1(
        f1(f1(line3x, line3y), f2(line3x, line3y)),
        f2(f1(line3x, line3y), f2(line3x, line3y))
      ),
      f2(
        f1(f1(line3x, line3y), f2(line3x, line3y)),
        f2(f1(line3x, line3y), f2(line3x, line3y))
      )
    );
  } else if (polar == 3) {
    line(
      f1(
        f1(f1(line1x, line1y), f2(line1x, line1y)),
        f2(f1(line1x, line1y), f2(line1x, line1y))
      ),
      f2(
        f1(f1(line1x, line1y), f2(line1x, line1y)),
        f2(f1(line1x, line1y), f2(line1x, line1y))
      ),
      f1(
        f1(f1(line2x, line2y), f2(line2x, line2y)),
        f2(f1(line2x, line2y), f2(line2x, line2y))
      ),
      f2(
        f1(f1(line2x, line2y), f2(line2x, line2y)),
        f2(f1(line2x, line2y), f2(line2x, line2y))
      )
    );
  }
}

function simplecalc(uno, dos, tres, quatro, sinco) {
  return ((uno + tres * quatro) / dos) * sinco;
}

function draw() {
  // console.log(timerValue);
  fill(255);
  blendMode(BLEND);

  // fill(255);
  // let fps = frameRate();
  // text("FPS: " + fps.toFixed(2), 10, height - 10);

  if (trails == 1) {
    blendMode(bmode);
  } else {
    blendMode(BLEND);
    fill(0, 0, 0, backTrans);
    rect(0, 0, width, height);
    blendMode(bmode);
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].drawParticle();
    //points based on clone count of self. Not values inside the array
    
  }
}

class Particle {
    constructor(i){
      this.i = i;
    }
  
    drawParticle() {
      push();
      frames = frameCount + (this.i * pointSpacing);
    //control interval spacing (added to menu)
    if (this.i % amount == 0) {
      translate(width / 2, height / 2);
      rotate(radians(this.i * radi));

      //ADD HERE
      turn = twist;

      if (colour == 0) {
        colorMode(HSB);
        stroke(map(this.i, 0, particles.length, 0, 360), 100, 50, lineTrans);
        colorMode(RGB, 255);
      } else if (colour == 1) {
        stroke(255, lineTrans);
      } else if (colour == 2) {
        stroke(
          map(i, 0, particles.length, 0, 255),
          map(i, 0, particles.length, 0, 255),
          map(i, 0, particles.length, 0, 255),
          lineTrans
        );
      } else if (colour == 3) {
        stroke(
          map(i, 0, particles.length, 255, 0),
          map(i, 0, particles.length, 255, 0),
          map(i, 0, particles.length, 255, 0),
          lineTrans
        );
      } else if (colour == 4) {
        stroke(
          map(i, 0, particles.length, 100, 0),
          map(i, 0, particles.length, 0, 100),
          map(i, 0, particles.length, 0, 100),
          lineTrans
        );
      }


      // simplecalc(data[i], distance, pointSpacing, 0);
      start0 = simplecalc(frames, distance, pointSpacing, 0, 1);
      start1 = simplecalc(frames, distance, pointSpacing, 1, 1);
      start2 = simplecalc(frames, distance, pointSpacing, 2, 1);

      // (uno + tres * quatro) / dos;
      // (((data[i] + pointSpacing * 2) / yeet) * turn)
      starty0 = simplecalc(frames, yeet, pointSpacing, 0, turn);
      starty1 = simplecalc(frames, yeet, pointSpacing, 1, turn);
      starty2 = simplecalc(frames, whaaa, pointSpacing, 2, turn);
      startw0 = simplecalc(frames, whaaa, pointSpacing, 0, turn);
      startw1 = simplecalc(frames, whaaa, pointSpacing, 1, turn);
      startw2 = simplecalc(frames, whaaa, pointSpacing, 2, turn);
      // start = data[i] / distance;

      cosX = start0 * Math.cos(starty0);
      sinY = start0 * Math.sin(startw0);
      tanX = start0 * Math.tan(starty0);
      tanY = start0 * Math.tan(startw0);
      atanY = start0 * Math.atan(startw0);
      secX = start0 / Math.cos(starty0);
      cscY = start0 / Math.sin(startw0);
      cotY = start0 / Math.tan(startw0);
      acotY = start0 / Math.atan(startw0);

      if (mode == 1) {
        plots(
          cosX,
          sinY,
          start1 * Math.cos(starty1),
          start1 * Math.sin(startw1),
          start2 * Math.cos(starty2),
          start2 * Math.sin(startw2)
        );
      } else if (mode == 2) {
        plots(
          cosX,
          tanY,
          start1 * Math.cos(starty1),
          start1 * Math.tan(startw1),
          start2 * Math.cos(starty2),
          start2 * Math.tan(startw2)
        );
      } else if (mode == 3) {
        plots(
          tanX,
          tanY,
          start1 * Math.tan(starty1),
          start1 * Math.tan(startw1),
          start2 * Math.tan(starty2),
          start2 * Math.tan(startw2)
        );
      } else if (mode == 4) {
        plots(
          cosX,
          atanY,
          start1 * Math.cos(starty1),
          start1 * Math.atan(startw1),
          start2 * Math.cos(starty2),
          start2 * Math.atan(startw2)
        );
      } else if (mode == 5) {
        plots(
          secX,
          sinY,
          start1 * (1 / Math.cos(starty1)),
          start1 * Math.sin(startw1),
          start2 * (1 / Math.cos(starty2)),
          start2 * Math.sin(startw2)
        );
      } else if (mode == 6) {
        plots(
          secX,
          cscY,
          start1 * (1 / Math.cos(starty1)),
          start1 * (1 / Math.sin(startw1)),
          start2 * (1 / Math.cos(starty2)),
          start2 * (1 / Math.sin(startw2))
        );
      } else if (mode == 7) {
        plots(
          secX,
          cotY,
          start1 * (1 / Math.cos(starty1)),
          start1 * (1 / Math.tan(startw1)),
          start2 * (1 / Math.cos(starty2)),
          start2 * (1 / Math.tan(startw2))
        );
      } else if (mode == 8) {
        plots(
          secX,
          acotY,
          start1 * (1 / Math.cos(starty1)),
          start1 * (1 / Math.atan(startw1)),
          start2 * (1 / Math.cos(starty2)),
          start2 * (1 / Math.atan(startw2))
        );
      }
      // data[i] = data[i] + speed;
    }
    pop();
    }
    
}