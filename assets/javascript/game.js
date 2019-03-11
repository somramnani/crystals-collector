//__________________________________________________________
//GLOBAL VARIABLES
//__________________________________________________________

// Creating variables to hold the number of wins, losses, guessCount, and the array for the users guesses. 
var wins = 0;
var losses = 0;

//Random Number
var random = Math.floor(Math.random() * 120) + 19;

// var crystalRandomNum = Math.floor(Math.random() * 1) + 8;
var score = 0;

//__________________________________________________________
//GAME FUNCTION
//__________________________________________________________
$(document).ready(function() {


	
	var random2 =  Math.floor(Math.random() *10 ) +1;
	var newP = $("<p>");

	// Displays the random number in the div with the ID = computerscore-text
	$("#computerscore").text(random);


	var numberOptions = [10, 5, 3, 7];
	var crystalButtons = $(".crystalbtn");

	// for (var i = 0; i < crystalButtons.length; i++){
	// 	var crystalButtonValue  = this.value;
	// 	var value = crystalButtonValue[i];
	// 	value = Math.floor(Math.random() * 1) + 8;

	// 	console.log(crystalButtons);
		
	// }
	
	
	$(".crystalbtn").on("click", function(){
			var crystalValue = 		parseInt(this.value) ;
			
			// function reset(score,random){
			//   //Reset the Score
   //   score = 0;
   //   $("#score").html(score);
  
   //   //Reset the random Number
   //   random = Math.floor(Math.random() * 120) + 19;
   //    $("#computerscore").text(random);
	
			// }
	
	

		score+= crystalValue;
		console.log("Crystal 1: "+ crystalValue);
		console.log(score);
		$("#score").html(score);

		if (score === random) {
			wins++;
   $("#wins").html(wins);



   //Reset the Score
   score = 0;
   $("#score").html(score);

   //Reset the random Number
   random = Math.floor(Math.random() * 120) + 19;
    $("#computerscore").text(random);

		}
	
		else if (score >= random) {
			losses++;
   $("#losses").text(losses);
   
    //Reset the Score
    score = 0;
    $("#score").html(score);
 
    //Reset the random Number
    random = Math.floor(Math.random() * 120) + 19;
     $("#computerscore").text(random);
  }
  
		
	
		
	

	});

});

