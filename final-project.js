// make a calculator

const BASE_A = (getWidth()/10);
const BASE_B = (getHeight()/10);

function main(){
	makeCalculator();
	makeProgram();
}

function makeCalculator() {
    base();
    screen();
    button(BASE_A*1.5,BASE_B*4.5);
    button(BASE_A*4,BASE_B*4.5);
    button(BASE_A*6.5,BASE_B*4.5);
    button(BASE_A*1.5,BASE_B*6);
    button(BASE_A*4,BASE_B*6);
    button(BASE_A*6.5,BASE_B*6);
    button(BASE_A*1.5,BASE_B*7.5);
    button(BASE_A*4,BASE_B*7.5);
    button(BASE_A*6.5,BASE_B*7.5);
}

function makeProgram() {
    let math = readInt("1 for multiplication, 2 for division, 3 for addition, 4 for subtraction. Which operation would you like to use? ");
    if (math == 1) {
        let m1 = readInt("First number to multiply: ");
        let m2 = readInt("Second number to multiply: ");
        let ma = m1 * m2;
        answer(" * ", m1, m2, ma);
    } else if (math == 2) {
        let d1 = readInt("First number to divide: ");
        let d2 = readInt("Second number to divide: ");
        let da = d1 * d2;
        answer(" / ", d1, d2, da);
    } else if (math == 3) {
        let a1 = readInt("First number to add: ");
        let a2 = readInt("Second number to add: ");
        let aa = a1 * a2;
        answer(" + ", a1, a2, aa);
    } else if (math == 4) {
        let s1 = readInt("First number to subtract: ");
        let s2 = readInt("Second number to subtract: ");
        let sa = s1 * s2;
        answer(" - ", s1, s2, sa);
    } else {
        console.log("Error");
    }
}

function answer(op = " * ", one = 1, two = 1, ans = 1) {
    let text = new Text(one + op + two + " = " + ans, "30pt Roboto");
    text.setPosition(BASE_A*1.5, BASE_B*3);
    text.setColor("black");
    add(text);
}

function base() {
    let pos = 0;
    for (let i=0;i<10;i++) {
        let background = new Rectangle(getWidth(), BASE_B);
        background.setPosition(0,pos);
        if (i%2==0) {
            background.setColor("#D7AA79");
        } else if (i%2 == 1) {
            background.setColor("#D2A16E");
        }
        add(background);
        pos += BASE_B;
    }
    
    let base = new Rectangle(BASE_A*8, BASE_B*8);
    base.setPosition(BASE_A,BASE_B);
    base.setColor("#F2F4FD");
    add(base);
}

function screen() {
    let screen = new Rectangle(BASE_A*7, BASE_B*2.5);
    screen.setPosition(BASE_A*1.5,BASE_B*1.5);
    screen.setColor("#C5C4C4");
    add(screen);
    
    let line = new Line(BASE_A*1.5, BASE_B*1.5, BASE_A*8.5,BASE_B*1.5);
    line.setColor("black");
    line.setLineWidth(5);
    add(line);
    
    let circle = new Circle(7.5);
    circle.setColor("gray");
    circle.setPosition(BASE_A*5, BASE_B*1.25);
    add(circle);
}

function button(x, y) {
    let screen = new Rectangle(BASE_A*2, BASE_B);
    screen.setPosition(x, y);
    screen.setColor("#676767");
    add(screen);
}

main();
