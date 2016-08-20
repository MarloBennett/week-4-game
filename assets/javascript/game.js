//assign each character's health points, attack power, and counter attack power
var powers = {
	name: ["Leia Organa", "Padme Amidala", "Rey", "Zam Wessell"],
	healthPoints: [125, 110, 125, 115],
	attackPower: [17, 19, 19, 18],
	counterAttackPower: [20, 21, 16, 19]
}

var imageLeia;
var imagePadme;
var imageRey;
var imageZam;

var selectedCharacter;
var selectedDefender;

var selectedCharacterHP;
var selectedCharacterAP;
var selectedCharacterOriginalAP;
var selectedCharacterCAP;
var selectedCharacterName;

var selectedDefenderHP;
var selectedDefenderAP;
var selectedDefenderCAP;
var selectedDefenderName;

var enemyChosen;

var firstFight;

var numOfBattles = 0;

$(document).ready(function() {

//calls function to initialize game when page is loaded
initializeNewGame();

//initializes a new game
function initializeNewGame() {

	enemyChosen = false;

	firstFight = true;

	//reset powers to original values
	powers.healthPoints = [125, 110, 125, 115];
	powers.attackPower = [17, 19, 19, 18];
	powers.counterAttackPower = [20, 21, 16, 19];

	//put character images and info in chooseCharacter div
	$("<div id='chooseCharacter' />").appendTo("#characters");

	imageLeia = $("<div class='charImg charLeia'> <p>" + powers.name[0] + "</p> <img src='assets/images/leia.jpg'> <p>" + powers.healthPoints[0] + "</p> </div>");
	$("#chooseCharacter").append(imageLeia);
	$(".charLeia").data("identity", powers.name[0]);
	$(".charLeia").attr("data-hp", powers.healthPoints[0]);
	$(".charLeia").attr("data-ap", powers.attackPower[0]);
	$(".charLeia").attr("data-cap", powers.counterAttackPower[0]);

	imagePadme = $("<div class='charImg charPadme'> <p>" + powers.name[1] + "</p> <img src='assets/images/padme.jpg'> <p>" + powers.healthPoints[1] + "</p> </div>");
	$("#chooseCharacter").append(imagePadme);
	$(".charPadme").data("identity", powers.name[1]);
	$(".charPadme").attr("data-hp", powers.healthPoints[1]);
	$(".charPadme").attr("data-ap", powers.attackPower[1]);
	$(".charPadme").attr("data-cap", powers.counterAttackPower[1]);

	imageRey = $("<div class='charImg charRey'> <p>" + powers.name[2] + "</p> <img src='assets/images/rey.jpg'> <p>" + powers.healthPoints[2] + "</p> </div>");
	$("#chooseCharacter").append(imageRey);
	$(".charRey").data("identity", powers.name[2]);
	$(".charRey").attr("data-hp", powers.healthPoints[2]);
	$(".charRey").attr("data-ap", powers.attackPower[2]);
	$(".charRey").attr("data-cap", powers.counterAttackPower[2]);

	imageZam = $("<div class='charImg charZam'> <p>" + powers.name[3] + "</p> <img src='assets/images/zam.jpg'> <p>" + powers.healthPoints[3] + "</p> </div>");
	$("#chooseCharacter").append(imageZam);
	$(".charZam").data("identity", powers.name[3]);
	$(".charZam").attr("data-hp", powers.healthPoints[3]);
	$(".charZam").attr("data-ap", powers.attackPower[3]);
	$(".charZam").attr("data-cap", powers.counterAttackPower[3]);

	selectCharacter();
	battle();
}

function selectCharacter() {

	$(".charImg").on("click", function(event) {

		if ( !$.trim( $("#yourCharacter").html() ).length ) {
		//moves your selection to the your character section if it's empty
			$(this).appendTo("#yourCharacter");
			selectedCharacter = this;
			//capturues your character's stats
			selectedCharacterName = $(this).data("identity");
			selectedCharacterHP = $(this).data("hp");
			selectedCharacterAP = $(this).data("ap");
			selectedCharacterOriginalAP = $(this).data("ap");
			selectedCharacterCAP = $(this).data("cap");
			$(this).addClass("selectedChar");
			//try if else statements to change HP for each character
			
			console.log(selectedCharacter);
			console.log("selected char hp " + selectedCharacterHP);
			console.log("selected char ap " + selectedCharacterAP);
			console.log( "selected car cap " + selectedCharacterCAP);
		}
		else {
			//moves your selection to defender if you've already chosen your character
			$(".noDefender").remove();
			//remove the message that you won an earlier round (if it's there) when you select your next enemy
			$(".youWonRound").remove();
			$(this).appendTo("#defenders");
			//captures defender's stats
			selectedDefender = this;
			selectedDefenderName = $(this).data("identity");
			selectedDefenderHP = $(this).data("hp");
			selectedDefenderAP = $(this).data("ap");
			selectedDefenderCAP = $(this).data("cap");
			$(this).addClass("selectedDef");

			
			console.log(selectedDefender);
			console.log("selected defender hp " + selectedDefenderHP);
			console.log("selected defender AP " + selectedDefenderAP);
			console.log("selected defender cap " + selectedDefenderCAP);
			enemyChosen = true;
		}
		//moves other characters to the enemies section
		$("#chooseCharacter").appendTo("#enemies");
		
		//turns off click event
		//$(".charImg").off("click");
	});
}


//click attack button - 

function battle() {

	$("#fight").on("click", function(event) {


		//warns if no enemy has been selected
		if (!enemyChosen) {
			$("<h5 class='noDefender'>There is no enemy to attack.</h5>").appendTo("#defenders");
		}
		else {
			actualBattle();
		}
		
		function actualBattle() {

			$(".attackReport").remove();
			
			if (firstFight) {
				selectedCharacterAP = selectedCharacterOriginalAP;
			}
			else {
				//increases your character's AP
				selectedCharacterAP = (selectedCharacterAP + selectedCharacterOriginalAP);
			}
			
			//Your HP goes down by defender's CAP damage
			selectedCharacterHP = (selectedCharacterHP - selectedDefenderCAP);
			
			//defender's HP goes down by your AP
			selectedDefenderHP = (selectedDefenderHP - selectedCharacterAP);

			//you attacked defender for your AP damage
			$("<h5 class='attackReport'>You attacked " + selectedDefenderName + " for " + selectedCharacterAP + " damage.</h5>").appendTo("#defenders");

			//defender attacked you for her CAP damage
			$("<h5 class='attackReport'>" + selectedDefenderName + " attacked you back for " + selectedDefenderCAP + " damage.</h5>").appendTo("#defenders");
			
			console.log("selected char hp " + selectedCharacterHP);
			console.log("selected char ap " + selectedCharacterAP);
			console.log("selected defender hp " + selectedDefenderHP);

			firstFight = false;

			if (selectedCharacterHP <= 0) {
				$(".attackReport").remove();
				$("#defenders").children("div:first").remove();
				$("<h5 class='youLost'>You have been defeated! Game over.</h5>").appendTo("#defenders");
				$("#fight").off("click");
			}
			else if (selectedDefenderHP <= 0) {
				$("#defenders").children("div:first").remove();
				$(".attackReport").remove();
				$("<h5 class='youWonRound'>You defeated " + selectedDefenderName + ". You can select another enemy to fight.</h5>").appendTo("#defenders");
				//counts the number of battles
				numOfBattles++;

					if (numOfBattles > 2) {
					//else if no enemies left, you win
					$("#defenders").children("div:first").remove();
					$(".attackReport").remove();
					$(".youWonRound").remove();
					$("<h5 class='youWon'>All enemies are defeated. You win!</h5>").appendTo("#defenders");
					$("#fight").off("click");
					}
			}
			
		}

	});
}

$("#restart").on("click", function(event) {
	
	$(".charImg").remove();
	$(".attackReport").remove();
	$(".youWon").remove();
	$(".youWonRound").remove();
	$(".youLost").remove();
	initializeNewGame();
})

//still need to update HP in character divs

//fix battles no one wins now - think may be fixed
});