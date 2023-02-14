//TODO:
//add more colours
//add preset codes
//add yeet component of beans(whaaa)
//convert particles to classes <--done (working out the kinks):
// - fix speed increase (expanding universe biz) might not be using "speed" variable since class conversion (maybe delete particles that have increased too much and create new ones)
//find a way to make code more efficient


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



function f1(x, y) {
  let X = x * Math.cos(radians(y));
  return X;
}
function f2(x, y) {
  let Y = x * Math.sin(radians(y));
  return Y;
}
// tuple update (add to plots())
function f(x, y) {
  let X = x * Math.cos(radians(y));
  let Y = x * Math.sin(radians(y));
  return [X, Y]
}

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
    point.apply(null, f.apply(null, [line1x, line1y])); // <- new and improved tuples
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
//THIS ALL DOESNT NEED TO BE UPDATED EVERYTIME DEPENDING ON MODE
      // simplecalc(data[i], distance, pointSpacing, 0);
      start0 = simplecalc(frames, distance, pointSpacing, 0, 1);
      start1 = simplecalc(frames, distance, pointSpacing, 1, 1);
      start2 = simplecalc(frames, distance, pointSpacing, 2, 1);

      // (uno + tres * quatro) / dos;
      // (((data[i] + pointSpacing * 2) / yeet) * turn)
      starty0 = simplecalc(frames, yeet, pointSpacing, 0, turn);
      starty1 = simplecalc(frames, yeet, pointSpacing, 1, turn);
      starty2 = simplecalc(frames, yeet, pointSpacing, 2, turn);
      startw0 = simplecalc(frames, whaaa, pointSpacing, 0, turn);
      startw1 = simplecalc(frames, whaaa, pointSpacing, 1, turn);
      startw2 = simplecalc(frames, whaaa, pointSpacing, 2, turn);
      // start = data[i] / distance;

      if (mode == 1) {
//NOT ALL OF THESE VALUES NEED TO BE UPDATED AND SENT TO PLOTS DEPENDING ON THE LINE SETTINGS
//DONT CALCULATE 2nd AND 3rd POINTS, JUST GET THEM FROM THE THE OTHER PARTICLES
        plots(
          start0 * Math.cos(starty0),
          start0 * Math.sin(startw0),
          start1 * Math.cos(starty1),
          start1 * Math.sin(startw1),
          start2 * Math.cos(starty2),
          start2 * Math.sin(startw2)
        );
      } else if (mode == 2) {
        plots(
          start0 * Math.cos(starty0),
          start0 * Math.tan(startw0),
          start1 * Math.cos(starty1),
          start1 * Math.tan(startw1),
          start2 * Math.cos(starty2),
          start2 * Math.tan(startw2)
        );
      } else if (mode == 3) {
        plots(
          start0 * Math.tan(starty0),
          start0 * Math.tan(startw0),
          start1 * Math.tan(starty1),
          start1 * Math.tan(startw1),
          start2 * Math.tan(starty2),
          start2 * Math.tan(startw2)
        );
      } else if (mode == 4) {
        plots(
          start0 * Math.cos(starty0),
          start0 * Math.atan(startw0),
          start1 * Math.cos(starty1),
          start1 * Math.atan(startw1),
          start2 * Math.cos(starty2),
          start2 * Math.atan(startw2)
        );
      } else if (mode == 5) {
        plots(
          start0 * (1 / Math.cos(starty0)),
          start0 * Math.sin(startw0),
          start1 * (1 / Math.cos(starty1)),
          start1 * Math.sin(startw1),
          start2 * (1 / Math.cos(starty2)),
          start2 * Math.sin(startw2)
        );
      } else if (mode == 6) {
        plots(
          start0 * (1 / Math.cos(starty0)),
          start0 * (1 / Math.sin(startw0)),
          start1 * (1 / Math.cos(starty1)),
          start1 * (1 / Math.sin(startw1)),
          start2 * (1 / Math.cos(starty2)),
          start2 * (1 / Math.sin(startw2))
        );
      } else if (mode == 7) {
        plots(
          start0 * (1 / Math.cos(starty0)),
          start0 * (1 / Math.tan(startw0)),
          start1 * (1 / Math.cos(starty1)),
          start1 * (1 / Math.tan(startw1)),
          start2 * (1 / Math.cos(starty2)),
          start2 * (1 / Math.tan(startw2))
        );
      } else if (mode == 8) {
        plots(
          start0 * (1 / Math.cos(starty0)),
          start0 * (1 / Math.atan(startw0)),
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