
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


function timeIt() {
    if (Math.abs(analogStickMap) > Math.abs(analogsticky)) {
        if (Math.sign(analogStickMap) == 1) {
            eyes.buttonUpdate(-1);
        } else if (Math.sign(analogStickMap) == -1) {
            eyes.buttonUpdate(1);
        }
    } else if (Math.abs(analogStickMap) < Math.abs(analogsticky)) {
        if (analogsticky == 1) {
            if (click == 11) {
                click = 0;
            } else {
                click++;
            }
            eyes.mybutton(click);
        } else if (analogsticky == -1) {
            if (click == 0) {
                click = 11;
            } else {
                click--;
            }
            eyes.mybutton(click);
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


window.addEventListener(
    "gc.button.press",
    function (event) {
        if (event.detail.name == "RIGHT_SHOULDER") {
            eyes.reset();
        } else if (event.detail.name == "LEFT_SHOULDER") {
            eyes.resetPi();
        }

        if (event.detail.name == "FACE_4") {
            eyes.o();
        }

        if (event.detail.name == "FACE_3") {
            eyes.setting();
        }

        if (event.detail.name == "FACE_2") {

        }
        if (event.detail.name == "FACE_1") {
            eyes.screenshot();
        }

        if (event.detail.name == "DPAD_UP") {
            eyes.buttonUpdate(1);
        } else if (event.detail.name == "DPAD_DOWN") {
            eyes.buttonUpdate(-1);
        } else if (event.detail.name == "DPAD_RIGHT") {
            if (click == 11) {
                click = 0;
            } else {
                click++;
            }
            // buttonUpdate(0);
            eyes.mybutton(click);
        } else if (event.detail.name == "DPAD_LEFT") {
            if (click == 0) {
                click = 11;
            } else {
                click--;
            }
            // buttonUpdate(0);
            eyes.mybutton(click);
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