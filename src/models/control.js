// ** This file handles the user input. ** //

// The Control class holds the state of the arrows keys, specifically if they're activated or not.
export class Control {
	constructor() {
		this.left = new Button();
		this.right = new Button();
		this.down = new Button();
		this.up = new Button();
	}

	keyListener = (e) => {
		let pressed = e.type === 'keydown' ? true : false;

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

class Button {
	constructor(active) {
		this.active = active;
	}
}
