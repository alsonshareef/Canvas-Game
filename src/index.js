// ** This file is responsible for connecting all the controllers, and essentially run the general app logic. ** //

import './index.css';

import { Display } from './models/display';
import { Engine } from './models/engine';
import { Game } from './models/game';
import { Control } from './models/control';

// CONTROLLER FUNCTIONS - purpose is for interacting with the data of different models.**

// Resizes canvas whenever viewport dimensions change, to dimensions with same aspect ratio as game world.
const resize = () => {
	display.resizeCanvas(window.innerHeight - 30, window.innerWidth - 30, game.world.height / game.world.width);
	display.drawWorld();
};

// Fills the buffer canvas with the world, then draws buffer onto primary canvas.
const draw = () => {
	display.fillBuffer(game.world.background_color);
	display.drawPlayer(player.x, player.y, player.width, player.height, player.color);
	display.drawWorld();
};

const update = () => {
	if (control.left.active) {
		player.moveLeft();
	}
	if (control.right.active) {
		player.moveRight();
	}
	if (control.up.active) {
		player.moveUp();
	}
	if (control.down.active) {
		player.moveDown();
	}

	game.updateWorld();
};

// Instantiation of all components
let display = new Display(document.getElementById('primary-canvas'));
let engine = new Engine(update, draw);
let game = new Game();
let player = game.world.player;
let control = new Control();

// GAME INITILIZATION //

/* Setting buffer canvas dimensions to game dimensions so the world will display correctly when drawn to primary canvas. */
display.buffer.canvas.height = game.world.height;
display.buffer.canvas.width = game.world.width;

// Whenever viewport dimensions changes, run resize method.
window.addEventListener('resize', resize);

// Listens for any keys being pressed and subsequently being unpressed.
window.addEventListener('keydown', control.keyListener);
window.addEventListener('keyup', control.keyListener);

// Invoked at first load of the game.
resize();
engine.start();
