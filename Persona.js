
class Persona {
  //constructor
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.despX = 0;
    this.despY = 0;
    this.desp = 6;
    this.diam = 30;
    
  }

  //funcionalidades
  draw() {
    this.mover();
    this.dibujar();
    this.colision();
  }

  keyPressed() {
    
    switch (keyCode) {
      case UP_ARROW:
        this.despY = -this.desp;
        break;
      case DOWN_ARROW:
        this.despY = this.desp;
        break;
      case LEFT_ARROW:
        this.despX = -this.desp;
        break;
      case RIGHT_ARROW:
        this.despX = this.desp;
        break;
    }
  }


  keyReleased() {
   
    switch (keyCode) {
      case UP_ARROW:
        this.despY = 0;
        break;
      case DOWN_ARROW:
        this.despY = 0;
        break;
      case LEFT_ARROW:
        this.despX = 0;
        break;
      case RIGHT_ARROW:
        this.despX = 0;
        break;
    }
  }

  mover() {
    this.x += this.despX;
    this.y += this.despY;
    
  }
  dibujar() {
    push();
    translate(this.x, this.y);
    fill(255, 255, 0);
    ellipse(0, 0, this.diam - 5, this.diam - 5);
    noFill();
    strokeWeight(1);
    stroke(255, 0, 0);
    noSmooth();
    ellipse(0, 0, this.diam + 30, this.diam + 30);

    pop();
  }
  colision() {
    contagio = dist(covid.x, covid.y, persona.x,persona.y);
    if (contagio <= 80) {
     covid.x=random(0,width);
      covid.y=random(0,height);
  estado=3;
    }
  }
}