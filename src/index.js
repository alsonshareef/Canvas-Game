
// ** This file is responsible for connecting all the controllers, and essentially run the general app logic. ** //

import { Display } from "./controllers/display";
import { Engine } from "./controllers/engine";
import { Game } from "./controllers/game";
import { User } from "./controllers/user";

// **

let display = new Display('Display')
let engine = new Engine('Engine')
let game = new Game('Game')
let user = new User('User')

console.log(display.Intro())
console.log(engine.Intro())
console.log(game.Intro())
console.log(user.Intro())