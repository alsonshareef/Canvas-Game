
/** This file is responsible for logic relating to the HTML/CSS and Canvas; in other words what the user will see. **/

export class Display {
    constructor(canvas) {
        // Primary canvas context, and secondary canvas to be used as a buffer.
        this.context = canvas.getContext("2d"); 
        this.buffer  = document.createElement("canvas").getContext("2d")
    }

    // Fill buffer canvas with world using data from game.world object.
    fillBuffer(color){
        this.buffer.fillStyle = color
        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height)
    }

    // Draws player shape into the buffer which will later be drawn onto primary canvas
    drawPlayer(){

    }

    // Draws buffer canvas onto primary canvas.
    renderWorld(){
        this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height)
    }

    // Used to resize canvas dimensions to dimensions with same aspect ratio as the game world.
    resizeCanvas(viewHeight, viewWidth, gameAspectRatio){
        if (viewHeight / viewWidth > gameAspectRatio) {
            this.context.canvas.height = viewWidth * gameAspectRatio
            this.context.canvas.width = viewWidth
        } else {
            this.context.canvas.height = viewHeight
            this.context.canvas.width = viewHeight / gameAspectRatio
        }
    }
}