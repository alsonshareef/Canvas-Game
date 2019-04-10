// ** This file is responsible for storing the logic used to run the game. ** //

export class Engine {
	constructor(update, draw) {
		this.update = update;
		this.draw = draw;
	}

	update = () => {};

	draw = () => {};

	loop = () => {};
}
