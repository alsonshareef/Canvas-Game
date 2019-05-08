/**
 * File: index.js
 * Description: This file is responsible for all game initialization duties and setting up event listeners for user input.
 */

import "./index.css";
import Game from "./models/game";

let game = new Game();

window.addEventListener("resize", () => {
	console.log("Height:", game.world.height);
	console.log("Width:", game.world.width);
});

// Set buffer dimensions to game world dimensions so buffer is drawn correctly onto canvas.
// game.display.buffer.canvas.height = game.world.height;
// game.display.buffer.canvas.width = game.world.width;

// GAME INITIALIZATION //
game.setupEventListeners();
game.resize(); // Resizes canvas to viewport dimensions on first load
game.start(); // Starts game loop.
