
const value1 = document.getElementById("DistanceV");
value1.addEventListener('input', updateValue1);
function updateValue1(e) {
  distance = e.target.value;
}

const value2 = document.getElementById("PolarityV");
value2.addEventListener('input', updateValue2);
function updateValue2(e) {
  polar = e.target.value;
}

const value3 = document.getElementById("TwistV");
value3.addEventListener('input', updateValue3);
function updateValue3(e) {
  twist = e.target.value;
}

const value4 = document.getElementById("RadiansV");
value4.addEventListener('input', updateValue4);
function updateValue4(e) {
  radi = e.target.value;
}

const value5 = document.getElementById("ModeV");
value5.addEventListener('input', updateValue5);
function updateValue5(e) {
  mode = e.target.value;
}

const value6 = document.getElementById("AmountV");
value6.addEventListener('input', updateValue6);
function updateValue6(e) {
  amount = e.target.value;
}

const value7 = document.getElementById("BlendModeV");
value7.addEventListener('input', updateValue7);
function updateValue7(e) {
  blend = int(e.target.value);
}

const value8 = document.getElementById("TransparencyV");
value8.addEventListener('input', updateValue8);
function updateValue8(e) {
  transSettings = int(e.target.value);
  let menu2 = document.getElementById("TransparencyNV");
  if (transSettings == 0) {
      menu2.value = backTrans;
  } else if (transSettings == 1) {
      menu2.value = lineTrans;
  } else {
      menu2.value = fillTrans;
  }
}

const value9 = document.getElementById("TransparencyNV");
value9.addEventListener('input', updateValue9);
function updateValue9(e) {
  if (transSettings == 0) {
    backTrans = int(e.target.value);
  } else if (transSettings == 1) {
    lineTrans = int(e.target.value);
  } else {
    fillTrans = int(e.target.value);
  }
}

const value10 = document.getElementById("MultiplierV");
value10.addEventListener('input', updateValue10);
function updateValue10(e) {
  multiX = int(e.target.value);
  if (multiX == 0) {
    multiplierX = 1;
  } else if (multiX == 1) {
    multiplierX = 1000 * PI;
  }
}

const value11 = document.getElementById("lissaYV");
value11.addEventListener('input', updateValue11);
function updateValue11(e) {
  initialY = int(e.target.value);
}

const value12 = document.getElementById("LinesV");
value12.addEventListener('input', updateValue12);
function updateValue12(e) {
  lineSettings = int(e.target.value);
  let menu3 = document.getElementById("LinesNV");
  if (lineSettings == 0) {
      menu3.value = lineCount;
  } else {
      menu3.value = pointSpacing;
  }
}

const value13 = document.getElementById("LinesNV");
value13.addEventListener('input', updateValue13);
function updateValue13(e) {
  if (lineSettings == 0) {
    lineCount = int(e.target.value);
  } else {
    pointSpacing = int(e.target.value);
  }
}

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

document.addEventListener('keyup', event => {
  if (event.code === 'S') {
    console.log("fock")
    eyes.screenshot()
  }
})