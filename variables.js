// Difficulty settings
var invertRule = true;
var incTarget = true;
var numberOfTargets = 2;
var numberOfButtons = 6;
var numberOfMoves = 3;

var gamesCompleted = 0;
var gameUnlock = 8;
var currentDifficulty;
var minNumberOfButtons = 4;
var maxNumberOfButtons = 20;

// Animation Values
var completeAnimation = false;
var refreshAnimation = true;
var animationSpeed = 10;
var animationSize;

// Game arrays
var buttons = [];
var orderOfPresses = [];
var goalArray = [];
var currentArray = [];

// Location Values
var maxColVertical = 2;
var maxColHorizontal = 4;
var totalRows;
var totalCols;
var maxColNum;
var buttonSize;

// Colours
var backgroundColor;
var mainColor;
var accentColor;