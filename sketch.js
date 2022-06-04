let data = new Array(500);
let amount = 10;
let radi = 0;
let distance = 20;
let whaaa = 0;
let yeet = 0;
let mode = 1;
let d = 10;
let soup = 255;
let beans = 50;
let e = 0;
let hide = 1;
let click = 0;
let trans = 0;
let transparent = 20;
let fries = 0;
  let release = 0;

function setup() {
  // let[] data;
  //#built different

  //let round = 1;

  createCanvas(600, 600);
  //pixelDensity(2);
  // data = new [500];
  //data = new Array(500);
  for (var i = 0; i < data.length; i++) {
    //fill array with different individual values
    data[i] = i * d;
  }
  yeet = 100.5 * PI;

  //declare
  whaaa = 0 * PI;
}

function f1(x, y) {
  let X = x * cos(radians(y));
  return X;
}
function f2(x, y) {
  let Y = x * sin(radians(y));
  return Y;
}

function mouseWheel(event) {
  let m = event.delta;
  if (click == 0) {
    distance = distance + m;
  } else if (click == 1) {
    if (trans == 0 && transparent + m >= 0 && transparent + m <= 255) {
      transparent = transparent + m;
    } else if (trans == 1 && soup + m >= 0 && soup + m <= 255) {
      soup = soup + m;
    } else if (trans == 2 && beans + m >= 0 && beans + m <= 255) {
      beans = beans + m;
    }
  } else if (click == 2 && radi + m >= 0 && radi + m <= 360) {
    radi = radi + m;
  } else if (
    click == 5 &&
    d + m >= 1 &&
    d + m <= 10 &&
    (fries == 0 || fries == 2)
  ) {
    d = d + m;
  } else if (click == 3 && e + m >= 0 && e + m <= 3) {
    e = e + m;
  } else if (click == 4 && mode + m >= 1 && mode + m <= 8) {
    mode = mode + m;
  } else if (click == 6 && amount + m >= 0 && amount + m <= 500) {
    amount = amount + m;
  }
}

function mouseClicked() {
  if (click == 0) {
    click = 1;
  } else if (click == 1) {
    click = 2;
  } else if (click == 2) {
    click = 3;
  } else if (click == 3) {
    click = 4;
  } else if (click == 4) {
    click = 5;
  } else if (click == 5) {
    click = 6;
  } else if (click == 6) {
    click = 0;
  }
}

