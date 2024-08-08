let lissaY = 1;
let lissaX = 1;

let multiX = 0;
let multiY = 0;

let initialX = 1;
let initialY = 3;

let multiplierX = 1;
let multiplierY = 1;

let distance = 20; 
let polar = 0; //polarity//
let radi = 0; //graph rotation//
let amount = 490; //density of data present on screen//
let click = 0; //menu position//
let blend = 0; //blendmode setting//
let startP = 0; //starting point for all points//
let trigxNum = 0;
let trigyNum = 0;

//transparency settings//
let transSettings = 0;
let backTrans = 20;
let lineTrans = 255;
let fillTrans = 50;

//point, line, triangle settings//
let lineSettings = 0;
let lineCount = 0;
let pointSpacing = 10;

let bpress = 0; //prints to console if button is pressed or not//

let trails = 0; //whether "o" (Y on controller) is pressed or not//
let twist = 180; //the direction/speed the graph is generated//

let colour = 3;

let speed = 0.05;

// let t = 200;
let timerCount = 0;
let timerRunning = 0;

let analogStickSign = 1;
let analogStickMap = 1000;
let check = 1;
let analogStickTimer;
let analogsticky;

let funcx = 'sin'; // Change this variable to switch between sin, cos, or other functions
let funcy = 'sin';
  
  let elements = [
    "Distance",
    "Transparency",
    "Radians",
    "Polarity",
    "xtrig",
    "ytrig",
    "Lines",
    "Amount",
    "Twist",
    "BlendMode",
    "Colour",
    "BeansX",
    "BeansY"
  ];

  let eyes = new keyboard();

  const trigFunctions = {
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    asin: Math.asin,
    acos: Math.acos,
    atan: Math.atan,
    reciprocalSin: (value) => 1 / Math.sin(value),
    reciprocalCos: (value) => 1 / Math.cos(value),
    reciprocalTan: (value) => 1 / Math.tan(value),
    reciprocalASin: (value) => 1 / Math.asin(value),
    reciprocalACos: (value) => 1 / Math.acos(value),
    reciprocalATan: (value) => 1 / Math.atan(value)
  };
  let trigArray = [
    "sin",
    "cos",
    "tan",
    "asin",
    "acos",
    "atan",
    "reciprocalSin",
    "reciprocalCos",
    "reciprocalTan",
    "reciprocalASin",
    "reciprocalACos",
    "reciprocalATan"
  ];

  function calculateTrig(value, funcName) {
    // Check if the function exists in the mapping
    if (trigFunctions[funcName]) {
      // Call the function using bracket notation
      return trigFunctions[funcName](value);
    }
    return 0;
  }

  function mybutton(boop) {   //changes click when mouse presses buttons
    click = boop;
    document.getElementById(elements[boop]).style.color = "#FFFFFF";
    elements.forEach((element, i) => {
      if (i != boop) {
        document.getElementById(element).style.color = "#8B8B8B";
      }
    });
}

  const blendModes = [
    () => blendMode(BLEND),
    () => blendMode(SCREEN),
    () => blendMode(ADD),
    () => blendMode(DIFFERENCE),
    () => blendMode(EXCLUSION),
    () => blendMode(LIGHTEST),
    () => blendMode(OVERLAY),
    () => blendMode(HARD_LIGHT),
    () => blendMode(SOFT_LIGHT),
    () => blendMode(DODGE)
  ];

  function setBlendModeByIndex(index) {
    const selectedBlendMode = blendModes[index];
    if (selectedBlendMode) {
      selectedBlendMode();
    } else {
      console.error("Invalid blend mode index");
    }
  }

  let backgroundColor = '#000000';

  let outlineColor1 = '#FFFF00';

  let outlineColor2 = '#000000';

