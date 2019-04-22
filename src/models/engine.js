// ** This file is responsible for storing the logic used to run the game. ** //

export class Engine {
	constructor(update, draw) {
		this.update = update;
		this.draw = draw;
		this.lastRender = 0;
		this.FPS = 100;
	}

	loop = (timestamp) => {
		let delta = timestamp - this.lastRender; // keeps track of time passed since last frame render.
		this.lastRender = timestamp;

		this.update(delta);
		this.draw();

		requestAnimationFrame(this.loop);
	};

	start = () => {
		requestAnimationFrame(this.loop);
	};
}
