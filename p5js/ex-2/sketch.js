let squares = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();

  for (let i = 0; i < 30; i++) {
    squares.push({
      x: random(width),
      y: random(height),
      size: random(40, 100),
      baseColor: color(random(100, 255), random(100, 255), random(255))
    });
  }
}

function draw() {
  
  let bg = map(sin(frameCount * 0.01), -1, 1, 5, 25);
  background(bg);

  for (let s of squares) {
    let alpha = map(sin(frameCount * 0.03 + s.x * 0.1), -1, 1, 80, 255);
    let sizePulse = map(sin(frameCount * 0.05 + s.y * 0.1), -1, 1, -10, 10);
    fill(red(s.baseColor), green(s.baseColor), blue(s.baseColor), alpha);
    rect(s.x, s.y, s.size + sizePulse, s.size + sizePulse, 10);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
