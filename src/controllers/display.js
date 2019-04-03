
/** This file is responsible for logic relating to the HTML/CSS and Canvas; in other words what the user will see. **/

export class Display {
    constructor(canvas) {
        // Primary canvas context.
        this.context = canvas.getContext("2d"); 
        
        // Buffer canvas to load graphics fully before drawing onto primary canvas.
        this.buffer  = document.createElement("canvas").getContext("2d") 
    }

    render(){
        
    }

}