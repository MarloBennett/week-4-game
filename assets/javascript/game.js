console.log("Win sequences: Leai - Rey, Zam, Padme; Padme - Rey, Leia, Zam; Rey - Padme, Leia, Zam; Zam - Leia, Rey, Padme");

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

var numOfBattles;

$(document).ready(function() {

//calls function to initialize game when page is loaded
initializeNewGame();

//initializes a new game
function initializeNewGame() {

//assign each character's health points, attack power, and counterattack power
	var powers = {
	name: ["Leia Organa", "Padme Amidala", "Rey", "Zam Wessell"],
	healthPoints: [125, 110, 126, 115],
	attackPower: [17, 22, 20, 21],
	counterAttackPower: [20, 21, 16, 19]
	}

	enemyChosen = false;

	firstFight = true;

	numOfBattles = 0;

	//put character images and info in chooseCharacter div
	$("<div id='chooseCharacter' />").appendTo("#characters");

	imageLeia = $("<div class='charImg charLeia'> <p>" + powers.name[0] + "</p> <img src='assets/images/leia.jpg'> <p class='healthLeia'>" + powers.healthPoints[0] + "</p> </div>");
	$("#chooseCharacter").append(imageLeia);
	$(".charLeia").data("identity", powers.name[0]);
	$(".charLeia").attr("data-hp", powers.healthPoints[0]);
	$(".charLeia").attr("data-ap", powers.attackPower[0]);
	$(".charLeia").attr("data-cap", powers.counterAttackPower[0]);

	imagePadme = $("<div class='charImg charPadme'> <p>" + powers.name[1] + "</p> <img src='assets/images/padme.jpg'> <p class='healthPadme'>" + powers.healthPoints[1] + "</p> </div>");
	$("#chooseCharacter").append(imagePadme);
	$(".charPadme").data("identity", powers.name[1]);
	$(".charPadme").attr("data-hp", powers.healthPoints[1]);
	$(".charPadme").attr("data-ap", powers.attackPower[1]);
	$(".charPadme").attr("data-cap", powers.counterAttackPower[1]);

	imageRey = $("<div class='charImg charRey'> <p>" + powers.name[2] + "</p> <img src='assets/images/rey.jpg'> <p class='healthRey'>" + powers.healthPoints[2] + "</p> </div>");
	$("#chooseCharacter").append(imageRey);
	$(".charRey").data("identity", powers.name[2]);
	$(".charRey").attr("data-hp", powers.healthPoints[2]);
	$(".charRey").attr("data-ap", powers.attackPower[2]);
	$(".charRey").attr("data-cap", powers.counterAttackPower[2]);

	imageZam = $("<div class='charImg charZam'> <p>" + powers.name[3] + "</p> <img src='assets/images/zam.jpg'> <p class='healthZam'>" + powers.healthPoints[3] + "</p> </div>");
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
			//captures your character's stats
			selectedCharacterName = $(this).data("identity");
			selectedCharacterHP = $(this).data("hp");
			selectedCharacterAP = $(this).data("ap");
			selectedCharacterOriginalAP = $(this).data("ap");
			selectedCharacterCAP = $(this).data("cap");
			//changes color of your character's div and text
			$(this).addClass("selectedChar");

			console.log(selectedCharacter);
			console.log("selected char hp " + selectedCharacterHP);
			console.log("selected char ap " + selectedCharacterAP);
			console.log( "selected car cap " + selectedCharacterCAP);
		}
		else {
			//removes the message that there's no one to fight (if it's there)
			$(".noDefender").remove();
			//remove the message that you won an earlier round (if it's there) when you select your next enemy
			$(".youWonRound").remove();
			//moves your selection to defender if you've already chosen your character
			$(this).appendTo("#defenders");
			//captures defender's stats
			selectedDefender = this;
			selectedDefenderName = $(this).data("identity");
			selectedDefenderHP = $(this).data("hp");
			selectedDefenderAP = $(this).data("ap");
			selectedDefenderCAP = $(this).data("cap");
			//changes color of defender's color and text
			$(this).addClass("selectedDef");

			console.log(selectedDefender);
			console.log("selected defender hp " + selectedDefenderHP);
			console.log("selected defender AP " + selectedDefenderAP);
			console.log("selected defender cap " + selectedDefenderCAP);
			enemyChosen = true;
		}
		//moves other characters to the enemies section
		$("#chooseCharacter").appendTo("#enemies");
	});
}


//click attack button 

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

			//removes previous battle numbers from display
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

			//updated HP in character div
			if (selectedCharacterName === "Leia Organa") {
				$(".healthLeia").html(selectedCharacterHP);
			} 
			else if (selectedCharacterName === "Padme Amidala") {
				$(".healthPadme").html(selectedCharacterHP);
			} 
			else if (selectedCharacterName === "Rey") {
				$(".healthRey").html(selectedCharacterHP);
			}
			else if (selectedCharacterName === "Zam Wessell") {
				$(".healthZam").html(selectedCharacterHP);
			}
			
			//defender's HP goes down by your AP
			selectedDefenderHP = (selectedDefenderHP - selectedCharacterAP);

			if (selectedDefenderName === "Leia Organa") {
				$(".healthLeia").html(selectedDefenderHP);
			} 
			else if (selectedDefenderName === "Padme Amidala") {
				$(".healthPadme").html(selectedDefenderHP);
			} 
			else if (selectedDefenderName === "Rey") {
				$(".healthRey").html(selectedDefenderHP);
			}
			else if (selectedDefenderName === "Zam Wessell") {
				$(".healthZam").html(selectedDefenderHP);
			}

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
					// if no enemies left, you win
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
});