/**
 * File: index.js
 * Description: This file is responsible for all game initialization duties and setting up event listeners for user input.
 */

/** GAME FLOW **
 * 1. Starts off loading static default level data in 'game' mode.
 * 2. Player may decide to either:
 * 		- Go into map mode:
 * 			- to build a custom map, save it and play in game mode.
 * 			- to load/edit a custom map, save it and play in game mode.
 * 			- to delete an existing custom map.
 */

/** Toggling Modes
 * Identify what methods should be invoked regardless of state.
 * if (game.mode.play) > setup event listeners for playing the game.
 * if (game.mode.map) > setup event listeners for editing/loading/saving/deleting level data.
 */

import "./index.css";
import Game from "./models/game";

let game = new Game();

// Toggles the games.mode and sets up/removes event listeners so only event listeners relevant to current game.mode are active.
let toggleMode = () => {
	if (!game.mode.play) {
		game.mode.play = true;
		game.mode.edit = !true;
		game.setupGameEventListeners();
		game.removeEditEventListeners();
	} else {
		game.mode.play = !true;
		game.mode.edit = true;
		game.setupEditEventListeners();
		game.removeGameEventListeners();
	}

	document.querySelector(".mode-name").innerHTML = `MODE: ${
		game.mode.play ? "PLAY" : "EDIT"
	}`;
};

// GAME INITIALIZATION //
document.querySelector(".mode-name").innerHTML = `MODE: PLAY`;
document.getElementById("toggle").addEventListener("click", toggleMode);
window.addEventListener("resize", game.resize);

game.resize(); // Resizes canvas to viewport dimensions on first load
game.setupGameEventListeners();
game.start(); // Starts game loop.
