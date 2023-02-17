
Controller.search();

window.addEventListener(
    "gc.controller.found",
    function (event) {
        var controller = event.detail.controller;
        console.log("Controller found at index " + controller.index + ".");
        console.log("'" + controller.name + "' is ready!");
    },
    false
);

window.addEventListener(
    "gc.controller.lost",
    function (event) {
        console.log(
            "The controller at index " +
            event.detail.index +
            " has been disconnected."
        );
        console.log(Controller.getController(0));
    },
    false
);


// window.addEventListener(
//   "gc.button.press",
//   function (event) {
//     var button = event.detail;
//     console.log(button);
//   },
//   false
// );

// window.addEventListener(
//   "gc.analog.start",
//   function (event) {
//     var stick = event.detail;
//     console.log(stick);
//   },
//   false
// );


function timeIt() {
    if (Math.abs(analogStickMap) > Math.abs(analogsticky)) {
        if (Math.sign(analogStickMap) == 1) {
            buttonUpdate(-1);
        } else if (Math.sign(analogStickMap) == -1) {
            buttonUpdate(1);
        }
    } else if (Math.abs(analogStickMap) < Math.abs(analogsticky)) {
        if (analogsticky == 1) {
            if (click == 11) {
                click = 0;
            } else {
                click++;
            }
            mybutton(click);
        } else if (analogsticky == -1) {
            if (click == 0) {
                click = 10;
            } else {
                click--;
            }
            mybutton(click);
        }
    }

    clearInterval(analogStickTimer);
    analogStickTimer = setInterval(
        timeIt,
        map(Math.abs(analogStickMap), 0, 1, 500, 0)
    );
}

window.addEventListener(
    "gc.analog.start",
    function (event) {
        if (event.detail.name == "RIGHT_ANALOG_STICK") {
            analogStickTimer = setInterval(
                timeIt,
                map(Math.abs(analogStickMap), 0, 1, 500, 0)
            );
            timerRunning = 1;
        }
    },
    false
);

window.addEventListener(
    "gc.analog.hold",
    function (event) {
        if (event.detail.name == "RIGHT_ANALOG_STICK") {
            // changeTimer();
            // analogStickSign = Math.sign(event.detail.position.y);
            analogStickMap = event.detail.position.y;
            analogsticky = event.detail.position.x;
        }
    },
    false
);

window.addEventListener(
    "gc.analog.end",
    function (event) {
        if (event.detail.name == "RIGHT_ANALOG_STICK") {
            timerRunning = 0;
            clearInterval(analogStickTimer);
        }
    },
    false
);



function buttonUpdate(ha) {
    m = ha;
    let menu1 = document.getElementById("Distance");
    let menu2 = document.getElementById("Transparency");
    let menu3 = document.getElementById("Radians");
    let menu4 = document.getElementById("Lines");
    let menu5 = document.getElementById("Polarity");
    let menu6 = document.getElementById("Mode");
    let menu7 = document.getElementById("Amount");
    let menu8 = document.getElementById("Twist");
    let menu9 = document.getElementById("BlendMode");
    let menu10 = document.getElementById("Colour");
    let menu11 = document.getElementById("Beans");

    if (click == 0) {
        distance = distance + m;
        menu1.innerText = "Distance: " + nf(distance, 0, 0);
    } else if (click == 1) {
        if (transSettings == 0 && backTrans + m >= 0 && backTrans + m <= 255) {
            backTrans = backTrans + m;
            menu2.innerText =
                "Setting: BACK" + "\nTransparency: " + nf(backTrans, 0, 0) + "/255";
        } else if (
            transSettings == 1 &&
            lineTrans + m >= 0 &&
            lineTrans + m <= 255
        ) {
            lineTrans = lineTrans + m;
            menu2.innerText =
                "Setting: LINE" + "\nTransparency: " + nf(lineTrans, 0, 0) + "/255";
        } else if (
            transSettings == 2 &&
            fillTrans + m >= 0 &&
            fillTrans + m <= 255
        ) {
            fillTrans = fillTrans + m;
            menu2.innerText =
                "Setting: FILL" + "\nTransparency: " + nf(fillTrans, 0, 0) + "/255";
        }
    } else if (click == 2 && radi + m >= 0 && radi + m <= 360) {
        radi = radi + m;
        menu3.innerText = "Radians: " + nf(radi, 0, 0) + "/360";
    } else if (click == 5 && pointSpacing + m >= 1 && pointSpacing + m <= 10) {
        if (lineSettings == 1) {
            menu4.innerText = "Lines: OFF";
        } else if (lineSettings == 0) {
            pointSpacing = pointSpacing + m;
            menu4.innerText =
                "Lines: LINES" + "\nLine Spacing: " + nf(pointSpacing - 1, 0, 0) + "/9";
        } else {
            pointSpacing = pointSpacing + m;
            menu4.innerText =
                "Lines: TRIANGLES" +
                "\nLine Spacing: " +
                nf(pointSpacing - 1, 0, 0) +
                "/9";
        }
    } else if (click == 3 && polar + m >= 0 && polar + m <= 3) {
        polar = polar + m;
        menu5.innerText = "Polarity: " + nf(polar, 0, 0) + "/3";
    } else if (click == 4 && mode + m >= 1 && mode + m <= 8) {
        mode = mode + m;
        menu6.innerText = "Mode: " + nf(mode - 1, 0, 0) + "/7";
    } else if (click == 6 && amount + m >= 0 && amount + m <= 500) {
        amount = amount + m;
        menu7.innerText = "Amount: " + nf(amount, 0, 0) + "/500";
    } else if (click == 7) {
        twist = twist + m;
        menu8.innerText = "Twist: " + nf(twist, 0, 0);
    } else if (click == 8) {
        if (blend == 0) {
            bmode = BLEND;
        } else if (blend == 1) {
            bmode = SCREEN;
        } else if (blend == 2) {
            bmode = ADD;
        } else if (blend == 3) {
            bmode = DIFFERENCE;
        } else if (blend == 4) {
            bmode = EXCLUSION;
        } else if (blend == 5) {
            bmode = LIGHTEST;
        } else if (blend == 6) {
            bmode = OVERLAY;
        } else if (blend == 7) {
            bmode = HARD_LIGHT;
        } else if (blend == 8) {
            bmode = SOFT_LIGHT;
        } else if (blend == 9) {
            bmode = DODGE;
        }
        menu9.innerText = "BlendMode: " + blenders[blend];
    } else if (click == 9 && colour + m >= 0 && colour + m <= 5) {
        colour = colour + m;
        menu10.innerText = "Colour: " + nf(colour, 0, 0);
    } else if (click == 10) {
        //HEREEEEEEE
        whaaa = whaaa + m;
        if (yeet == 1000 * PI) {
            menu11.innerText = "Beans: PI" + "\nwhaaa: " + nf(whaaa, 0, 0);
        } else if (yeet == 1) {
            menu11.innerText = "Beans: Normal" + "\nwhaaa: " + nf(whaaa, 0, 0);
        }
    }
}



