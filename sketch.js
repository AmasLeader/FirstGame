/* jshint esversion:6 */
let bird;
let ground;
let rock;

function setup() {
    // put setup code here
    createCanvas(window.innerWidth - 10, window.innerHeight - 10);
    bird = new Bird(32, width/2, height/2);
    ground = new Ground(250);
    rock = new Rock(height/2);
}

function draw() {
    // put drawing code here
    console.log(keyCode);
    background(0,255,255);
    bird.show();
    bird.move(ground);
    ground.show();
    ground.progress();
    rock.show();
}