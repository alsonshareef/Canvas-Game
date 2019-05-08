/**
 * File: index.js
 * Description: This file is responsible for all game initialization duties and setting up event listeners for user input.
 */

import "./index.css";
import Game from "./models/game";

let game = new Game();

// GAME INITIALIZATION //
game.setupEventListeners();
game.resize(); // Resizes canvas to viewport dimensions on first load
game.start(); // Starts game loop.
