let squares = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();


  for (let i = 0; i < 40; i++) { 
    squares.push({
      x: random(width),
      y: random(height),
      size: random(30, 80),
      baseColor: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background(10);

  for (let s of squares) {
    let alpha = map(sin(frameCount * 0.1 + s.x * 0.1), -1, 1, 50, 255);
    fill(red(s.baseColor), green(s.baseColor), blue(s.baseColor), alpha);
    rect(s.x, s.y, s.size, s.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);


  squares = [];
  for (let i = 0; i < 40; i++) {
    squares.push({
      x: random(width),
      y: random(height),
      size: random(30, 80),
      baseColor: color(random(255), random(255), random(255))
    });
  }
}






