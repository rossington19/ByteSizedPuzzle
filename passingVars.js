var diffCompleted = 0;
var store_difficulty = 1;
var store_numberOfTargets;
var store_numberOfButtons;
var store_numberOfMoves;
var store_extraTargets;
var store_inverter;

function startUp(){
	if (sessionStorage.getItem("saved_difficulty")){
		store_difficulty = parseInt(sessionStorage.getItem("saved_difficulty"));
		console.log(store_difficulty.toString());
		if (store_difficulty > diffCompleted)
			diffCompleted = store_difficulty;
	}
	updateLevelSelect(0);
}

function updateLevelSelect(num){
	store_difficulty += num;
	document.getElementById("levelNumber").innerHTML = store_difficulty;
	if (store_difficulty === 1)
		document.getElementById("downArrow").classList.add("hidden");
	else
		document.getElementById("downArrow").classList.remove("hidden");
	if (store_difficulty === 16)
		document.getElementById("upArrow").classList.add("hidden");
	else
		document.getElementById("upArrow").classList.remove("hidden");
	if (store_difficulty === diffCompleted+1){
		document.getElementById("upArrow").classList.add("hidden");
		document.getElementById("levelSub").innerHTML = "Solve " + gameUnlock.toString() + " puzzles in a row to complete...";
	} else {
		document.getElementById("levelSub").innerHTML = "Completed!";
	}
	calculateDifficulty();
	displayDifficulty();
}

function calculateDifficulty(){
	switch (store_difficulty){
		case 1:
			store_numberOfTargets = 2;
			store_numberOfButtons = 4;
			store_numberOfMoves = 3;
			store_extraTargets = false;
			store_inverter = false;
			break;
		case 2:
			store_numberOfTargets = 2;
			store_numberOfButtons = 4;
			store_numberOfMoves = 3;
			store_extraTargets = false;
			store_inverter = true;
			break;
		case 3:
			store_numberOfTargets = 2;
			store_numberOfButtons = 5;
			store_numberOfMoves = 3;
			store_extraTargets = true;
			store_inverter = true;
			break;
		case 4:
			store_numberOfTargets = 3;
			store_numberOfButtons = 5;
			store_numberOfMoves = 3;
			store_extraTargets = false;
			store_inverter = false;
			break;
		case 5:
			store_numberOfTargets = 3;
			store_numberOfButtons = 5;
			store_numberOfMoves = 3;
			store_extraTargets = true;
			store_inverter = true;
			break;
		case 6:
			store_numberOfTargets = 3;
			store_numberOfButtons = 6;
			store_numberOfMoves = 3;
			store_extraTargets = false;
			store_inverter = true;
			break;
		case 7:
			store_numberOfTargets = 3;
			store_numberOfButtons = 7;
			store_numberOfMoves = 3;
			store_extraTargets = true;
			store_inverter = false;
			break;
		case 8:
			store_numberOfTargets = 3;
			store_numberOfButtons = 8;
			store_numberOfMoves = 3;
			store_extraTargets = true;
			store_inverter = true;
			break;
	}
}


function displayDifficulty(){
	if(store_inverter){
		document.getElementById("inverter").innerHTML = "ON!";
		document.getElementById("inverter").classList.add("isOn");
	}
	else{
		document.getElementById("inverter").innerHTML = "OFF";
		document.getElementById("inverter").classList.remove("isOn");
	}

	if(store_extraTargets){
		document.getElementById("ExTarg").innerHTML = "ON!";
		document.getElementById("ExTarg").classList.add("isOn");
	}
	else{
		document.getElementById("ExTarg").innerHTML = "OFF";
		document.getElementById("ExTarg").classList.remove("isOn");
	}

	document.getElementById("targets").innerHTML = store_numberOfTargets;
	document.getElementById("buttons").innerHTML = store_numberOfButtons;
	document.getElementById("moves").innerHTML = store_numberOfMoves;
}


function setVars(){
	sessionStorage.setItem("saved_numberOfButtons", store_numberOfButtons);
	sessionStorage.setItem("saved_numberOfTargets", store_numberOfTargets);
	sessionStorage.setItem("saved_numberOfMoves", store_numberOfMoves);
	sessionStorage.setItem("saved_extraTargets", store_extraTargets);
	sessionStorage.setItem("saved_inverter", store_inverter);
	sessionStorage.setItem("saved_difficulty", store_difficulty);
}

function getVars(){
	numberOfButtons = sessionStorage.getItem("saved_numberOfButtons");
	numberOfMoves = sessionStorage.getItem("saved_numberOfMoves");
	numberOfTargets = sessionStorage.getItem("saved_numberOfTargets");
	currentDifficulty = sessionStorage.getItem("saved_difficulty");
	incTarget = (sessionStorage.getItem("saved_extraTargets") === "true");
	invertRule = (sessionStorage.getItem("saved_inverter") === "true");
}