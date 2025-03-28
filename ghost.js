// Const variables for main ghost body
const HEAD_RADIUS = 70;
const BODY_WIDTH = HEAD_RADIUS * 2;
const BODY_HEIGHT = 120;
const NUM_FEET = 3;
const FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2);
const BODY_COLOR = "red";

// Const variables for eyes
const PUPIL_RADIUS = 8;
const PUPIL_LEFT_OFFSET = 16;
const PUPIL_RIGHT_OFFSET = 40;
const EYE_RADIUS = 20;
const EYE_OFFSET = 28;
const EYE_COLOR = "white";
const PUPIL_COLOR = "blue";

/* This program draws a ghost on the canvas. */
function main() {
    body();
    t1();
    t2();
    t3();
    e1();
    e2();
    p1();
    p2();
}

function body() {
    let circ = new Circle(FOOT_RADIUS);
    circ.setPosition((BODY_RADIUS), (getHeight() / 2));
    circ.setColor(BODY_COLOR);
    add(circ);
}

function t1() {
    let circ = new Circle(HEAD_RADIUS);
    circ.setPosition((getWidth() / 2), (getHeight() / 2));
    circ.setColor(BODY_COLOR);
    add(circ);
}

main();