function reset(types) {
    let clickSave = click;
    if (types == 0) {
        distance = 20;
        transSettings = 0;
        backTrans = 20;
        lineTrans = 255;
        fillTrans = 50;
        radi = 0;
        polar = 0;
        mode = 1;
        amount = 10;
        pointSpacing = 10;
        // lineSettings = 1;
        // trails = 0;
        twist = 180;
        blend = 0;
        // mybutton(0);
        for (let i = 0; i < 9; i++) {
            click = i;
            buttonUpdate(0);
        }
    } else if (types == 1) {
        mybutton(0);
        distance = 100;
        transSettings = 0;
        backTrans = 20;
        lineTrans = 255;
        fillTrans = 50;
        radi = 3;
        polar = 1;
        mode = 6;
        amount = 1;
        pointSpacing = 10;
        // lineSettings = 1;
        // trails = 0;
        twist = 1;
        blend = 1;
        // mybutton(0);
        for (let i = 0; i < 10; i++) {
            click = i;
            buttonUpdate(0);
        }
    }
    click = clickSave;
    buttonUpdate(0);
    mybutton(click);
}



window.addEventListener(
    "gc.button.press",
    function (event) {
        if (event.detail.name == "RIGHT_SHOULDER") {
            reset(0);
        } else if (event.detail.name == "LEFT_SHOULDER") {
            reset(1);
        }

        if (event.detail.name == "FACE_4") {
            trails = 1;
        }

        if (event.detail.name == "FACE_3") {
            if (click == 1) {
                if (transSettings == 2) {
                    transSettings = 0;
                } else {
                    transSettings++;
                }
            } else if (click == 5) {
                if (lineSettings == 2) {
                    lineSettings = 0;
                } else {
                    lineSettings++;
                }
            } else if (click == 8) {
                if (blend == 9) {
                    blend = 0;
                } else {
                    blend++;
                }
            } else if (click == 10) {
                if (yeet == 1000 * PI) {
                    yeet = 1;
                } else if (yeet == 1) {
                    yeet = 1000 * PI;
                }
            }
            buttonUpdate(0);
        }

        if (event.detail.name == "FACE_2") {

        }
        if (event.detail.name == "FACE_1") {
            save(
                "WILTC5G-" +
                distance +
                "-" +
                radi +
                "-" +
                polar +
                "-" +
                amount +
                "-" +
                twist +
                ".png"
            );
        }

        if (event.detail.name == "DPAD_UP") {
            buttonUpdate(1);
        } else if (event.detail.name == "DPAD_DOWN") {
            buttonUpdate(-1);
        } else if (event.detail.name == "DPAD_RIGHT") {
            if (click == 10) {
                click = 0;
            } else {
                click++;
            }
            // buttonUpdate(0);
            mybutton(click);
        } else if (event.detail.name == "DPAD_LEFT") {
            if (click == 0) {
                click = 10;
            } else {
                click--;
            }
            // buttonUpdate(0);
            mybutton(click);
        }
        bpress = 1;
        console.log(bpress);
    },
    false
);

window.addEventListener(    //resets when buttons are released
    "gc.button.release",
    function (event) {
        if (event.detail.name == "FACE_4") {    //switches background drawing back on when button is released
            trails = 0;
        }
        bpress = 0;
        console.log(bpress);
    },
    false
);

function mybutton(boop) {   //changes click when mouse presses buttons
    click = boop;
    document.getElementById(elements[boop]).style.color = "#FFFFFF";
    for (let i = 0; i < elements.length; i++) {
        if (i != boop) {
            document.getElementById(elements[i]).style.color = "#8B8B8B";
        }
    }
}

//when d-pad button is held (we dont need this rn)
// window.addEventListener( 
//     "gc.button.hold",
//     function (event) {
//         if (event.detail.name == "DPAD_UP") {
//         } else if (event.detail.name == "DPAD_DOWN") {
//         }
//     },
//     false
// );