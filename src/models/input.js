/**
 * File: input.js
 * Description: This file stores everything related to handling user input.
 */

// The Input class holds callbacks for click and keypress events during "play" and "map" states.
export default class Input {
	constructor() {
		// These properties store the state of keypresses during "play" state.
		this.left = { active: false };
		this.right = { active: false };
		this.down = { active: false };
		this.up = { active: false };
	}

	/**
	 * "PLAY" STATE EVENT CALLBACKS
	 */

	// 1. Listens for keypresses and changes the state of respective keys accordingly.
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

	/**
	 * "MAP" STATE EVENT CALLBACKS
	 */

	handleBlock(e) {
		// Storing the coordinates of clicks within the canvas, relative to the canvas; not the whole DOM.
		let clickCoordinates = {
			x: e.offsetX,
			y: e.offsetY
		};

		// Calculates which column and row of the clicked block.
		let column = Math.floor(
			clickCoordinates.x /
				(this.display.ctx.canvas.width / this.display.block.width)
		);
		let row = Math.floor(
			clickCoordinates.y /
				(this.display.ctx.canvas.height / this.display.block.height)
		);

		// -- Manipulation

		// 1. Copy of level data
		let cloneMap = this.levelData.slice();

		// 2. Toggle between empty space and block
		if (cloneMap[row][column] === "#") {
			cloneMap[row][column] = ".";
		} else if (cloneMap[row][column] === ".") {
			cloneMap[row][column] = "#";
		}

		// 3. Set level data to updated level, and redraw.
		this.levelData = cloneMap;
	}

	// 2. Sets a keypress event listener and a callback that handles saving, loading and deleting level data from localStorage/API.
	handleLevelData() {
		document.addEventListener("keypress", e => {
			// LOAD - Alt G
			if (e.charCode === 169) {
				let loadType = prompt(`You are trying to LOAD a map. Please select what type of load you would like to make:
				- "static"
				- "local"
			`);
				let levelName = prompt(
					"What is the name of the map you are trying to load?"
				);
				if (loadType && levelName) {
					this.levelData = this.levelService.loadLevelData(
						loadType,
						levelName
					);
					this.display.draw(this.levelData);
				}
			}

			// SAVE - Alt S
			if (e.charCode === 223) {
				let saveType = prompt(`You are trying to SAVE this map. Please select what type of save you would like to make:
				- "local"
			`);
				let levelName = prompt(
					"What name would you like to give to this map?"
				);
				if (saveType && levelName) {
					this.levelService.saveLevelData(
						saveType,
						levelName,
						this.levelData
					);
				}
			}

			// DELETE - Alt R
			if (e.charCode === 174) {
				let deleteType = prompt(`You are trying to DELETE a map. Please select what type of delete you would like to make:
				- "local"
			`);
				let levelName = prompt(
					"What is the name of the map you are trying to delete?"
				);
				if (deleteType && levelName) {
					this.levelService.deleteLevelData(deleteType, levelName);
				}
			}
		});
	}
}
