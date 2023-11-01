let lissaY = 1;
let lissaX = 1;

let multiX = 0;
let multiY = 0;

let initialX = 1;
let initialY = 3;

let multiplierX = 1;
let multiplierY = 1;

let distance = 20; 
let mode = 0; //graph render setting//
let polar = 0; //polarity//
let radi = 0; //graph rotation//
let amount = 490; //density of data present on screen//
let click = 0; //menu position//
let blend = 0; //blendmode setting//
let startP = 0; //starting point for all points//

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

let colour = 1;

let speed = 0.05;

// let t = 200;
let timerCount = 0;
let timerRunning = 0;

let analogStickSign = 1;
let analogStickMap = 1000;
let check = 1;
let analogStickTimer;
let analogsticky;

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

  let eyes = new keyboard();