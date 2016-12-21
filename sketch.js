function setup() {
	createCanvas(windowWidth, windowHeight);
	backgroundColor = color(235);
	mainColor = color(140);
	accentColor = color(239, 95, 95);
	noStroke()
	startGame();
	animationSize = buttonSize;
}

function startGame(){
	orderOfPresses = [];
	for (var i = 0; i < numberOfButtons; i++){
		buttons[i] = new Button(i);
		goalArray[i] = false;
		currentArray[i] = false;
		buttons[i].generateRules();		
	}											//Generate Rules & set arrays to false
	if (incTarget === true){
		var randomNumber = int(random(numberOfButtons));
		buttons[randomNumber].setMode(2);
		buttons[randomNumber].generateRules();
	}
	if (invertRule === true){
		var randomNumber = int(random(numberOfButtons));
		buttons[randomNumber].setMode(1);
	}
	for (var i = 0; i < numberOfButtons; i++){
		orderOfPresses[i] = i;
	}
	shuffle(orderOfPresses,true);
	// console.log(orderOfPresses.toString());		//result
	for (var i = 0; i < numberOfMoves; i++){
		goalArray = buttons[orderOfPresses[i]].applyRule(goalArray);	
	}
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
	background(backgroundColor);
	if(completeAnimation) runCompleteAnimation();
	else if (refreshAnimation) runRefreshAnimation();
	else {
		for (var i = 0; i < numberOfButtons; i++){
			buttons[i].update();
			buttons[i].show(0);
		}
		if (completed()){
			setTimeout(waitBeforeAnimation,200);
		}
		pressRandomButtons();
	}
	drawText();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (var i = 0; i < numberOfButtons; i++){
  	buttons[i].recalculateLocation();
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
		if (dist(mouseX, mouseY, buttons[i].loc.x, buttons[i].loc.y) < buttons[i].loc.z/2){
			currentArray = buttons[i].applyRule(currentArray);
		}
	} 											//If button clicked, apply rules current array
	if (dist(mouseX, mouseY,((width/2)-50), 40) < 30 && numberOfButtons > minNumberOfButtons){
		animationSize = buttonSize;
		refreshAnimation = true;
		numberOfButtons--;
		startGame();
	}
	if (dist(mouseX, mouseY,((width/2)+50), 40) < 30 && numberOfButtons < maxNumberOfButtons){
		animationSize = buttonSize;
		refreshAnimation = true;
		numberOfButtons++;
		startGame();
	}
	if (dist(mouseX, mouseY,width-150,50) < 50){
		startGame();
	}
	if (dist(mouseX, mouseY,150,50) < 50){
		for (var i = 0; i < numberOfButtons; i++){
			currentArray[i] = false;
		}
	}
}

function waitBeforeAnimation(){
	completeAnimation = true;
}

function pressRandomButtons(){
	// if (frameCount % 5 === 0){
	// 	var randomNumber = int(random(numberOfButtons));
	// 	console.log(randomNumber.toString())
	// 	currentArray = buttons[randomNumber].applyRule(currentArray);
	// }
}