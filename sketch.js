var angulo = 0.0;
var contagio;
var timer = 10;


function setup() {
  createCanvas(600, 400);
  estado = 0;
  this.covid = new Covid();
  this.persona = new Persona();
}

function draw() {
  background(0);

  estados();
}

function keyPressed() {
  this.persona.keyPressed();

}

function keyReleased() {
  this.persona.keyReleased();
}

function mouseClicked() {
  if (dist(mouseX, mouseY, width / 2, height / 2 + 30) <= 20 && estado == 0) {

    estado = 1;
  }
  if (estado==3 && dist(mouseX, mouseY, width / 2, height / 2 + 80) <= 20) {
    estado = 1;
  }

}

function estados() {
  if (estado == 0) {
    iniciar = 0;
    textAlign(CENTER);
    fill(255, 255, 0);
    text("¡Huye del COVID-19!", width / 2, height / 2 - 40);
    fill(255);
    text("El círculo rojo marca dos metros de distancia", width / 2, height / 2);
    text("Si lo esquivás durante 10 segundos,ganás. ", width / 2, height / 2 - 20);
    fill(0, 255, 0);
    textSize(15);
    text("INICIAR", width / 2, height / 2 + 30);
  }
  if (estado == 1) {
    iniciar = 1;
    this.covid.dibujar();
    this.persona.draw();
    textAlign(CENTER, CENTER);
    textSize(30);
    text(timer, 25, 30);
    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }
    if (timer == 0) {
      estado = 2;

    }
  }
  if (estado == 2) {
    background(30, 255, 30);
    fill(0);
    text("¡GANASTE!", width / 2, height / 2 - 20);
    text("¡ZAFASTE DEL COVID!", width / 2, height / 2 + 20);



  }

  if (estado == 3) {
    background(255, 255, 0);
    fill(0);
    textSize(30);
    text("¡TE CONTAGIASTE!", width / 2, height / 2 - 20);
    textSize(20);
    text("Te deseamos pronta recuperación", width / 2, height / 2 + 20);
    fill(0);
    rectMode(CENTER);
    rect(width / 2, height / 2 + 80, 100, 20);
    fill(255);
    textSize(10);
    text("Revancha", width / 2, height / 2 + 80);

  }






}