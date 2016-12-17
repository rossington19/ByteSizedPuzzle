function runCompleteAnimation(){
	animationSize += animationSpeed;
	for (var i = 0; i < numberOfButtons; i++){
		buttons[i].show(animationSize);
	}
	if(buttons[0].loc.z - animationSize < 0){
		completeAnimation = false;
		refreshAnimation = true;
		animationSize = buttons[0].loc.z;
		startGame();
	}
}

function runRefreshAnimation(){
	animationSize -= animationSpeed;
	for (var i = 0; i < numberOfButtons; i++){
		buttons[i].update();
		buttons[i].show(animationSize);
	}
	if(animationSize < 0){
		refreshAnimation = false;
		animationSize = 0;
	}
}

function drawText(){
	textSize(30);
	textAlign(CENTER);
	rectMode(CENTER);
	fill(111);	
	text(numberOfButtons.toString(), width/2,50);
	if(numberOfButtons > minNumberOfButtons){
		fill(111);
		ellipse((width/2)-50, 40, 40, 40);
		fill(235);
		text("-", (width/2)-50,48);
	}
	if(numberOfButtons < maxNumberOfButtons){
		fill(111);
		ellipse((width/2)+50, 40, 40, 40);
		fill(235);
		text("+", (width/2)+50,50);
	}
	// fill(111);
	// rectMode(LEFT);
	// text("Restart",150,50);
	// rectMode(RIGHT);
	// text("Rotate",width-150,50);
}