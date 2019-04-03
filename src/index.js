
// ** This file is responsible for connecting all the controllers, and essentially run the general app logic. ** //

import "./index.css"

import { Display } from "./controllers/display";
import { Engine } from "./controllers/engine";
import { Game, Player } from "./controllers/game";
import { User } from "./controllers/user";

// Instantiation of all components
let display = new Display(document.getElementById('primary-canvas'))
let engine = new Engine()
let game = new Game()
let player = new Player()
let user = new User()

// **
display.context.fillRect(0, 0, game.world.width, game.world.height)