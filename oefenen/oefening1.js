"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let width = context.canvas.width;
let height = context.canvas.height;
let x = 400
let y = 300
let radius = 50
let speed = 5;
let goRight = true;

//drawPatr();
//drawName();

//drawCircle()


function drawName() {

    context.lineWidth = 10;
    //A
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(100, 250);
    context.lineTo(150, 50);
    context.lineTo(200, 250);
    context.moveTo(120, 170);
    context.lineTo(180, 170);
    context.stroke();

    //L
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(250, 50);
    context.lineTo(250, 250);
    context.lineTo(350, 250);
    context.stroke();
    
    //E
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(500, 50);
    context.lineTo(400, 50);
    context.lineTo(400, 250);
    context.lineTo(500, 250);
    context.moveTo(400, 150)
    context.lineTo(500, 150)
    context.stroke()
   

}

function drawPatr(){

    for (let i = 1 ; i <= 21 ; i++){
        for (let j = 1 ; j <= 10 ; j++){
            context.fillStyle = "grey"
            context.fillRect(-50+i*60,-50+j*60,53,53)
        }
    }
}

function drawBackground(){

    context.fillStyle = "blue"
    context.fillRect(0,0,width/2,height/2)
    context.fillStyle = "green"
    context.fillRect(width/2,0,width/2,height/2)
    context.fillStyle = "green"
    context.fillRect(0,height/2,width/2,height/2)
    context.fillStyle = "blue"
    context.fillRect(width/2,height/2,width/2,height/2)
}

function drawCircle(){
    drawBackground()
    context.fillStyle= "red"
    Utils.fillCircle(x, y, radius);
    if (x >= width - radius) {
        goRight = false;
    } else if (x <= radius) {
        goRight = true;
    }

    if (goRight == true) {
        x += speed;
    } else {
        x -= speed;
    }


    context.fillStyle= "blue"
    Utils.fillCircle(x, y, radius);
    if (x >= width - radius) {
        goRight = false;
    } else if (x <= radius) {
        goRight = true;
    }

    if (goRight == true) {
        x += speed;
    } else {
        x -= speed;
    }
    

    requestAnimationFrame(drawCircle);
    console.log(drawCircle)
}
