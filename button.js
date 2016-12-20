function Button(num,numberOfButtons){
	this.NUMBER_OF_TARGETS = 2;
	this.mode = 0;
	this.modeDifficulty = 3;
	this.border = 15;
	this.targets = [];
	this.loc = calculateLocation(num, numberOfButtons);
	this.currentColor = color(235);
	this.goalColor = color(111);


	this.update = function(){
		this.goalColor = color(111);
		this.currentColor = color(235);
		if (currentArray[num]) this.currentColor = color(95, 185, 255); 
		if(goalArray[num]) this.goalColor = color(95, 185, 255);	
	}

	this.generateRules = function(){
		switch (this.mode) {
			case 0:
				this.standardRuleSetup();
				break;
			case 1:
				//For inverter button mode
				this.targets[0] = 0;
				break;		
			case 2:
				this.NUMBER_OF_TARGETS = this.modeDifficulty;
				this.standardRuleSetup();
				break;
		}
	}

	this.standardRuleSetup = function(){
		for (var i = 0; i < this.NUMBER_OF_TARGETS; i++){
			this.targets[i] = int(random(numberOfButtons)); 
		}

		if (this.NUMBER_OF_TARGETS % 2 === 0){
			this.testArray = [];
			for (i = 0; i < numberOfButtons; i++){
				this.testArray[i] = false;
			}
			this.testArray = this.applyRule(this.testArray);
			this.empty = true;
			for (var i = 0; i < numberOfButtons; i++){
				if (this.testArray[i]) {
					this.empty = false;
					break;
				}
			}
			if(this.empty){
				this.generateRules();
			}
		}
	}

	this.applyRule = function(arrayToChange){
		switch (this.mode) {
			case 1:
				for (var i = 0; i < arrayToChange.length; i++){
					arrayToChange[i] = !arrayToChange[i];
				}
				break;
			default: //case 0 and 2
				for (var i = 0; i < this.NUMBER_OF_TARGETS; i++){
					arrayToChange[this.targets[i]] = !arrayToChange[this.targets[i]];
				}
				break;
		}
		return arrayToChange;
	}

	this.show = function(sizeAlter){
		rectMode(CENTER);
		fill(this.goalColor);
		ellipse(this.loc.x, this.loc.y, this.loc.z - sizeAlter, this.loc.z - sizeAlter);
		fill(this.currentColor);
		ellipse(this.loc.x, this.loc.y, this.loc.z - this.border - sizeAlter, this.loc.z - this.border - sizeAlter);
	}

	this.recalculateLocation = function(){
		this.loc = calculateLocation(num, numberOfButtons);
	}

	this.setMode = function(incomingMode){
		this.mode = incomingMode;
	}
}