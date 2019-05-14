/**
 * File: game.js
 * Description: The Game class is the 'controller' which governs all the interactions between components of the game.
 */

import Display from "./display";
import Engine from "./engine";
import World from "./world";
import Input from "./input";
import levelService from "./levels";

export default class Game {
	constructor() {
		this.display = new Display(document.getElementById("primary-canvas"));
		this.engine = new Engine(this.update, this.draw);
		this.world = new World();
		this.input = new Input();
		this.levelService = new levelService();
		this.levelData = this.levelService.loadLevelData("static", "test");
		this.player = this.world.player;
		this.state = {
			play: false,
			map: false
		};
	}

	// Resizes canvas whenever viewport dimensions change.
	resize = () => {
		// New canvas dimensions that have the given aspect ratio after viewport resize.
		let worldSize = this.display.resizeCanvas(
			window.innerHeight - 30,
			window.innerWidth - 30,
			0.5 // Aspect ratio
		);

		// Update the world size and player size to stay proportionate to new canvas dimensions.
		this.world.updateWorldSize(worldSize.width, worldSize.height);
		this.player.updatePlayerSize(worldSize.width);
	};

	// Draws loaded level and player onto primary canvas.
	draw = () => {
		this.display.drawLevel(this.world.background_color, this.levelData);
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

	/**
	 * EVENT LISTENERS for different game states
	 */

	// Setup event listeners during "play" state.
	setupGameEventListeners = () => {
		window.addEventListener("keydown", this.input.keyListener);
		window.addEventListener("keyup", this.input.keyListener);
	};

	// Setup event listeners during "map" state.
	setupMapEventListeners = () => {
		this.input.handleBlock.bind(this)();
		this.input.handleLevelData.bind(this)();
	};

	/**
	 * INITIALIZE
	 */

	start = () => {
		requestAnimationFrame(this.engine.loop);
	};
}
