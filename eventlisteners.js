
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