/**
 * File: world.js
 * Description: The World class stores all data that describes the game world, the player(s) and the collision detection for the player.
 */

export default class World {
	constructor() {
		this.player = new Player();
		this.background_color = "rgb(17, 60, 81)";
		this.friction = 0.95;
		this.gravity = 0;
		this.height = 108;
		this.width = 192;
	}

	// Updates world size whenever the viewport changes size, for the purpose of keeping player collision dimensions = to canvas dimensions.
	updateWorldSize = (width, height) => {
		this.height = height;
		this.width = width;
	};

	// Handles player collision
	handleCollision = player => {
		// If player hits max-left, stop player from continuing left.
		if (player.x < 0) {
			player.x = 0;
			player.velocity_x = 0;
		}

		// If player hits max-right, stop player from continuing right.
		if (player.x + player.width > this.width) {
			player.x = this.width - player.width;
			player.velocity_x = 0;
		}

		// If player hits max-bottom, stop player from continuing down.
		if (player.y < 0) {
			player.y = 0;
			player.velocity_y = 0;
		}

		// If player hits max-height, stop player from continuing up.
		if (player.y + player.height > this.height) {
			player.y = this.height - player.height;
			player.velocity_y = 0;
		}
	};

	update = function() {
		this.player.velocity_x *= this.friction;
		this.player.velocity_y *= this.friction;
		this.player.update();
		this.handleCollision(this.player);
	};
}

class Player {
	constructor() {
		this.color = "rgb(244, 182, 66)";
		this.height = 35;
		this.width = 35;
		this.jumping = true;
		this.velocity_x = 0;
		this.velocity_y = 0;
		this.x = 50;
		this.y = 50;
	}

	// Updates player size in proportion to the width of the canvas.
	updatePlayerSize = width => {
		this.width = width / 30;
		this.height = width / 30;
	};

	moveLeft = delta => {
		this.velocity_x -= 0.05 * delta;
	};

	moveRight = delta => {
		this.velocity_x += 0.05 * delta;
	};

	moveUp = delta => {
		this.velocity_y -= 0.05 * delta;
	};

	moveDown = delta => {
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
