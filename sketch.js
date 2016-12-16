var numberOfButtons = 8;
var numberOfMoves = 7;

var buttons = [];
var goalArray = [];
var currentArray = [];

function setup() {
	createCanvas(1200, 700);
	noStroke()
	for (var i = 0; i < numberOfButtons; i++){
		buttons[i] = new Button(i,numberOfButtons);
	}
	startGame();
}

function startGame(){
	for (var i = 0; i < numberOfButtons; i++){
		goalArray[i] = false;
		currentArray[i] = false;
		buttons[i].generateRules();		
	}											//Generate Rules & set arrays to false
	for (var i = 0; i < numberOfMoves; i++){
		var randomNumber = int(random(numberOfButtons));
		goalArray = buttons[randomNumber].applyRule(goalArray);
	}											//Randomly press buttons
	var empty = true;
	for (var i = 0; i < numberOfButtons; i++){
		if (goalArray[i]) {
			empty = false;
			break;
		}
	}
	if(empty){
		startGame();
		console.log("Empty game generated")
	} 
}

function draw() {
	background(235,235,235);
	// drawText();
	for (var i = 0; i < numberOfButtons; i++){
		buttons[i].update();
		buttons[i].show();
	}
	if (completed()){
		console.log("DONE!");
		console.log(goalArray.toString())
		startGame();
	}
}

function completed(){
	for (var i = 0; i < numberOfButtons; i++){
		if(currentArray[i] !== goalArray[i]){
			return false;
		}
	}
	return true;
}

function mousePressed(){
	for (var i = 0; i < numberOfButtons; i++){
		if (dist(mouseX, mouseY, buttons[i].loc.x, buttons[i].loc.y) < buttons[i].loc.z){
			currentArray = buttons[i].applyRule(currentArray);
		}
	} 											//If button clicked, apply rules current array
}

function drawText(){
	fill(0);
	textSize(30);
	textAlign(CENTER);
	rectMode(CENTER);
	text(numberOfButtons.toString() + " buttons", width/2,50);
}