"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

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