
var hue_ = 100;

function setup() 
{
	createCanvas(320, 568);
	colorMode(HSB);
	background(100,200,14);
	setInterval(updateScene, 500);
}

function draw() 
{
	background(hue_, 100,90);  
}

function updateScene(){
	loadJSON('/get_pressure', updateData);
}

function updateData(data) {
	hue_ = data;
}