
// ** This file is responsible for storing all game related logic. ** //

export class Game {
    constructor() {

        // This object will hold properties related to the world that the character will exist in.
        this.world = {
            background_color: "rgb(17, 60, 81)",

            friction: 0,
            gravity: 0,

            player: "",

            height: 72,
            width: 128,

            playerCollision: (obj) => {

            }
        }
        
    }

    updateWorld = () => {

    }
}

export class Player extends Game {
    constructor(x, y){
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

    moveLeft() {
        this.velocity_x -= 0.5
    }

    moveRight() {
        this.velocity_x += 0.5
    }

    jump() {
        if (!this.jumping) {
            this.jumping = true
        }
    }
}