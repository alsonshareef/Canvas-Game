
// ** This file is responsible for storing all game related logic. ** //

export class Game {
    constructor() {

        // This object will hold properties related to the world that the character will exist in.
        this.world = {
            background_color: "#000000",

            friction: 0,
            gravity: 0,

            player: "",

            height: 50,
            width: 50,

            playerCollision: (obj) => {

            }
        }

    }

    showWorld = () => {
        return this.world
    }
}

export class Player extends Game {
    constructor(){
        super()
        this.color = "#000000",
        this.height = 16,
        this.jumping = true,
        this.velocity_x = 0,
        this.velocity_y = 0,
        this.width = 16
        this.x = 100,
        this.y = 50
    }
}