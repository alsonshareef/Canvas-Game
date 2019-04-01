
// ** This file is responsible for connecting all the controllers, and essentially run the general app logic. ** //

import "./index.css"

import { Display } from "./controllers/display";
import { Engine } from "./controllers/engine";
import { Game, Player } from "./controllers/game";
import { User } from "./controllers/user";

// **

let display = new Display('Display')
let engine = new Engine('Engine')
let game = new Game('black')
let player = new Player()
let user = new User('User')

// console.log(display.Intro())
// console.log(engine.Intro())
console.log(game)
console.log(player)
// console.log(user.Intro())