
// ** This file is responsible for storing all game related logic. ** //

export class Game {
    constructor() {

        // This object will hold properties related to the world that the character will exist in.
        this.world = {
            background_color: "rgba(17, 60, 81, 0.60)",
            friction: 0,
            gravity: 0,
            player: new Player(),
            height: 108,
            width: 198,
            playerCollision: (obj) => {
                
            },
            update: () => {

            }
        }
        
    }

    updateWorld = () => {
        this.world.update()
    }
}

class Player {
    constructor(x, y){
        this.color = "#000000",
        this.height = 16,
        this.width = 16
        this.jumping = true,
        this.velocity_x = 0,
        this.velocity_y = 0,
        this.x = 100,
        this.y = 50
    }

    moveLeft = () => {
        this.velocity_x -= 0.5
    }

    moveRight = () => {
        this.velocity_x += 0.5
    }

    jump = () => {
        if (!this.jumping) {
            this.jumping = true
        }
    }

    update = () => {
        
    }
}