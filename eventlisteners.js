// updating distance number value (keyboard)
document.getElementById("DistanceV").addEventListener('input', event => {
  distance = event.target.value;
});

// updating polar number value (keyboard)
document.getElementById("PolarityV").addEventListener('input', event => {
  polar = event.target.value;
});

// updating twist number value (keyboard)
document.getElementById("TwistV").addEventListener('input', event => {
  twist = event.target.value;
});

// updating radi number value (keyboard)
document.getElementById("RadiansV").addEventListener('input', event => {
  radi = event.target.value;
});

// updating xtrig number value (keyboard)
document.getElementById("xtrigV").addEventListener('input', event => {
  funcx = trigArray[int(event.target.value)];
});
document.getElementById("xNV").addEventListener('input', event => {
  initialX = int(event.target.value);
});

// updating ytrig number value (keyboard)
document.getElementById("ytrigV").addEventListener('input', event => {
  funcy = trigArray[int(event.target.value)];
});
document.getElementById("yNV").addEventListener('input', event => {
  initialY = int(event.target.value);
});

// updating amount number value (keyboard)
document.getElementById("AmountV").addEventListener('input', event => {
  amount = event.target.value;
});

// updating blend setting (keyboard)
document.getElementById("BlendModeV").addEventListener('input', event => {
  blend = int(event.target.value);
});

// updating transparency setting. Updates trans values to display(keyboard)
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

// updating back transparency, line transparency, and fill transparency value (keyboard)
document.getElementById("TransparencyNV").addEventListener('input', event => {
  if (transSettings == 0) {
    backTrans = int(event.target.value);
  } else if (transSettings == 1) {
    lineTrans = int(event.target.value);
  } else {
    fillTrans = int(event.target.value);
  }
});

// updating multiplier settings x and y axis' (keyboard)
document.getElementById("MultiplierXV").addEventListener('input', event => {
  multiX = int(event.target.value);
  if (multiX == 0) {
    multiplierX = 1;
  } else if (multiX == 1) {
    multiplierX = 1000 * PI;
  }
});

document.getElementById("MultiplierYV").addEventListener('input', event => {
  multiY = int(event.target.value);
  if (multiY == 0) {
    multiplierY = 1;
  } else if (multiY == 1) {
    multiplierY = 1000 * PI;
  }
});


// updating Y value (keyboard)
// document.getElementById("lissaYV").addEventListener('input', event => {
//   initialY = int(event.target.value);
// });

// updating line settings. Updates line values to display (keyboard)
document.getElementById("LinesV").addEventListener('input', event => {
  lineSettings = int(event.target.value);
  let menu3 = document.getElementById("LinesNV");
  if (lineSettings == 0) {
    menu3.value = lineCount;
  } else {
    menu3.value = pointSpacing;
  }
});

// updating line values (keyboard)
document.getElementById("LinesNV").addEventListener('input', event => {
  if (lineSettings == 0) {
    lineCount = int(event.target.value);
  } else {
    pointSpacing = int(event.target.value);
  }
});

//"O" spacebar
document.addEventListener('keydown', event => {
  if (event.code == 'Space') {
    trails = 1;
  }
})

document.addEventListener('keyup', event => {
  if (event.code == 'Space') {
    trails = 0;
  }
})

document.addEventListener('keyup', event => {
  if (event.code == 'KeyS') {
    eyes.screenshot();
  }
})

document.addEventListener('keyup', event => {
  if (event.code == 'KeyR') {
    eyes.reset();
  }
})

document.getElementById('backgroundColorPicker').addEventListener('input', () => {
  backgroundColor = backgroundColorPicker.value;
});

document.getElementById('outlineColor1Picker').addEventListener('input', () => {
  outlineColor1 = outlineColor1Picker.value;
});

document.getElementById('outlineColor2Picker').addEventListener('input', () => {
  outlineColor2 = outlineColor2Picker.value;
});