
document.getElementById("DistanceV").addEventListener('input', event => {
  distance = event.target.value;
});

document.getElementById("PolarityV").addEventListener('input', event => {
  polar = event.target.value;
});

document.getElementById("TwistV").addEventListener('input', event => {
  twist = event.target.value;
});

document.getElementById("RadiansV").addEventListener('input', event => {
  radi = event.target.value;
});

document.getElementById("ModeV").addEventListener('input', event => {
  mode = event.target.value;
});

document.getElementById("AmountV").addEventListener('input', event => {
  amount = event.target.value;
});

document.getElementById("BlendModeV").addEventListener('input', event => {
  blend = int(event.target.value);
});

document.getElementById("TransparencyV").addEventListener('input', event => {
  transSettings = int(event.target.value);
  let menu2 = document.getElementById("TransparencyNV");
  if (transSettings == 0) {
    menu2.value = backTrans;
  } else if (transSettings == 1) {
    menu2.value = lineTrans;
  } else {
    menu2.value = fillTrans;
  }
});

document.getElementById("TransparencyNV").addEventListener('input', event => {
  if (transSettings == 0) {
    backTrans = int(event.target.value);
  } else if (transSettings == 1) {
    lineTrans = int(event.target.value);
  } else {
    fillTrans = int(event.target.value);
  }
});

document.getElementById("MultiplierV").addEventListener('input', event => {
  multiX = int(event.target.value);
  if (multiX == 0) {
    multiplierX = 1;
  } else if (multiX == 1) {
    multiplierX = 1000 * PI;
  }
});


document.getElementById("lissaYV").addEventListener('input', event => {
  initialY = int(event.target.value);
});


document.getElementById("LinesV").addEventListener('input', event => {
  lineSettings = int(event.target.value);
  let menu3 = document.getElementById("LinesNV");
  if (lineSettings == 0) {
    menu3.value = lineCount;
  } else {
    menu3.value = pointSpacing;
  }
});

document.getElementById("LinesNV").addEventListener('input', event => {
  if (lineSettings == 0) {
    lineCount = int(event.target.value);
  } else {
    pointSpacing = int(event.target.value);
  }
});

//"O" spacebar
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    trails = 1;
  }
})

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    trails = 0;
  }
})

document.addEventListener('keyup', event => { //doesnt work right now
  if (event.code === 'S') {
    console.log("fock")
    eyes.screenshot()
  }
})