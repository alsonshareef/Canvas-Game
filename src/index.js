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

// GAME INITIALIZATION //
game.resize(); // Resizes canvas to viewport dimensions on first load
window.addEventListener("resize", game.resize);

game.setupGameEventListeners();
// game.setupMapEventListeners();

game.start(); // Starts game loop.
