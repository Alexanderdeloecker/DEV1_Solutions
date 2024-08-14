"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let w = window.innerWidth;
let h = window.innerHeight;

window.onkeydown = keyDown;

let breaks = 2;
let width = 80;

drawlines();

function drawlines() {
	drawBackground();
	drawLine();
	requestAnimationFrame(drawlines);
}

function keyDown(eventData) {
	if (eventData.code == "ArrowUp") {
		// ADD BREAK
		breaks += 2;
	} else if (eventData.code == "ArrowDown" && breaks != 2) {
		// REMOVE BREAK
		breaks -= 2;
	} else if (eventData.code == "ArrowLeft") {
		// REMOVE WIDTH
		width -= 20;
		console.log(width);
	} else if (eventData.code == "ArrowRight") {
		// ADD WIDTH
		width += 20;
		console.log(width);
	}
}

function drawBackground() {
	context.fillStyle = Utils.hsl(0, 1, 15);
	context.fillRect(0, 0, w, h);
}

function drawLine() {
	context.strokeStyle = "lightgray";
	context.lineWidth = width;
	context.lineCap = "square";
	for (let j = 0; j < 4000; j += 200) {
		for (let i = 0; i < breaks / 2; i++) {
			Utils.drawLine(
				-600 + j,
				0 + i * (h / (breaks / 2)),
				-600 + j + h / breaks,
				h / breaks + i * (h / (breaks / 2))
			);
			Utils.drawLine(
				-600 + j,
				h / (breaks / 2) + i * (h / (breaks / 2)),
				-600 + j + h / breaks,
				h / breaks + i * (h / (breaks / 2))
			);
		}
	}
}
