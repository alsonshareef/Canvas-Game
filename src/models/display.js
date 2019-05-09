/**
 * File: display.js
 * Description: This file is responsible for logic relating to the Canvas; in other words what the user will see.
 */

export default class Display {
	constructor(canvas) {
		// Primary canvas context
		this.context = canvas.getContext("2d");
	}

	// Draws player shape into the buffer which will later be drawn onto primary canvas
	drawPlayer(x, y, width, height, color) {
		this.context.fillStyle = color;
		this.context.fillRect(Math.floor(x), Math.floor(y), width, height);
	}

	// Draws buffer canvas onto primary canvas.
	drawWorld(color) {
		this.context.fillStyle = color;
		this.context.fillRect(
			0,
			0,
			this.context.canvas.width,
			this.context.canvas.height
		);
	}

	// Used to resize canvas dimensions to dimensions with same aspect ratio as the game world.
	resizeCanvas(viewHeight, viewWidth, gameAspectRatio) {
		if (viewHeight / viewWidth > gameAspectRatio) {
			// Max width scenario, where height has to be calculated against AR
			this.context.canvas.height = viewWidth * gameAspectRatio;
			this.context.canvas.width = viewWidth;
		} else {
			// Max height scenario, where width has to be calculated against AR
			this.context.canvas.height = viewHeight;
			this.context.canvas.width = viewHeight / gameAspectRatio;
		}

		// Return updated canvas dimensions to update world dimensions.
		return {
			width: this.context.canvas.width,
			height: this.context.canvas.height
		};
	}
}