function plots(line1x, line1y, line2x, line2y, line3x, line3y) {
  //add transparency control to menu
  stroke(255, 255, 255, soup);
  fill(255, 255, 255, beans);
  //color idea
  //stroke(line1x+150, line2x+150, line3x+150, soup);
  //fill(line1y+150, line2y+150, line3y+150, beans);
  if (e == 0 && fries == 1) {
    point(line1x, line1y);
  } else if (e == 0 && fries == 2) {
    triangle(line1x, line1y, line2x, line2y, line3x, line3y);
  } else if (e == 0) {
    line(line1x, line1y, line2x, line2y);
  } else if (e == 1 && fries == 1) {
    point(f1(line1x, line1y), f2(line1x, line1y));
  } else if (e == 1 && fries == 2) {
    triangle(
      f1(line1x, line1y),
      f2(line1x, line1y),
      f1(line2x, line2y),
      f2(line2x, line2y),
      f1(line3x, line3y),
      f2(line3x, line3y)
    );
  } else if (e == 1) {
    line(
      f1(line1x, line1y),
      f2(line1x, line1y),
      f1(line2x, line2y),
      f2(line2x, line2y)
    );
  } else if (e == 2 && fries == 1) {
    point(
      f1(f1(line1x, line1y), f2(line1x, line1y)),
      f2(f1(line1x, line1y), f2(line1x, line1y))
    );
  } else if (e == 2 && fries == 2) {
    triangle(
      f1(f1(line1x, line1y), f2(line1x, line1y)),
      f2(f1(line1x, line1y), f2(line1x, line1y)),
      f1(f1(line2x, line2y), f2(line2x, line2y)),
      f2(f1(line2x, line2y), f2(line2x, line2y)),
      f1(f1(line3x, line3y), f2(line3x, line3y)),
      f2(f1(line3x, line3y), f2(line3x, line3y))
    );
  } else if (e == 2) {
    line(
      f1(f1(line1x, line1y), f2(line1x, line1y)),
      f2(f1(line1x, line1y), f2(line1x, line1y)),
      f1(f1(line2x, line2y), f2(line2x, line2y)),
      f2(f1(line2x, line2y), f2(line2x, line2y))
    );
  } else if (e == 3 && fries == 1) {
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
  } else if (e == 3 && fries == 2) {
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
  } else if (e == 3) {
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

function draw() {
  whaaa = mouseY / 2;
  if (keyIsPressed == false) {
    release = 0;
  }

  if (keyIsPressed && key == "s" && release == 0) {
    //save img
    //"Users/Kiran/Documents/Processing/GA3_Graphs/frame.jpg"
    //Users/ashleyanderson/Desktop/Processing Code/What Its Like To Chew 5 Gum

    saveFrames(
      "/Users/ashleyanderson/Desktop/Processing Code/What Its Like To Chew 5 Gum/ScreenCaptures/screenshot-######.png"
    );
    release = 1;
  }

  if (keyIsPressed && (key == "o" || key == "O")) {
  } else {
    fill(0, 0, 0, transparent);
    //fill(0, 0, 0);
    rect(0, 0, width, height);
  }

  if (keyIsPressed && key == "l" && release == 0) {
    click = 5;
    if (fries == 0) {
      fries = 1;
      release = 1;
    } else if (fries == 1) {
      fries = 2;
      release = 1;
    } else if (fries == 2) {
      fries = 0;
      release = 1;
    }
  }

  if (keyIsPressed && key == "t" && release == 0) {
    click = 1;
    if (trans == 0) {
      trans = 1;
      release = 1;
    } else if (trans == 1) {
      trans = 2;
      release = 1;
    } else if (trans == 2) {
      trans = 0;
      release = 1;
    }
  }
  //if (keyIsPressed && (key == 'm') && (e == 0) && (release == 0)) {
  //  e = 1;
  //  release = 1;
  //} else if (keyIsPressed && (key == 'm') && (e == 1) && (release == 0)) {
  //  e = 2;
  //  release = 1;
  //} else if (keyIsPressed && (key == 'm') && (e == 2) && (release == 0)) {
  //  e = 3;
  //  release = 1;
  //} else if (keyIsPressed && (key == 'm') && (e == 3) && (release == 0)) {
  //  e = 0;
  //  release = 1;
  //}
  if (keyIsPressed && key == "1") {
    //modes
    mode = 1;
  } else if (keyIsPressed && key == "2") {
    mode = 2;
  } else if (keyIsPressed && key == "3") {
    mode = 3;
  } else if (keyIsPressed && key == "4") {
    mode = 4;
  } else if (keyIsPressed && key == "5") {
    mode = 5;
  } else if (keyIsPressed && key == "6") {
    mode = 6;
  } else if (keyIsPressed && key == "7") {
    mode = 7;
  } else if (keyIsPressed && key == "8") {
    mode = 8;
  }
  stroke(255);
  let bitch = data;
  for (var i = 0; i < bitch.length; i++) {
    //points based on clone count of self. Not values inside the array
    push();
    //control interval spacing (added to menu)
    if (i % amount == 0) {
      translate(width/2, height/2);
      rotate(radians(i * radi));
      let cosX = (data[i] / distance) * cos((data[i] / yeet) * 180);
      let sinY = (data[i] / distance) * sin((data[i] / whaaa) * 180);
      let tanX = (data[i] / distance) * tan((data[i] / yeet) * 180);
      let tanY = (data[i] / distance) * tan((data[i] / whaaa) * 180);
      let atanY = (data[i] / distance) * atan((data[i] / whaaa) * 180);
      let secX = (data[i] / distance) * (1 / cos((data[i] / yeet) * 180));
      let cscY = (data[i] / distance) * (1 / sin((data[i] / whaaa) * 180));
      let cotY = (data[i] / distance) * (1 / tan((data[i] / whaaa) * 180));
      let acotY = (data[i] / distance) * (1 / atan((data[i] / whaaa) * 180));
      if (mode == 1) {
        plots(
          cosX,
          sinY,
          ((data[i] + d) / distance) * cos(((data[i] + d) / yeet) * 180),
          ((data[i] + d) / distance) * sin(((data[i] + d) / whaaa) * 180),
          ((data[i] + d + d) / distance) *
            cos(((data[i] + d + d) / yeet) * 180),
          ((data[i] + d + d) / distance) *
            sin(((data[i] + d + d) / whaaa) * 180)
        );
      } else if (mode == 2) {
        plots(
          cosX,
          tanY,
          ((data[i] + d) / distance) * cos(((data[i] + d) / yeet) * 180),
          ((data[i] + d) / distance) * tan(((data[i] + d) / whaaa) * 180),
          ((data[i] + d + d) / distance) *
            cos(((data[i] + d + d) / yeet) * 180),
          ((data[i] + d + d) / distance) *
            tan(((data[i] + d + d) / whaaa) * 180)
        );
      } else if (mode == 3) {
        plots(
          tanX,
          tanY,
          ((data[i] + d) / distance) * tan(((data[i] + d) / yeet) * 180),
          ((data[i] + d) / distance) * tan(((data[i] + d) / whaaa) * 180),
          ((data[i] + d + d) / distance) *
            tan(((data[i] + d + d) / yeet) * 180),
          ((data[i] + d + d) / distance) *
            tan(((data[i] + d + d) / whaaa) * 180)
        );
      } else if (mode == 4) {
        plots(
          cosX,
          atanY,
          ((data[i] + d) / distance) * cos(((data[i] + d) / yeet) * 180),
          ((data[i] + d) / distance) * atan(((data[i] + d) / whaaa) * 180),
          ((data[i] + d + d) / distance) *
            cos(((data[i] + d + d) / yeet) * 180),
          ((data[i] + d + d) / distance) *
            atan(((data[i] + d + d) / whaaa) * 180)
        );
      } else if (mode == 5) {
        plots(
          secX,
          sinY,
          ((data[i] + d) / distance) * (1 / cos(((data[i] + d) / yeet) * 180)),
          ((data[i] + d) / distance) * sin(((data[i] + d) / whaaa) * 180),
          ((data[i] + d + d) / distance) *
            (1 / cos(((data[i] + d + d) / yeet) * 180)),
          ((data[i] + d + d) / distance) *
            sin(((data[i] + d + d) / whaaa) * 180)
        );
      } else if (mode == 6) {
        plots(
          secX,
          cscY,
          ((data[i] + d) / distance) * (1 / cos(((data[i] + d) / yeet) * 180)),
          ((data[i] + d) / distance) * (1 / sin(((data[i] + d) / whaaa) * 180)),
          ((data[i] + d + d) / distance) *
            (1 / cos(((data[i] + d + d) / yeet) * 180)),
          ((data[i] + d + d) / distance) *
            (1 / sin(((data[i] + d + d) / whaaa) * 180))
        );
      } else if (mode == 7) {
        plots(
          secX,
          cotY,
          ((data[i] + d) / distance) * (1 / cos(((data[i] + d) / yeet) * 180)),
          ((data[i] + d) / distance) * (1 / tan(((data[i] + d) / whaaa) * 180)),
          ((data[i] + d + d) / distance) *
            (1 / cos(((data[i] + d + d) / yeet) * 180)),
          ((data[i] + d + d) / distance) *
            (1 / tan(((data[i] + d + d) / whaaa) * 180))
        );
      } else if (mode == 8) {
        plots(
          secX,
          acotY,
          ((data[i] + d) / distance) * (1 / cos(((data[i] + d) / yeet) * 180)),
          ((data[i] + d) / distance) *
            (1 / atan(((data[i] + d) / whaaa) * 180)),
          ((data[i] + d + d) / distance) *
            (1 / cos(((data[i] + d + d) / yeet) * 180)),
          ((data[i] + d + d) / distance) *
            (1 / atan(((data[i] + d + d) / whaaa) * 180))
        );
      }
      data[i] = data[i] + 0.05;
    }
    pop();

    if (keyIsPressed && key == "r" && release == 0) {
      //reset
      distance = 20;
      trans = 0;
      transparent = 20;
      soup = 255;
      beans = 50;
      radi = 0;
      e = 0;
      mode = 1;
      fries = 0;
      d = 10;
      amount = 10;
      release = 1;
    }

    if (keyIsPressed && key == "h" && hide == 0 && release == 0) {
      //hide
      hide = 1;
      release = 1;
    } else if (keyIsPressed && key == "h" && hide == 1 && release == 0) {
      hide = 0;
      release = 1;
    }

    if (hide == 1) {
      noStroke();
      fill(0, 255, 0);
      if (click == 0) {
        //text
        text("Distance: " + nf(distance, 0, 0), 3, 15);
      } else if (click == 1) {
        if (trans == 0) {
          text("Setting: BACK", 3, 15);
          text("Transparency: " + nf(transparent, 0, 0) + "/255", 3, 30);
        } else if (trans == 1) {
          text("Setting: LINE", 3, 15);
          text("Transparency: " + nf(soup, 0, 0) + "/255", 3, 30);
        } else if (trans == 2) {
          text("Setting: FILL", 3, 15);
          text("Transparency: " + nf(beans, 0, 0) + "/255", 3, 30);
        }
      } else if (click == 2) {
        text("Radians: " + nf(radi, 0, 0) + "/360", 3, 15);
      } else if (click == 3) {
        text("Polarity: " + nf(e, 0, 0) + "/3", 3, 15);
      } else if (click == 4) {
        text("Mode: " + nf(mode - 1, 0, 0) + "/7", 3, 15);
      } else if (click == 5) {
        if (fries == 1) {
          fill(0, 155, 0);
          text("Lines: OFF", 3, 15);
        } else {
          fill(0, 255, 0);
          if (fries == 0) {
            text("Lines: LINES", 3, 15);
          } else {
            text("Lines: TRIANGLES", 3, 15);
          }
          text("Line Spacing: " + nf(d - 1, 0, 0) + "/9", 3, 30);
        }
      } else if (click == 6) {
        text("Amount: " + nf(amount, 0, 0) + "/500", 3, 15);
      }
    }
  }
}
