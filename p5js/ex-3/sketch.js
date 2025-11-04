let squares = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();

  for (let i = 0; i < 60; i++) {
    squares.push({
      x: random(width),
      y: random(height),
      size: random(20, 70),
      baseColor: color(random(200, 255), random(150, 255), random(255))
    });
  }
}

function draw() {

  background(0, 20);

  for (let s of squares) {

    let flicker = noise(frameCount * 0.05 + s.x * 0.1, s.y * 0.1);
    let alpha = map(flicker, 0, 1, 50, 255);
    fill(red(s.baseColor), green(s.baseColor), blue(s.baseColor), alpha);

    push();
    translate(s.x, s.y);
    rotate(sin(frameCount * 0.02 + s.x * 0.1) * 0.2); 
    rect(0, 0, s.size, s.size);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
