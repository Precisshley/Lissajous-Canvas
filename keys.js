class keyboard {
    constructor() {}
    screenshot() {
        save(
            "WILTC5G-${distance}-${radi}-${polar}-${amount}-${twist}.png"
        );
    }
    o() {
        trails = 1;
    }
    setting() {
        if (click == 1) {
            transSettings = (transSettings === 2) ? 0 : transSettings + 1; // if == 2, set to 0, else ++
            if (transSettings == 0) {
                document.getElementById("TransparencyNV").value = backTrans;
            } else if (transSettings == 1) {
                document.getElementById("TransparencyNV").value = lineTrans;
            } else {
                document.getElementById("TransparencyNV").value = fillTrans;
            }
            document.getElementById("TransparencyV").value = str(transSettings);
        } else if (click == 6) {
            lineSettings = (lineSettings === 1) ? 0 : lineSettings + 1; // if == 1, set to 0, else ++
            if (lineSettings == 0) {
                document.getElementById("LinesNV").value = lineCount;
            } else if (lineSettings == 1) {
                document.getElementById("LinesNV").value = pointSpacing;
            }
            document.getElementById("LinesV").value = str(lineSettings);
        } else if (click == 4) {
            trigxNum = (trigxNum === 11) ? 0 : trigxNum + 1;
            funcx = trigArray[trigxNum];
            document.getElementById("xtrigV").value = str(trigxNum);
        }else if (click == 5) {
            trigyNum = (trigyNum === 11) ? 0 : trigyNum + 1;
            funcy = trigArray[trigyNum];
            document.getElementById("ytrigV").value = str(trigyNum);
        } else if (click == 9) {
            blend = (blend === 9) ? 0 : blend + 1;
        } else if (click == 11) {
            if (multiX == 0) {
                multiX = 1
                multiplierX = 1;
            } else if (multiX == 1) {
                multiX = 0
                multiplierX = 1000 * PI;
            }
            document.getElementById("MultiplierV").value = str(multiX);
        }
        this.buttonUpdate(0);
    }
    // increase() {}
    // decrease() {}
    // left() {}
    // right() {}
    reset() {
        let clickSave = click;
        distance = 20;
        transSettings = 0;
        backTrans = 20;
        lineTrans = 255;
        fillTrans = 50;
        radi = 0;
        polar = 0;
        amount = 490;
        pointSpacing = 10;
        // lineCount = 1;
        // trails = 0;
        twist = 180;
        blend = 0;
        trigxNum = 0;
        trigyNum = 0;
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
        amount = 500;
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
    
        if (click == 0) {
            distance = int(distance) + m;
            document.getElementById("DistanceV").value = distance;
        } else if (click == 1) {
            if (transSettings == 0 && backTrans + m >= 0 && backTrans + m <= 255) {
                backTrans = int(backTrans) + m;
                document.getElementById("TransparencyNV").value = backTrans;
            } else if (transSettings == 1 && lineTrans + m >= 0 && lineTrans + m <= 255) {
                lineTrans = int(lineTrans) + m;
                document.getElementById("TransparencyNV").value = lineTrans;
            } else if (transSettings == 2 && fillTrans + m >= 0 && fillTrans + m <= 255) {
                fillTrans = int(fillTrans) + m;
                document.getElementById("TransparencyNV").value = fillTrans;
            }
        } else if (click == 2 && radi + m >= 0 && radi + m <= 360) {
            radi = int(radi) + m;
            document.getElementById("RadiansV").value = radi;
        } else if (click == 6) {
            if (lineSettings == 0 && lineCount + m >= 0 && lineCount + m <= 500) {
                lineCount = int(lineCount) + m;
                document.getElementById("LinesNV").value = lineCount;
            } else if (lineSettings == 1 && pointSpacing + m >= 0 && pointSpacing + m <= 500) {
                pointSpacing = int(pointSpacing) + m;
                document.getElementById("LinesNV").value = pointSpacing;
            }
        } else if (click == 3 && polar + m >= 0) {
            polar = int(polar) + m;
            document.getElementById("PolarityV").value = polar;
        } else if (click == 4) {
            initialX = int(initialX) + m;
            document.getElementById("xNV").value = initialX;
        }else if (click == 5) {
            initialY = int(initialY) + m;
            document.getElementById("yNV").value = initialY;
        } else if (click == 7 && amount + m >= 0 && amount + m <= 500) {
            amount = int(amount) + m;
            document.getElementById("AmountV").value = amount;
        } else if (click == 8) {
            twist = int(twist) + m;
            document.getElementById("TwistV").value = twist;
        } else if (click == 9) {
            blend = int(blend) + m;
            document.getElementById("BlendModeV").value = str(blend);
        } else if (click == 10 && colour + m >= 0 && colour + m <= 5) {
            colour = colour + m;
            document.getElementById("Colour").innerText = "Colour: " + nf(colour, 0, 0);
        }
    }

    mybutton(boop) {   //changes click when mouse presses buttons
        click = boop;
        document.getElementById(elements[boop]).style.color = "#FFFFFF";
        elements.forEach((element, i) => {
            if (i != boop) {
              document.getElementById(element).style.color = "#8B8B8B";
            }
        });
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
