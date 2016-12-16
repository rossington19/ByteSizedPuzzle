function Button(num,numberOfButtons){
	this.NUMBER_OF_TARGETS = 3;
	this.border = 15;
	this.targets = [];
	this.loc = calculateLocation(num, numberOfButtons);
	this.currentColor = color(235,235,235);
	this.goalColor = color(111);


	this.update = function(){
			this.goalColor = color(111);
			this.currentColor = color(235,235,235);
		if (currentArray[num]) this.currentColor = color(95, 185, 255); 
		if(goalArray[num]) this.goalColor = color(95, 185, 255);	
	}

	this.generateRules = function(){
		for (var i = 0; i < this.NUMBER_OF_TARGETS; i++){
			this.targets[i] = int(random(numberOfButtons)); 
		}
	}

	this.applyRule = function(arrayToChange){
		for (var i = 0; i < this.NUMBER_OF_TARGETS; i++){
			arrayToChange[this.targets[i]] = !arrayToChange[this.targets[i]];
		}
		return arrayToChange;
	}

	this.show = function(){
		rectMode(CENTER);
		fill(this.goalColor);
		ellipse(this.loc.x, this.loc.y, this.loc.z, this.loc.z);
		fill(this.currentColor);
		ellipse(this.loc.x, this.loc.y, this.loc.z - this.border, this.loc.z - this.border);
	}
}