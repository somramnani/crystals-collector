//__________________________________________________________
//GLOBAL VARIABLES
//__________________________________________________________

// Creating variables to hold the number of wins, losses, guessCount, and the array for the users guesses. 
var wins = 0;
var losses = 0;

//Random Number
var random = Math.floor(Math.random() * 120) + 19;

//Generate random number for each crystal
var num1 = Math.floor(Math.random()*12+1);
var num2 = Math.floor(Math.random()*12+1);
var num3 = Math.floor(Math.random()*12+1);
var num4 = Math.floor(Math.random()*12+1);

//Score Variable
var score = 0;

//__________________________________________________________

	$(document).ready(function(){
	
	// Displays the random number in the div with the ID = computerscore.
	$("#computerscore").text(random);

	//__________________________________________________________
	// RESET FUNCTION
	//__________________________________________________________ 
		
	function reset(){
		// Reset the Score
  	score = 0;
    $("#score").html(score);
  
    //Reset the random Number
    random = Math.floor(Math.random() * 120) + 19;
		$("#computerscore").text(random);
			
		//Reset the buttons to a different random Number
		 num1 = Math.floor(Math.random()*12+1);
		 num2 = Math.floor(Math.random()*12+1);
		 num3 = Math.floor(Math.random()*12+1);
		 num4 = Math.floor(Math.random()*12+1);
	}
//__________________________________________________________


//__________________________________________________________
//CONDITIONAL STATEMENT FUNCTION
//__________________________________________________________
	// A function with the Conditional Statements for the Wins & Losses.		
		function winVsLose(){
			//If score is correct , you WIN.	
			if (score === random){
				wins++;
			  $("#wins").html(wins);
	
				//Calls the Reset Function
				reset();	
			}
		 
		 	// If score is goes above the target number , you LOSE.	
			else if (score >= random){
				losses++;
				$("#losses").text(losses);
				
				//Calls the Reset Function
				reset();
			}
		}
	//__________________________________________________________

	//__________________________________________________________
	//BUTTON FUNCTIONS
	//__________________________________________________________

	//CRYSTAL BUTTON 1
	$("#crystal1").on("click", function(){
		score += num1;
		$("#score").html(score);
		winVsLose();
		console.log(score);
		console.log("Crystal 1 Button is:" + num1);
	});
	
	//CRYSTAL BUTTON 2
	$("#crystal2").on("click", function(){
		score += num2;
		$("#score").html(score);
		winVsLose();

		console.log("Crystal 2 Button is:" + num2);
	});

	//CRYSTAL BUTTON 3
	$("#crystal3").on("click", function(){
		score += num3;
		$("#score").html(score);
		winVsLose();

		console.log("Crystal 3 Button is:" + num3);
	});

	//CRYSTAL BUTTON 4
	$("#crystal4").on("click", function(){
		score += num4;
		$("#score").html(score);
		winVsLose();
			
		console.log("Crystal 4 Button is:" + num4);	
	});  		
//__________________________________________________________
	
});
	

