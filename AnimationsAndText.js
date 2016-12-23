function runCompleteAnimation(){
	animationSize += animationSpeed;
	for (var i = 0; i < numberOfButtons; i++){
		buttons[i].show(animationSize);
	}
	if(buttons[0].loc.z - animationSize < 0){
		completeAnimation = false;
		refreshAnimation = true;
		animationSize = buttons[0].loc.z;
		gamesCompleted++;
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
	if (gamesCompleted >= gameUnlock)
		fill(accentColor);
	else
		fill(mainColor);
	text(gamesCompleted.toString() + " / " + gameUnlock.toString(), width/2,50);

	fill(mainColor);
	rectMode(LEFT);
	text("Menu",150,50);
	rectMode(RIGHT);
	text("Restart",width-150,50);
}