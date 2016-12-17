var numberOfButtons = 6;
var maxNumberWide = 2;
var numberOfMoves = numberOfButtons - 1;
var minNumberOfButtons = 3;
var maxNumberOfButtons = 8;

var completeAnimation = false;
var refreshAnimation = true;
var animationSpeed = 10;
var animationSize;

var buttons = [];
var goalArray = [];
var currentArray = [];

function setup() {
	createCanvas(900, 2000);
	noStroke()
	startGame();
	animationSize = buttons[0].loc.z;
}

function startGame(){
	for (var i = 0; i < numberOfButtons; i++){
		buttons[i] = new Button(i,numberOfButtons);
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
	if(completeAnimation) runCompleteAnimation();
	else if (refreshAnimation) runRefreshAnimation();
	else {
		for (var i = 0; i < numberOfButtons; i++){
			buttons[i].update();
			buttons[i].show(0);
		}
		if (completed()){
			setTimeout(waitBeforeAnimation,200);
			// completeAnimation = true;
		}
		pressRandomButtons();
	}
	drawText();
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
		if (dist(mouseX, mouseY, buttons[i].loc.x, buttons[i].loc.y) < buttons[i].loc.z/2){
			currentArray = buttons[i].applyRule(currentArray);
		}
	} 											//If button clicked, apply rules current array
	if (dist(mouseX, mouseY,((width/2)-50), 40) < 30 && numberOfButtons > minNumberOfButtons){
		animationSize = buttons[0].loc.z;
		refreshAnimation = true;
		numberOfButtons--;
		startGame();
	}
	if (dist(mouseX, mouseY,((width/2)+50), 40) < 30 && numberOfButtons < maxNumberOfButtons){
		animationSize = buttons[0].loc.z;
		refreshAnimation = true;
		numberOfButtons++;
		startGame();
	}
	// if (dist(mouseX, mouseY,width-150,50) < 50){
	// 	if(maxNumberWide === 2) {
	// 		maxNumberWide = 4;
	// 		maxNumberOfButtons = 20;
	// 	}
	// 	else if (maxNumberWide === 4) {
	// 		maxNumberWide = 2;
	// 		maxNumberOfButtons = 10;
	// 	}
	// 	for (var i = 0; i < numberOfButtons; i++){
	// 		buttons[i].recalculateLocation();
	// 	}
	// }
	// if (dist(mouseX, mouseY,150,50) < 50){
	// 	for (var i = 0; i < numberOfButtons; i++){
	// 		currentArray[i] = false;
	// 	}
	// }
}

function waitBeforeAnimation(){
	completeAnimation = true;
}

function pressRandomButtons(){
	// if (frameCount % 20 === 0){
	// 	var randomNumber = int(random(numberOfButtons));
	// 	console.log(randomNumber.toString())
	// 	currentArray = buttons[randomNumber].applyRule(currentArray);
	// }
}