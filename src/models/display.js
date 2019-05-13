/**
 * File: display.js
 * Description: This file is responsible for logic relating to the Canvas; in other words what the user will see.
 */

import { solidElement } from "./blocks";

export default class Display {
	constructor(canvas) {
		// Primary canvas context
		this.ctx = canvas.getContext("2d");
	}

	// Used to resize canvas dimensions to dimensions with same aspect ratio as the game world.
	resizeCanvas(viewHeight, viewWidth, gameAspectRatio) {
		if (viewHeight / viewWidth > gameAspectRatio) {
			// Max width scenario, where height has to be calculated against AR
			this.ctx.canvas.height = viewWidth * gameAspectRatio * 0.8;
			this.ctx.canvas.width = viewWidth * 0.8;
		} else {
			// Max height scenario, where width has to be calculated against AR
			this.ctx.canvas.height = viewHeight * 0.8;
			this.ctx.canvas.width = (viewHeight / gameAspectRatio) * 0.8;
		}

		// Return updated canvas dimensions to update world dimensions.
		return {
			width: this.ctx.canvas.width,
			height: this.ctx.canvas.height
		};
	}

	/**
	 * DRAWING PROCESS
	 */

	// 1. Block dimensions calculator - Defines block dimensions based on level data dimensions.
	blockCalc = levelData => {
		let block = {};

		// Calculates the amount of rows and sets it to block height, then calculates elements in each row, and sets it to block width.
		block.height = levelData.length; // amount of rows
		block.width = levelData[0].length; // amount of elements per row

		return block;
	};

	// 2. This function takes in the level data and draws each characters respective element at the block dimensions calculated in the previous step.
	buildLevel = (levelData, canvas, block) => {
		// Array that stores all element objects that are created with respective class constructors
		let finalLevelData = [];

		// This will iterate over every row array and determine what element needs to be drawn depending on character.
		levelData.forEach((row, rowIndex) => {
			row.forEach((element, elementIndex) => {
				let position = {
					x: (canvas.width / block.width) * elementIndex,
					y: (canvas.height / block.height) * rowIndex
				};
				switch (element) {
					case "#": // Solid blocks
						finalLevelData.push(
							new solidElement(
								Math.ceil(canvas.width / block.width),
								Math.ceil(canvas.height / block.height),
								position
							)
						);
						break;

					default:
						break;
				}
			});
		});

		// Return array of constructed level
		return finalLevelData;
	};

	// 3. Draw built level onto primary canvas.
	drawWorld(color, levelData) {
		// Clear canvas
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

		// Fill in background color
		this.ctx.fillStyle = color;
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

		// Build out the level and receive an array of element objects.
		let elements = this.buildLevel(
			levelData,
			this.ctx.canvas,
			this.blockCalc(levelData)
		);

		// Draw out each element object using its properties
		elements.forEach(e => {
			this.ctx.fillStyle = "black";
			this.ctx.fillRect(e.position.x, e.position.y, e.width, e.height);
		});
	}

	// 4. Draw player based on its current state onto primary canvas.
	drawPlayer(x, y, width, height, color) {
		this.ctx.fillStyle = color;
		this.ctx.fillRect(Math.floor(x), Math.floor(y), width, height);
	}
}
