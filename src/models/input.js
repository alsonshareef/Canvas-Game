/**
 * File: input.js
 * Description: This file handles the user input.
 */

// The Input class holds instances of the Action class which will store the keypress state of different keys, specifically if they're activated or not.

export default class Input {
	constructor() {
		this.left = new Action();
		this.right = new Action();
		this.down = new Action();
		this.up = new Action();
	}

	// Listens for keypresses and changes the state of respective keys accordingly.
	keyListener = e => {
		let pressed = e.type === "keydown" ? true : false;

		switch (e.keyCode) {
			case 37:
				this.left.active = pressed;
				break;
			case 38:
				this.up.active = pressed;
				break;
			case 39:
				this.right.active = pressed;
				break;
			case 40:
				this.down.active = pressed;
				break;
		}
	};
}

// Stores the state of keypress.
class Action {
	constructor(active) {
		this.active = active;
	}
}
