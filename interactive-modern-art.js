const ONE = readInt("100 or 200? ");
const TWO = readInt("Pick a number between 0 and 200? ");
const THREE = readLine("Red or blue? ");
function main() {
    circle();
    rectangle();
    line();
}

function rectangle() {
    let rect = new Rectangle(ONE, 100);
    rect.setPosition(0, ONE);
    rect.setColor("green");
    add(rect);
}

function circle() {
    let circ = new Circle(TWO);
    circ.setPosition(200, 200);
    circ.setColor("white");
    add(circ);
}

function line() {
    let ln = new Line(0, 100, 400, 100);
    ln.setColor(THREE);
    add(ln);
}
