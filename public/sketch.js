
var hue_ = 100;

function setup() 
{
	createCanvas(displayWidth, displayHeight);
	colorMode(HSB);
	background(100,200,14);
	setInterval(updateScene, 500);
}

function draw() 
{
	background(hue_, 100,90);  
}

function updateScene(){
	loadJSON('/get_potentio', updateData);
}

function updateData(data) {
	console.log("incoming data: " + data);
}