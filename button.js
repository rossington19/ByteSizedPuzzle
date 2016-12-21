function Button(num){
	locationParameters();	
	this.NUMBER_OF_TARGETS = 2;
	this.mode = 0;
	this.border = 30;
	this.targets = [];
	this.loc = calculateLocation(num);
	this.currentColor = backgroundColor;
	this.goalColor = mainColor;


	this.update = function(){
		this.goalColor = color(mainColor);
		this.currentColor = color(backgroundColor);
		if (currentArray[num]) this.currentColor = accentColor;
		if(goalArray[num]) this.goalColor = accentColor;	
	}

	this.generateRules = function(){
		switch (this.mode) {
			case 0:
				this.standardRuleSetup();
				break;
			case 1:
				//For inverter button mode
				break;		
			case 2:
				this.NUMBER_OF_TARGETS++;
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
		locationParameters();
		this.loc = calculateLocation(num);
	}

	this.setMode = function(incomingMode){
		this.mode = incomingMode;
	}
}