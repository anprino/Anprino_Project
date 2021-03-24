// Ardublockly generated sketch
boolean esq;
boolean meio;
boolean dir;

void forward(int MotA, int MotB)
{
  analogWrite(10,MotA);//Motor A vel
  analogWrite(11,MotB);//Motor B vel
  digitalWrite(13,LOW);// Motor B (direito) move no sentido do relogio
  digitalWrite(12,LOW);//Motor A (esquerda) move no sentido do relogio
}

void left(int MotA, int MotB)
{
  analogWrite(10,MotA);//Motor A vel
  analogWrite(11,MotB);//Motor B vel
  digitalWrite(13,LOW);// Motor B (direito) move no sentido contrario do relogio
  digitalWrite(12,HIGH);//Motor A (esquerda) move no sentido do relogio
}


void right(int MotA, int MotB)
{
  analogWrite(10,MotA);//Motor A vel
  analogWrite(11,MotB);//Motor B vel
  digitalWrite(13,HIGH);//Motor B (direito) move no sentido do relogio
  digitalWrite(12,LOW);//Motor A (esquerda) move no sentido contrario do relogio
}



void setup() {
  pinMode(15, INPUT);
  pinMode(16, INPUT);
  pinMode(17, INPUT);
  pinMode(12,OUTPUT);//direcaoPinoA
  pinMode(13,OUTPUT);//direcaoPinoB
  pinMode(10,OUTPUT);//velPinoA
  pinMode(11,OUTPUT);//velPinoB

}

void loop() {
  esq = (boolean)(digitalRead(15));
  meio = (boolean)(digitalRead(16));
  dir = (boolean)(digitalRead(17));
  if (esq && (!meio && dir)) {
    forward(200, 200);
  }
  if (!esq && (meio && dir)) {
    left(0, 200);
  }
  if (esq && (meio && !dir)) {
    right(200, 0);
  }

}