/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the test 2 blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.test');

goog.require('Blockly.Arduino');


/** . */
Blockly.Arduino['ardublockly_name_top'] = function(block) {
  return '';
};
Blockly.Arduino.dfrobot_s = function() {
   var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(4,OUTPUT);//direcao Pino A\n"+
  "  pinMode(7,OUTPUT);//direcao Pino B\n"+
  "  pinMode(5,OUTPUT);//vel Pino A\n"+
  "  pinMode(6,OUTPUT);//vel Pino B\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(5,"+speedA+");//velocidde Motor A\n"+
     "  analogWrite(6,"+speedB+");//velocidde Motor B\n"+
     "  digitalWrite(7,LOW);// Motor B (direita) move no sentido relogio\n"+
     "  digitalWrite(4,LOW);//Motor A (esquerda) move no sentido contrarelogio\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(5,"+speedA+");//Motor A velocidade\n"+
     "  analogWrite(6,"+speedB+");//Motor B velocidade\n"+
     "  digitalWrite(7,HIGH);// Motor B (direita) move no sentido relogio\n"+
     "  digitalWrite(4,LOW);//Motor A (esquerda) move no sentido contrarelogio\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(5,"+speedA+");//Motor A velocidade\n"+
     "  analogWrite(6,"+speedB+");//Motor B velocidade\n"+
     "  digitalWrite(7,LOW);// Motor B (direita) move no sentido contrarelogio\n"+
     "  digitalWrite(4,HIGH);//Motor A (esquerda) move no sentido relogio\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(5,"+speedA+");//Motor A velocidade\n"+
     "  analogWrite(6,"+speedB+");//Motor B velocidade\n"+
     "  digitalWrite(7,HIGH);// Motor B (direita) move no sentido contrarelogio\n"+
     "  digitalWrite(4,HIGH);//Motor A (esquerda) move no sentido contrarelogio\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(5,0);//Motor A velocidade\n"+
     "  analogWrite(6,0);//Motor A velocidade\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};
Blockly.Arduino.arduino_s = function() {
   var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(12,OUTPUT);//direcaoPinoA\n"+
  "  pinMode(13,OUTPUT);//direcaoPinoB\n"+
  "  pinMode(10,OUTPUT);//velPinoA\n"+
  "  pinMode(11,OUTPUT);//velPinoB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(10,MotA);//Motor A vel\n"+
     "  analogWrite(11,MotB);//Motor B vel\n"+
     "  digitalWrite(13,LOW);// Motor B (direito) move no sentido do relogio\n"+
     "  digitalWrite(12,LOW);//Motor A (esquerda) move no sentido do relogio\n"+
"}\n";
    code="forward("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(10,MotA);//Motor A vel\n"+
     "  analogWrite(11,MotB);//Motor B vel\n"+
     "  digitalWrite(13,HIGH);//Motor B (direito) move no sentido do relogio\n"+
     "  digitalWrite(12,LOW);//Motor A (esquerda) move no sentido contrario do relogio\n"+
"}\n\n";
    code="right("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(10,MotA);//Motor A vel\n"+
     "  analogWrite(11,MotB);//Motor B vel\n"+
     "  digitalWrite(13,LOW);// Motor B (direito) move no sentido contrario do relogio\n"+
     "  digitalWrite(12,HIGH);//Motor A (esquerda) move no sentido do relogio\n"+
"}\n\n";
    code="left("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(10,MotA);//Motor A vel\n"+
     "  analogWrite(11,MotB);//Motor B vel\n"+
     "  digitalWrite(13,HIGH);// Motor B (direito) move no sentido contrario do relogio\n"+
     "  digitalWrite(12,HIGH);//Motor A (esquerda) move no sentido contrario do relogio\n"+
"}\n\n";
    code="backward("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(10,0);//Motor A vel\n"+
     "  analogWrite(11,0);//Motor B vel\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino['serial_read'] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_available'] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.available()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
