
// ** This file is responsible for connecting all the controllers, and essentially run the general app logic. ** //

import "./index.css"

import { Display } from "./models/display";
import { Engine } from "./models/engine";
import { Game, Player } from "./models/game";
import { User } from "./models/user";

// Instantiation of all components
let display = new Display(document.getElementById('primary-canvas'))
let engine = new Engine()
let game = new Game()
let player = new Player()
let user = new User()

// CONTROLLER FUNCTIONS - purpose is for interacting with the data of different models data.**

// Resizes the game world dimensions.
const resize = () => {
    display.resizeCanvas(window.innerHeight, window.innerWidth)
}

// Renders the world onto canvas.
const render = () => {
    display.fillBuffer()
    display.renderWorld()
}


// GAME INITILIZATION //

/* Setting buffer canvas dimensions to game dimensions so the world will display correctly when drawn to primary canvas. */
display.buffer.canvas.height = game.world.height
display.buffer.canvas.width = game.world.width

resize()
render()
// display.renderWorld(game.world.background_color, 100, 100)