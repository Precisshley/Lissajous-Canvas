class keyboard {
    constructor() {}
    screenshot() {
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
    o() {
        trails = 1;
    }
    setting() {
        if (click == 1) {
            if (transSettings == 2) {
                transSettings = 0;
            } else {
                transSettings++;
            }
            let menu2 = document.getElementById("TransparencyNV");
            if (transSettings == 0) {
                menu2.value = backTrans;
            } else if (transSettings == 1) {
                menu2.value = lineTrans;
            } else {
                menu2.value = fillTrans;
            }
            let menu12 = document.getElementById("TransparencyV");
            menu12.value = str(transSettings);
        } else if (click == 5) {
            if (lineSettings == 1) {
                lineSettings = 0;
            } else {
                lineSettings++;
            }
            let menu3 = document.getElementById("LinesNV");
            if (lineSettings == 0) {
                menu3.value = lineCount;
            } else if (lineSettings == 1) {
                menu3.value = pointSpacing;
            }
            let menu12 = document.getElementById("LinesV");
            menu12.value = str(lineSettings);
        } else if (click == 8) {
            if (blend == 9) {
                blend = 0;
            } else {
                blend++;
            }
        } else if (click == 10) {
            if (multiX == 0) {
                multiX = 1
                multiplierX = 1;
            } else if (multiX == 1) {
                multiX = 0
                multiplierX = 1000 * PI;
            }
            let menu13 = document.getElementById("MultiplierV");
            menu13.value = str(multiX);
        }
        this.buttonUpdate(0);
    }
    increase() {}
    decrease() {}
    left() {}
    right() {}
    reset() {
        let clickSave = click;
        distance = 20;
        transSettings = 0;
        backTrans = 20;
        lineTrans = 255;
        fillTrans = 50;
        radi = 0;
        polar = 0;
        mode = 0;
        amount = 10;
        pointSpacing = 10;
        // lineCount = 1;
        // trails = 0;
        twist = 180;
        blend = 0;
        // mybutton(0);
        for (let i = 0; i < 9; i++) {
            click = i;
            this.buttonUpdate(0);
        }
        click = clickSave;
        this.buttonUpdate(0);
        this.mybutton(click);
    }
    resetPi() {
        let clickSave = click;
        this.mybutton(0);
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
        // lineCount = 1;
        // trails = 0;
        twist = 1;
        blend = 1;
        // mybutton(0);
        for (let i = 0; i < 10; i++) {
            click = i;
            this.buttonUpdate(0);
        }
        click = clickSave;
        this.buttonUpdate(0);
        this.mybutton(click);
    }
    buttonUpdate(ha) {
        //move to initialValues
        let m = ha;
        let menu1 = document.getElementById("DistanceV");
        let menu2 = document.getElementById("TransparencyNV");
        let menu3 = document.getElementById("RadiansV");
        let menu4 = document.getElementById("LinesNV");
        let menu5 = document.getElementById("PolarityV");
        let menu6 = document.getElementById("ModeV");
        let menu7 = document.getElementById("AmountV");
        let menu8 = document.getElementById("TwistV");
        let menu9 = document.getElementById("BlendModeV");
        let menu10 = document.getElementById("Colour");
        let menu11 = document.getElementById("lissaYV");
    
        if (click == 0) {
            distance = int(distance) + m;
            menu1.value = distance;
        } else if (click == 1) {
            if (transSettings == 0 && backTrans + m >= 0 && backTrans + m <= 255) {
                backTrans = int(backTrans) + m;
                menu2.value = backTrans;
            } else if (transSettings == 1 && lineTrans + m >= 0 && lineTrans + m <= 255) {
                lineTrans = int(lineTrans) + m;
                menu2.value = lineTrans;
            } else if (transSettings == 2 && fillTrans + m >= 0 && fillTrans + m <= 255) {
                fillTrans = int(fillTrans) + m;
                menu2.value = fillTrans;
            }
        } else if (click == 2 && radi + m >= 0 && radi + m <= 360) {
            radi = int(radi) + m;
            menu3.value = radi;
        } else if (click == 5) {
            if (lineSettings == 0 && lineCount + m >= 0 && lineCount + m <= 500) {
                lineCount = int(lineCount) + m;
                menu4.value = lineCount;
            } else if (lineSettings == 1 && pointSpacing + m >= 0 && pointSpacing + m <= 500) {
                pointSpacing = int(pointSpacing) + m;
                menu4.value = pointSpacing;
            }
        } else if (click == 3 && polar + m >= 0) {
            polar = int(polar) + m;
            menu5.value = polar;
        } else if (click == 4 && mode + m >= 0 && mode + m <= 7) {
            mode = int(mode) + m;
            menu6.value = mode;
        } else if (click == 6 && amount + m >= 0 && amount + m <= 500) {
            amount = int(amount) + m;
            menu7.value = amount;
        } else if (click == 7) {
            twist = int(twist) + m;
            menu8.value = twist;
        } else if (click == 8) {
            blend = int(blend) + m;
            menu9.value = str(blend);
        } else if (click == 9 && colour + m >= 0 && colour + m <= 5) {
            colour = colour + m;
            menu10.innerText = "Colour: " + nf(colour, 0, 0);
        } else if (click == 10) {
            initialY = int(initialY) + m;
            menu11.value = initialY;
            // if (lissaX == 1000 * PI) {
            //     menu11.innerText = "Beans: PI" + "\lissaY: " + nf(lissaY, 0, 0);
            // } else if (lissaX == 1) {
            //     menu11.innerText = "Beans: Normal" + "\lissaY: " + nf(lissaY, 0, 0);
            // }
        }
    }

    mybutton(boop) {   //changes click when mouse presses buttons
        click = boop;
        document.getElementById(elements[boop]).style.color = "#FFFFFF";
        for (let i = 0; i < elements.length; i++) {
            if (i != boop) {
                document.getElementById(elements[i]).style.color = "#8B8B8B";
            }
        }
    }
}

function mybutton(boop) {   //changes click when mouse presses buttons
    click = boop;
    document.getElementById(elements[boop]).style.color = "#FFFFFF";
    for (let i = 0; i < elements.length; i++) {
        if (i != boop) {
            document.getElementById(elements[i]).style.color = "#8B8B8B";
        }
    }
}

// document.addEventListener('keydown', (event) => {
//     var name = event.key;
//     var code = event.code;
//     if (name === 'Control') {
//         // Do nothing.
//         return;
//     }
//     if (event.ctrlKey) {
//         alert(`Combination of ctrlKey + ${name} \n Key code Value: ${code}`);
//     } else {
//         alert(`Key pressed ${name} \n Key code Value: ${code}`);
//     }
// }, false);
// // Add event listener on keyup
// document.addEventListener('keyup', (event) => {
//     var name = event.key;
//     if (name === 'Control') {
//         alert('Control key released');
//     }
// }, false);
