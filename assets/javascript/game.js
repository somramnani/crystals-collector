//__________________________________________________________
//VARIABLES
//__________________________________________________________


// Creating variables to hold the number of wins, losses, guessCount, and the array for the users guesses. 
var wins = 0;
var losses = 0;
var guessCount = 9;
var currentGuesses  = [];



// Create variables that hold references to the places in the HTML where we want to display things.

// var userChoiceText = document.getElementById("userchoice-text");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");
// var guessText =  document.getElementById("guess-text");

//Random Number
var random = Math.floor(Math.random() * 120) + 19;
// var crystalRandomNum = Math.floor(Math.random() * 1) + 8;



//__________________________________________________________
//GAME FUNCTION
//__________________________________________________________
$(document).ready(function() {
	var score = 0;
	var random2 =  Math.floor(Math.random() *10 ) +1;
	var newP = $("<p>");

	// Displays the random number in the div with the ID = computerscore-text
	$("#computerscore-text").text(random);

	// crystal 1 Button
	$("#crystal1").on("click", function() {
		crystal1 = random;
		score += crystal1;
		$("#score").append(score);

		console.log(crystal1);
	});


	// crystal 2 Button
	$("#crystal2").on("click", function() {
		crystal2 = random2;
		score += crystal2;
		$("#score").append(crystal2).html(score);
		console.log(crystal2);
	});


	// crystal 3 Button
	$("#crystal3").on("click", function() {
		crystal3 = Math.floor(Math.random() *10 ) + 1;
		score += crystal3;
		$("#score").append(crystal3).html(score);		
		console.log(crystal3);
	});

		// crystal 3 Buttons
		$("#crystal4").on("click", function() {
			crystal4 = Math.floor(Math.random() *10 ) + 1;
			score += crystal4;
			$("#score").append(crystal4).html(score);		
			console.log(crystal4);
		});



		if ( score === random){
			alert("You won");
		}









});