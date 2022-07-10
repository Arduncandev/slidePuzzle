let source;

let pieces = [];
let cols = 4;
let rows = 4;
let w, h;

function preload() {
  source = loadImage("./images/painting.png");
}

function setup() {
  createCanvas(400, 400);

  w = width / cols;
  h = height / rows;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let img = createImg(w, h);
    }
  }
}

function draw() {
  image(source, 0, 0);
}
