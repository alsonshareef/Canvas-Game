// ** This file is responsible for storing all game related logic. ** //

export class Game {
	constructor() {
		// This object will hold properties related to the world that the character will exist in.
		this.world = {
			background_color: 'rgb(17, 60, 81)',
			friction: 0.9,
			gravity: 0,
			player: new Player(),
			height: 108,
			width: 192,
			handleCollision: (obj) => {
				// If player hits max-left, stop player from continuing left.
				if (obj.x < 0) {
					obj.x = 0;
					obj.velocity_x = 0;
				}

				// If player hits max-right, stop player from continuing right.
				if (obj.x + obj.width > this.world.width) {
					obj.x = this.world.width - obj.width;
					obj.velocity_x = 0;
					obj.velocity_x = 0;
				}

				// If player hits max-bottom, stop player from continuing down.
				if (obj.y < 0) {
					obj.y = 0;
					obj.velocity_y = 0;
				}

				// If player hits max-height, stop player from continuing up.
				if (obj.y + obj.height > this.world.height) {
					obj.y = this.world.height - obj.height;
					obj.velocity_y = 0;
				}
			},
			update: function() {
				this.player.velocity_x *= this.friction;
				this.player.velocity_y *= this.friction;
				this.player.update();
				this.handleCollision(this.player);
			}
		};
	}

	updateWorld = () => {
		this.world.update();
	};
}

class Player {
	constructor(x, y) {
		this.color = 'rgb(244, 182, 66)';
		this.height = 15;
		this.width = 15;
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

	moveUp = () => {
		this.velocity_y -= 0.5;
	};

	moveDown = () => {
		this.velocity_y += 0.5;
	};

	// jump = () => {
	// 	if (!this.jumping) {
	// 		this.jumping = true;
	// 	}
	// };

	update = () => {
		this.x += this.velocity_x;
		this.y += this.velocity_y;
	};
}
