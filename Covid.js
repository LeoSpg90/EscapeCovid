class Covid {

  constructor() {

    
    this.x = random(width);
    this.y = random(height);
    this.despX = random(width);
    this.despY = random(height);

    this.vel = random(6,9);
    this.dir = random(TWO_PI +3);
    this.diam = 30;
   

  }
  dibujar() {
    covid.draw();
    covid.move();



  }
  draw() {

    var valorSeno = sin(angulo);
    var radio = map(valorSeno, -1, 1, 50, 57);
    angulo += 0.1;


    //antenas
    stroke('#63F522');
    strokeWeight(7);

    //antena1
    line(this.x - (radio), this.y - (radio + 5), this.x + (radio + 5), this.y + (radio + 7));
    line(this.x - (radio + 5), this.y - (radio), this.x - (radio - 5), this.y - (radio + 10));
    line(this.x + (radio), this.y + (radio + 12), this.x + (radio + 10), this.y + (radio + 2));

    //antena2
    line(this.x - (radio - 15), this.y + (radio + 5), this.x + (radio - 15), this.y - (radio + 15));
    line(this.x - (radio - 8), this.y + (radio + 6), this.x - (radio - 18), this.y + (radio + 12));
    line(this.x + (radio - 20), this.y - (radio + 19), this.x + (radio - 9), this.y - (radio + 12));

    //antena3
    line(this.x - (radio + 17), this.y + (radio - 50), this.x + (radio + 17), this.y - (radio - 50));
    line(this.x - (radio + 18), this.y + (radio - 56), this.x - (radio + 17), this.y + (radio - 44));
    line(this.x + (radio + 17), this.y - (radio - 55), this.x + (radio + 17), this.y - (radio - 45));

    //cuerpo  
    fill('#63F522');
    noStroke();
    // ellipse(this.x, this.y, radio * 2, radio * 2);
    ellipse(this.x, this.y, radio * 2, radio * 2);
  }

  move() {
    this.despX = cos(this.dir) * this.vel;
    this.despY = sin(this.dir) * this.vel;
    this.x += this.despX;
    this.y += this.despY;

    if (this.x > width + this.diam) {
 this.x = -this.diam;
     
    }
    if (this.x < -this.diam) {
      this.x = width + this.diam ;

    }
    if (this.y > height + this.diam) {
      this.y = - this.diam;
            

    }
    if (this.y < -this.diam) {
      this.y = height + this.diam;
      

    }
    
  }

}