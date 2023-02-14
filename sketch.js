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

  whaaa = 1;
}

function windowResized() {
  if (windowHeight < windowWidth) {
    resizeCanvas(windowHeight, windowHeight);
  } else {
    resizeCanvas(windowWidth, windowWidth);
  }
}

function draw() {
  // console.log(timerValue);
  fill(255);
  blendMode(BLEND);

  // fill(255);
  // let fps = frameRate();
  // console.log("FPS: " + fps.toFixed(2), 10, height - 10);

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

  colorSetting() {
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
  }

  drawParticle() {
    push();
      // frames = frameCount + (this.i * pointSpacing);
      //control interval spacing (added to menu)
      if (this.i % amount == 0) {
        translate(width / 2, height / 2);
        rotate(radians(this.i * radi));

      //ADD HERE
      // turn = twist;

      this.colorSetting();

      this.getPoints();

      //color ideas
      fill(255, 255, 255, fillTrans);
      // stroke(line1x + 150, line2x + 150, line3x + 150, lineTrans);
      // fill(line1y + 150, line2y + 150, line3y + 150, fillTrans);


      //fix lineSettings
      //fix amount
      //fix polar limits
      //fix simplecalc
      //fix colors
      beginShape();
      vertex.apply(null, this.getPoints());
      for (var j = 0; j < lineSettings+1; j++) {
      vertex.apply(null, particles[this.i + j].getPoints());
      }
      vertex.apply(null, this.getPoints());
      endShape();

    // data[i] = data[i] + speed;
  }
  pop();
  }

  getPolar(a, b) {
    let ab = [a, b];
    for (var i = 0; i < polar; i++) {
      ab = this.f.apply(null, ab)
    }
  return ab
  }

  getPoints(){

    let calc = frameCount + (this.i * pointSpacing)

    start0 = calc / distance;
    starty0 = calc / yeet * twist;
    startw0 = calc / whaaa * twist;

    let x;
    let y;

    if (mode == 1) {
      x = start0 * Math.cos(starty0)
      y = start0 * Math.sin(startw0)

    } else if (mode == 2) {
      x = start0 * Math.cos(starty0)
      y = start0 * Math.tan(startw0)

    } else if (mode == 3) {
      x = start0 * Math.tan(starty0)
      y = start0 * Math.tan(startw0)

    } else if (mode == 4) {
      x = start0 * Math.cos(starty0)
      y = start0 * Math.atan(startw0)

    } else if (mode == 5) {
      x = start0 * (1 / Math.cos(starty0))
      y = start0 * Math.sin(startw0)

    } else if (mode == 6) {
      x = start0 * (1 / Math.cos(starty0))
      y = start0 * (1 / Math.sin(startw0))

    } else if (mode == 7) {
      x = start0 * (1 / Math.cos(starty0))
      y = start0 * (1 / Math.tan(startw0))

    } else if (mode == 8) {
      x = start0 * (1 / Math.cos(starty0))
      y = start0 * (1 / Math.atan(startw0))
    }

    return this.getPolar(x,y)
  }

  f(x, y) {
    let X = x * Math.cos(radians(y));
    let Y = x * Math.sin(radians(y));
    return [X, Y]
  }

}