// ** This file is responsible for storing all game related logic. ** //

export class Game {
	constructor() {
		// This object will hold properties related to the world that the character will exist in.
		this.world = {
			background_color: 'rgba(17, 60, 81, 1)',
			friction: 0,
			gravity: 0,
			player: new Player(),
			height: 108,
			width: 192,
			handleCollision: (obj) => {
				switch (obj) {
					// If player hits max-left, stop player from continuing left.
					case obj.x < 0:
						obj.x = 0;
						obj.velocity_x = 0;
						break;

					// If player hits max-right, stop player from continuing right.
					case obj.x + obj.width > this.width:
						obj.x = this.width - obj.width;
						obj.velocity_x = 0;
						break;

					// If player hits max-bottom, stop player from continuing down.
					case obj.y < 0:
						obj.y = 0;
						obj.velocity_y = 0;
						break;

					// If player hits max-height, stop player from continuing up.
					case obj.y + obj.height > this.height:
						obj.jumping = false;
						obj.y = this.height - obj.height;
						obj.velocity_y = 0;
						break;
				}
			},
			update: () => {}
		};
	}

	updateWorld = () => {
		this.world.update();
	};
}

class Player {
	constructor(x, y) {
		this.color = '#000000';
		this.height = 16;
		this.width = 16;
		this.jumping = true;
		this.velocity_x = 0;
		this.velocity_y = 0;
		this.x = 100;
		this.y = 50;
	}

	moveLeft = () => {
		this.velocity_x -= 0.5;
	};

	moveRight = () => {
		this.velocity_x += 0.5;
	};

	jump = () => {
		if (!this.jumping) {
			this.jumping = true;
		}
	};

	update = () => {};
}
