// ** This file is responsible for storing the logic used to run the game. ** //

export default class Engine {
	constructor(update, draw) {
		this.update = update;
		this.draw = draw;
		this.lastRender = 0;
		this.FPS = 100;
	}

	loop = timestamp => {
		// Delta keeps track of time passed since last frame render.
		let delta = timestamp - this.lastRender;
		this.lastRender = timestamp;

		// Influencing state changes with delta keeps game experience consistent regardless of FPS.
		this.update(delta);
		this.draw();

		requestAnimationFrame(this.loop);
	};
}
