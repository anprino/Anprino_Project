/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Ardublockly JavaScript for the Blockly resources and bindings.
 */
'use strict';

goog.provide('Blockly.Blocks.test');

goog.require('Blockly.Blocks');

Blockly.Blocks.test.HUE = 48;

/* Ardublockly logo block */
Blockly.Blocks['ardublockly_name_top'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BLOCKS_TEST_);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.test.HUE);
  }
};
Blockly.Blocks['dfrobot_s'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_HELPURL);
    this.setColour(Blockly.Blocks.test.HUE);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
	.appendField(new Blockly.FieldImage(
            '/blocks/grove/img/anprino_01.jpg', 45, 45))
        .appendField(Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TITLE);
	this.appendDummyInput()
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
   this.setInputsInline(true) ;
   this.appendValueInput("SPEEDA")
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL);
	this.appendValueInput("SPEEDB")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TOOLTIP);
  }
};
Blockly.Blocks['arduino_s'] = {
   init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_HELPURL);
    this.setColour(Blockly.Blocks.test.HUE);
	this.setInputsInline(false) ; 
	this.appendDummyInput()
	.appendField(new Blockly.FieldImage(
            '/blocks/grove/img/anprino_V2.png', 45, 45))
		.appendField(Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TITLE)
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
   this.setInputsInline(true) ; 
   this.appendValueInput("SPEEDA")
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL);
	this.appendValueInput("SPEEDB")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TOOLTIP);
  }
};

Blockly.Blocks['serial_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.test.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial/read');
	this.appendDummyInput("")
	    .appendField(Blockly.Msg.Serial_read);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Ler dados recebidos da porta serial. ');
  }
};

Blockly.Blocks['serial_available'] = {
  init: function() {
    this.setColour(Blockly.Blocks.test.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial/available');
	this.appendDummyInput("")
	    .appendField(Blockly.Msg.Serial_avai);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Obtem o numero de bytes (caracteres) disponível para leitura da porta serial. ');
  }
};

