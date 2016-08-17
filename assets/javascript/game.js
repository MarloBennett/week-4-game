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
var selectedCharacterCAP;

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
	$(".charLeia").attr("data-hp", powers.healthPoints[0]);
	$(".charLeia").attr("data-ap", powers.attackPower[0]);
	$(".charLeia").attr("data-cap", powers.counterAttackPower[0]);

	//test comment for git 

	imagePadme = $("<div class='charImg charPadme'> <p>" + powers.name[1] + "</p> <img src='assets/images/padme.jpg'> <p>" + powers.healthPoints[1] + "</p> </div>");
	$("#chooseCharacter").append(imagePadme);
	$(".charLeia").attr("data-hp", powers.healthPoints[1]);
	$(".charLeia").attr("data-ap", powers.attackPower[1]);
	$(".charLeia").attr("data-cap", powers.counterAttackPower[1]);

	imageRey = $("<div class='charImg charRey'> <p>" + powers.name[2] + "</p> <img src='assets/images/rey.jpg'> <p>" + powers.healthPoints[2] + "</p> </div>");
	$("#chooseCharacter").append(imageRey);
	$(".charLeia").attr("data-hp", powers.healthPoints[2]);
	$(".charLeia").attr("data-ap", powers.attackPower[2]);
	$(".charLeia").attr("data-cap", powers.counterAttackPower[2]);

	imageZam = $("<div class='charImg charZam'> <p>" + powers.name[3] + "</p> <img src='assets/images/zam.jpg'> <p>" + powers.healthPoints[3] + "</p> </div>");
	$("#chooseCharacter").append(imageZam);
	$(".charLeia").attr("data-hp", powers.healthPoints[3]);
	$(".charLeia").attr("data-ap", powers.attackPower[3]);
	$(".charLeia").attr("data-cap", powers.counterAttackPower[3]);

//reset powers to original values
/*	leiaPowers.healthPoints = 150;
	leiaPowers.attackPower = 10;
	leiaPowers.counterAttackPower = 20;

	padmePowers.healthPoints = 90;
	padmePowers.attackPower = 8;
	padmePowers.counterAttackPower = 35;

	reyPowers.healthPoints = 135;
	reyPowers.attackPower = 12;
	reyPowers.counterAttackPower = 15;

	zamPowers.healthPoints = 85;
	zamPowers.attackPower = 14;
	zamPowers.counterAttackPower = 30;*/

	selectCharacter();
	battle();
}

function selectCharacter() {

	$(".charImg").on("click", function(event) {

		if ( !$.trim( $("#yourCharacter").html() ).length ) {
		//moves your selection to the your character section if it's empty
			$(this).appendTo("#yourCharacter");
			selectedCharacter = this;
			selectedCharacterHP = $(this).data("hp");
			selectedCharacterAP = $(this).data("ap");
			selectedCharacterCAP = $(this).data("cap");
			console.log(selectedCharacter);
			console.log(selectedCharacterHP);
			console.log(selectedCharacterAP);
			console.log(selectedCharacterCAP);
		}
		else {
			//moves your selection to defender if you've already chosen your character
			$(".noDefender").remove();
			$(this).appendTo("#defenders");
			selectedDefender = this;
			console.log(selectedDefender);
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
		

	});
}


//should increase your attack power by its base power (show text message with HP) and decrease his HP by your current attack power (number by his images lowers accordingly)

//enemy immediately counter attacks - should decrease your health points by the defender's counter attack power (show text message with his CAP, HP number by your image lowers accordingly)

//keep going until your health points are less than zero (lose) - GAME OVER

//or defender's HP is less than zero - you win this round (text msg that you defeated him and to choose another enemy). defender disappears from screen.

//click a new enemy but your attack power and HP don't reset

//when there are no enemies left you win

//include a restart button
});