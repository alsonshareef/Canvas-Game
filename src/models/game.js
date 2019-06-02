/**
 * File: game.js
 * Description: The Game class is the 'controller' which governs all the interactions between components of the game.
 */

import Display from "./display";
import Engine from "./engine";
import World from "./world";
import Input from "./input";
import levelService from "./levels";

import { DOM } from "../models/dom_elements";

export default class Game {
	constructor() {
		this.display = new Display(DOM.canvas);
		this.engine = new Engine(this.update, this.draw);
		this.world = new World();
		this.input = new Input();
		this.levelService = new levelService();
		this.levelData = this.levelService.loadLevelData("static", "test");
		this.player = this.world.player;
		this.mode = {
			play: true,
			edit: false
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
	 * SETUP/REMOVE event listener methods for PLAY/EDIT states.
	 */

	// 1. "PLAY" state setup listeners
	setupGameEventListeners = () => {
		document.addEventListener("keydown", this.input.keyListener);
		document.addEventListener("keyup", this.input.keyListener);
	};

	// 2. "PLAY" state remove listeners
	removeGameEventListeners = () => {
		document.removeEventListener("keydown", this.input.keyListener);
		document.removeEventListener("keyup", this.input.keyListener);
	};

	// 3. "EDIT" state setup listeners
	setupEditEventListeners = () => {
		DOM.canvas.addEventListener(
			"click",
			this.input.handleBlock.bind(this),
			true
		);
	};

	// 4. "EDIT" state remove listeners
	removeEditEventListeners = () => {
		DOM.canvas.removeEventListener(
			"click",
			this.input.handleBlock.bind(this),
			true
		);
	};

	/**
	 * INITIALIZE
	 */

	start = () => {
		requestAnimationFrame(this.engine.loop);
	};
}
