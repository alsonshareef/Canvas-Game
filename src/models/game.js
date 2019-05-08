/**
 * File: game.js
 * Description: The Game class is the 'controller' which governs all the interactions between components of the game.
 */

import Display from "./display";
import Engine from "./engine";
import World from "./world";
import Input from "./input";

export default class Game {
	constructor() {
		this.display = new Display(document.getElementById("primary-canvas"));
		this.engine = new Engine(this.update, this.draw);
		this.world = new World(
			this.display.context.canvas.height,
			this.display.context.canvas.width
		);
		this.player = this.world.player;
		this.input = new Input();
	}

	// Resizes canvas whenever viewport dimensions change, to dimensions with same aspect ratio as game world.
	resize = () => {
		// New canvas dimensions variable after window resize.
		let worldSize = this.display.resizeCanvas(
			window.innerHeight - 30,
			window.innerWidth - 30,
			this.world.height / this.world.width
		);

		// Update the world size to stay proportionate to new canvas dimensions and then redraw.
		this.world.updateWorldSize(worldSize.width, worldSize.height);
		this.display.drawWorld();
	};

	// Fills the buffer canvas with the world, then draws buffer onto primary canvas.
	draw = () => {
		this.display.drawWorld(this.world.background_color);
		this.display.drawPlayer(
			this.player.x,
			this.player.y,
			this.player.width,
			this.player.height,
			this.player.color
		);
	};

	// Updates the state of the player and world based on user input.
	update = delta => {
		if (this.input.left.active) {
			this.player.moveLeft(delta);
		}
		if (this.input.right.active) {
			this.player.moveRight(delta);
		}
		if (this.input.up.active) {
			this.player.moveUp(delta);
		}
		if (this.input.down.active) {
			this.player.moveDown(delta);
		}
		this.world.update();
	};

	// Setup event listeners for window resizes and user input.
	setupEventListeners = () => {
		window.addEventListener("resize", this.resize);
		window.addEventListener("keydown", this.input.keyListener);
		window.addEventListener("keyup", this.input.keyListener);
	};

	// INITIALIZE

	start = () => {
		requestAnimationFrame(this.engine.loop);
	};
}
