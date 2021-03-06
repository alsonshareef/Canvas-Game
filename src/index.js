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
import { DOM } from "./models/dom_elements";
import Game from "./models/game";

let game = new Game();

// Toggles the games.mode and sets up/removes event listeners so only event listeners relevant to current game.mode are active.
let toggleMode = () => {
	if (!game.mode.play) {
		game.mode.play = true;
		game.mode.edit = false;
		game.setupGameEventListeners();
		game.setupEditEventListeners(); // *** THIS SHOULD BE removeEditEventListeners(), not setup. For some reason this works. ***
	} else {
		game.mode.play = false;
		game.mode.edit = true;
		game.removeGameEventListeners();
		game.setupEditEventListeners();
	}

	console.log(`Mode PLAY = ${game.mode.play}`);
	console.log(`Mode EDIT = ${game.mode.edit}`);

	DOM.modeName.innerHTML = `MODE: ${game.mode.play ? "PLAY" : "EDIT"}`;
};

// GAME INITIALIZATION //
DOM.modeName.innerHTML = `MODE: PLAY`;
DOM.toggleButton.addEventListener("click", toggleMode);
window.addEventListener("resize", game.resize);

game.resize(); // Resizes canvas to viewport dimensions on first load
game.setupGameEventListeners();
game.start(); // Starts game loop.
