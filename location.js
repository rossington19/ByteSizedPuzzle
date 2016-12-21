function locationParameters() {

	if (windowHeight > windowWidth)				// If vertical layout
		maxColNum = maxColVertical;
	else 											// If horizontal layout
		maxColNum = maxColHorizontal;

	if (numberOfButtons < maxColNum)
		totalCols = numberOfButtons - 1;
	else
		totalCols = maxColNum - 1;
	
	totalRows = Math.ceil(numberOfButtons / maxColNum) - 1;
	buttonSize = (windowHeight)/((totalRows + 1.5)*1.5);		
}

function calculateLocation(num){
	this.PADDING = buttonSize + 30;

	/////////////////// ROWS - Y LOCATION /////////////////////
	this.currentRow = Math.floor(num/maxColNum);
	this.yStartingLoc = height/2 - ((totalRows) * this.PADDING) / 2;
	this.yLocation = this.yStartingLoc + (currentRow * this.PADDING);

	///////////////////// COL - X LOCATION /////////////////////
	if (currentRow === totalRows)
		this.currentRowsNumOfCols =  (numberOfButtons-1) % maxColNum;
	else
		this.currentRowsNumOfCols = totalCols;
	this.currentCol = num % (this.currentRowsNumOfCols+1);
	this.xStartingLoc = width/2 - (this.currentRowsNumOfCols * this.PADDING) / 2;
	this.xLocation = this.xStartingLoc + (this.currentCol * this.PADDING);

	return new p5.Vector(this.xLocation, this.yLocation, buttonSize);
}