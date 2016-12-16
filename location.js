function calculateLocation(num, numberOfButtons){
	this.MAX_NUM_WIDE = 2;
	this.BUTTON_SIZE = 150;
	this.PADDING = this.BUTTON_SIZE + 50;

	this.totalRows = int(numberOfButtons / this.MAX_NUM_WIDE);

	if (numberOfButtons > this.MAX_NUM_WIDE){
		this.totalCols =  this.MAX_NUM_WIDE - 1;
		if ((num/this.MAX_NUM_WIDE)>=this.totalRows){
			this.totalCols = (numberOfButtons % MAX_NUM_WIDE) - 1;
		}
	} else {
		this.totalCols = numberOfButtons - 1;
	}
	if (numberOfButtons % this.MAX_NUM_WIDE === 0){
		this.totalRows -= 1;
	}

	this.currentCol = num % this.MAX_NUM_WIDE;
	this.currentRow = int(num/this.MAX_NUM_WIDE);

	this.xStartingLoc = width/2 - (this.totalCols * this.PADDING) / 2;
	this.yStartingLoc = height/2 - ((this.totalRows) * this.PADDING) / 2;

	this.xLocation = this.xStartingLoc + (currentCol * this.PADDING);
	this.yLocation = this.yStartingLoc + (currentRow * this.PADDING);

	return new p5.Vector(xLocation, yLocation, BUTTON_SIZE);
}