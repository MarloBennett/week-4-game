//assign each character's health points, attack power, and counter attack power
var powers = {
	name: ["Leia Organa", "Padme Amidala", "Rey", "Zam Wessell"],
	healthPoints: [130, 110, 135, 100],
	attackPower: [10, 13, 12, 14],
	counterAttackPower: [20, 25, 15, 30]
}

//will be set to true when the game restarts
//var restartGame = false;

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

var enemyChosen = false;

$( document ).ready(function() {

//calls function to initialize game when page is loaded
initializeNewGame();

//initializes a new game
function initializeNewGame() {

	//restartGame = false;

//put character images and info in chooseCharacter div
	$("<div id='chooseCharacter' />").appendTo("#characters")


//SELF: add power values as classes, use parseint to get value later crystal file 12 counter = counter + parseInt($(this).data('num'));
	imageLeia = $("<div class='charImg charLeia'> <p>" + powers.name[0] + "</p> <img src='assets/images/leia.jpg'> <p>" + powers.healthPoints[0] + "</p> </div>");
	$("#chooseCharacter").append(imageLeia);
	$(".charLeia").data("identity", powers.name[0]);
	$(".charLeia").attr("data-hp", powers.healthPoints[0]);
	$(".charLeia").attr("data-ap", powers.attackPower[0]);
	$(".charLeia").attr("data-cap", powers.counterAttackPower[0]);

	//test comment for git 

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

//reset powers to original values
	powers.healthPoints = [130, 110, 135, 100];
	powers.attackPower = [10, 13, 12, 14];
	powers.counterAttackPower = [20, 25, 15, 30];

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
			console.log(selectedCharacter);
			console.log("selected char hp " + selectedCharacterHP);
			console.log("selected char ap " + selectedCharacterAP);
			console.log( "selected car cap " + selectedCharacterCAP);
		}
		else {
			//moves your selection to defender if you've already chosen your character
			$(".noDefender").remove();
			$(this).appendTo("#defenders");
			//captures defender's stats
			selectedDefender = this;
			selectedDefenderName = $(this).data("identity");
			selectedDefenderHP = $(this).data("hp");
			selectedDefenderAP = $(this).data("ap");
			selectedDefenderCAP = $(this).data("cap");
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
		
		//var firstFight = true;

		//warns if no enemy has been selected
		if (!enemyChosen) {
			$("<h5 class='noDefender'>There is no enemy to attack.</h5>").appendTo("#defenders");
		}
		else {
			actualBattle ();
		}
		
		function actualBattle() {

			$(".attackReport").remove();
			
			//Your HP goes down by defender's CAP damage
			selectedCharacterHP = (selectedCharacterHP - selectedDefenderCAP);
			
			//defender's HP goes down by your AP
			selectedDefenderHP = (selectedDefenderHP - selectedCharacterAP);
			
			//you attacked defender for your AP damage
			$("<h5 class='attackReport'>You attacked " + selectedDefenderName + " for " + selectedCharacterAP + " damage.</h5>").appendTo("#defenders");

			//defender attacked you for her CAP damage
			$("<h5 class='attackReport'>" + selectedDefenderName + " attacked you back for " + selectedDefenderCAP + " damage.</h5>").appendTo("#defenders");
			console.log("selected char hp " + selectedCharacterHP);

			//increases your character's AP
			selectedCharacterAP = (selectedCharacterAP + selectedCharacterOriginalAP);
			console.log("selected char ap " + selectedCharacterAP);
			console.log("selected defender hp " + selectedDefenderHP);

			if (selectedCharacterHP <= 0) {
				$("<h5 class='youLost'>You have been defeated! Game over.</h5>").appendTo("#defenders");
				$("#fight").off("click");
			}
			else if (selectedDefenderHP <= 0) {
				$(".attackReport").remove();
				$("<h5 class='youWonRound'>You defeated " + selectedDefenderName + ". You can select another enemy to fight.</h5>").appendTo("#defenders");
				//need to remove that div and message
				
			}
			//else if no enemies left, you win
		}

	});
}

//still need to update HP in character divs

//still need to change color of divs when moved to defender or enemy section

//include a restart button
});