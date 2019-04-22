// ** This file is responsible for storing all game related logic. ** //

export class Game {
	constructor() {
		// This object will hold properties related to the world that the character will exist in.
		this.world = {
			background_color: 'rgb(17, 60, 81)',
			friction: 0.95,
			gravity: 0,
			player: new Player(),
			height: 108,
			width: 192,
			handleCollision: (player) => {
				// If player hits max-left, stop player from continuing left.
				if (player.x < 0) {
					player.x = 0;
					player.velocity_x = 0;
				}

				// If player hits max-right, stop player from continuing right.
				if (player.x + player.width > this.world.width) {
					player.x = this.world.width - player.width;
					player.velocity_x = 0;
				}

				// If player hits max-bottom, stop player from continuing down.
				if (player.y < 0) {
					player.y = 0;
					player.velocity_y = 0;
				}

				// If player hits max-height, stop player from continuing up.
				if (player.y + player.height > this.world.height) {
					player.y = this.world.height - player.height;
					player.velocity_y = 0;
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

	moveLeft = (delta) => {
		this.velocity_x -= 0.05 * delta;
	};

	moveRight = (delta) => {
		this.velocity_x += 0.05 * delta;
	};

	moveUp = (delta) => {
		this.velocity_y -= 0.05 * delta;
	};

	moveDown = (delta) => {
		this.velocity_y += 0.05 * delta;
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
