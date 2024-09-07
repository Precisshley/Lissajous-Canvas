// function changeTimer() {
//             t = t++;
//         }

function setup() {
  particles = [];
  for (let i = 0; i < 500; i++) {
    particles.push(new Particle(i));
  } //points generated//

  for (let i = 0; i < 12; i++) {
    click = i;
    eyes.buttonUpdate(0);
  }
  mybutton(0);
  blendMode(SCREEN);


  if (windowHeight < windowWidth) {
    createCanvas(windowHeight, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth);
  }
  lissaY = 1;
  pixelDensity(1); //new
}

function windowResized() {
  if (windowHeight < windowWidth) {
    resizeCanvas(windowHeight, windowHeight);
  } else {
    resizeCanvas(windowWidth, windowWidth);
  }
}

function draw() {
  lissaX = initialX * multiplierX
  lissaY = initialY * multiplierY
  fill(255);
  blendMode(BLEND);
  // fill(255);
  // let fps = frameRate();
  // console.log("FPS: " + fps.toFixed(2), 10, height - 10);

  if (trails == 1) {
    setBlendModeByIndex(blend);
  } else {
    blendMode(BLEND);
    
    fill(red(color(backgroundColor)), green(color(backgroundColor)), blue(color(backgroundColor)), backTrans);
    rect(0, 0, width, height);
    setBlendModeByIndex(blend);
  }

  particles.forEach((particle) => {
    particle.drawParticle();
  });
}

class Particle {
  constructor(i) {
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
      let colorCount = ((frameCount + ((this.i) * pointSpacing)) % ((amount) * pointSpacing)) + startP;
      stroke(
        map(colorCount, 0, ((amount) * pointSpacing), 0, 255),
        map(colorCount, 0, ((amount) * pointSpacing), 0, 255),
        map(colorCount, 0, ((amount) * pointSpacing), 0, 255),
        lineTrans
      );
    } else if (colour == 3) {
      let colorCount = ((frameCount + ((this.i) * pointSpacing)) % ((amount) * pointSpacing)) + startP;
      let c = lerpColor(color(outlineColor1), color(outlineColor2), map(colorCount, ((amount) * pointSpacing), 0, 0, 1));
      c.setAlpha(lineTrans);
      stroke(c);
    } else if (colour == 4) {
      stroke(
        map(this.i, 0, particles.length, 100, 0),
        map(this.i, 0, particles.length, 0, 100),
        map(this.i, 0, particles.length, 0, 100),
        lineTrans
      );
    }
  }

  drawParticle() {
    push();
    // frames = frameCount + (this.i * pointSpacing);
    //control interval spacing (added to menu)
    if (this.i <= amount) {
      translate(width / 2, height / 2);
      rotate(radians(this.i * radi));

      //ADD HERE
      // turn = twist;

      this.colorSetting();

      //color ideas
      fill(255, 255, 255, fillTrans);
      // stroke(line1x + 150, line2x + 150, line3x + 150, lineTrans);
      // fill(line1y + 150, line2y + 150, line3y + 150, fillTrans);

      //fix lineCount
      //fix amount
      //fix polar limits
      //fix simplecalc
      //fix colors
      const points = this.getPoints();

      // Could put this if statement in the draw function and make two functions (points, and vertex) in this class. 
      // May reduce logic time.
      if (lineCount == 0){ 
        point(points[0], points[1]);
      } else {
        beginShape();
        vertex(points[0], points[1]);
        // ellipse(...this.getPoints(),mouseY,mouseY); // testing circles
        if (this.i + lineCount + 1 <= particles.length){ //maybe working
        for (var j = 0; j < lineCount + 1; j++) {
          const nextPoints = particles[this.i + j].getPoints();
          vertex(nextPoints[0], nextPoints[1]);
          }
        }
        vertex(points[0], points[1]);
        endShape();
      }

      // data[i] = data[i] + speed;
    }
    pop();
  }

  getPoints() {

    //points move out based on framecount, resets when point reaches outer rim
    let calc = ((frameCount + ((this.i) * pointSpacing)) % ((amount) * pointSpacing)) + startP;

    let start = calc / distance;
    let starty = calc / lissaX * twist;
    let startw = calc / lissaY * twist;

    let x = start * calculateTrig(starty, funcx)
    let y = start * calculateTrig(startw, funcy)


    return this.getPolar(x, y)
  }

  calcPolar(x, y) {
    let X = x * Math.cos(radians(y));
    let Y = x * Math.sin(radians(y));
    return [X, Y]
  }

  getPolar(a, b) {
    let ab = [a, b];
    for (var i = 0; i < polar; i++) {
      // ab = this.calcPolar.apply(null, ab)
      ab = this.calcPolar(ab[0], ab[1]);
    }
    return ab
  }
}