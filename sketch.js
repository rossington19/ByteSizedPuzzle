function setup() {
	getVars();
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
		buttons[i].NUMBER_OF_TARGETS = numberOfTargets;
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
		// console.log("Empty game generated")
		startGame();
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

	if (dist(mouseX, mouseY,width-150,50) < 50){
		gamesCompleted = 0;
		startGame();
	}
	if (dist(mouseX, mouseY,150,50) < 50){
		if(gamesCompleted >= gameUnlock){
			sessionStorage.setItem("saved_difficulty", currentDifficulty);
		} else {
			sessionStorage.setItem("saved_difficulty", currentDifficulty-1);
		}
		window.location.href = "index.html"
	}
}

function waitBeforeAnimation(){
	completeAnimation = true;
}