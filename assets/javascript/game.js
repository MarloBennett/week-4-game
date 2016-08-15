//assign each character's health points, attack power, and counter attack power
var leiaPowers = {
	name: "Leia Organa",
	healthPoints: 150,
	attackPower: 10,
	counterAttackPower: 20,
}

var padmePowers = {
	name: "Padme Amidala",
	healthPoints: 90,
	attackPower: 8,
	counterAttackPower: 35
}

var reyPowers = {
	name: "Rey",
	healthPoints: 135,
	attackPower: 12,
	counterAttackPower: 15
}

var zamPowers = {
	name: "Zam Wessell",
	healthPoints: 85,
	attackPower: 14,
	counterAttackPower: 30
}

//will be set to true when the game restarts
var restartGame = false;

var imageLeia;
var imagePadme;
var imageRey;
var imageZam;

$( document ).ready(function() {

//calls function to initialize game when page is loaded
initializeNewGame();

//initializes a new game
function initializeNewGame() {

	restartGame = false;

//put character images and info in chooseCharacter div
	$("<div id='chooseCharacter' />").appendTo("#characters")

	imageLeia = $("<div class='charImg charLeia'> <p>" + leiaPowers.name + "</p> <img src='assets/images/leia.jpg'> <p>" + leiaPowers.healthPoints + "</p> </div>");
	$("#chooseCharacter").append(imageLeia);

	imagePadme = $("<div class='charImg charPadme'> <p>" + padmePowers.name + "</p> <img src='assets/images/padme.jpg'> <p>" + padmePowers.healthPoints + "</p> </div>");
	$("#chooseCharacter").append(imagePadme);

	imageRey = $("<div class='charImg charRey'> <p>" + reyPowers.name + "</p> <img src='assets/images/rey.jpg'> <p>" + reyPowers.healthPoints + "</p> </div>");
	$("#chooseCharacter").append(imageRey);

	imageZam = $("<div class='charImg charZam'> <p>" + zamPowers.name + "</p> <img src='assets/images/zam.jpg'> <p>" + zamPowers.healthPoints + "</p> </div>");
	$("#chooseCharacter").append(imageZam);

//reset powers to original values
	leiaPowers.healthPoints = 150;
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
	zamPowers.counterAttackPower = 30;

	selectCharacter();
}

function selectCharacter() {

	$(".charImg").on("click", function(event) {

		//moves your selection to the your character section
		$(this).appendTo("#yourCharacter");
		
		//moves other character to the enemies section
		$("#chooseCharacter").appendTo("#enemies");
		
		//turns off click event
		$(".charImg").off("click");
	//	var chosenCharacter = $(this);

	//	$("#yourCharacter").append(chosenCharacter);
});

//	$("#yourCharacter").append(imageLeia);
//	$("#enemies").append(imagePadme, imageRey, imageZam);
//	selectDefender();
//})
}

//move your character to "your character" and other characters to enemies section
/*function selectCharacter() {

$(".charLeia").on("click", function(event) {

	$("#yourCharacter").append(imageLeia);
	$("#enemies").append(imagePadme, imageRey, imageZam);
	selectDefender();
})

$(".charPadme").on("click", function(event) {

	$("#yourCharacter").append(imagePadme);
	$("#enemies").append(imageLeia, imageRey, imageZam);
	selectDefender();
})

$(".charRey").on("click", function(event) {

	$("#yourCharacter").append(imageRey);
	$("#enemies").append(imageLeia, imagePadme, imageZam);
	selectDefender();
})

$(".charZam").on("click", function(event) {

	$("#yourCharacter").append(imageZam);
	$("#enemies").append(imageLeia, imagePadme, imageRey);
	selectDefender();
})
	

}
//select enemy and move to defender area

function selectDefender() {
	
	$(".charLeia").on("click", function(event) {
		$("#defenders").append(imageLeia);
	})

	$(".charPadme").on("click", function(event) {
		$("#defenders").append(imagePadme);
	})

	$(".charRey").on("click", function(event) {
		$("#defenders").append(imageRey);
	})

	$(".charZam").on("click", function(event) {
		$("#defenders").append(imageZam);
	})


}*/


//click attack button - 

// if you try to select attack when there is no one there, txt msg that says there's no enemy to fight

//should increase your attack power by its base power (show text message with HP) and decrease his HP by your current attack power (number by his images lowers accordingly)

//enemy immediately counter attacks - should decrease your health points by the defender's counter attack power (show text message with his CAP, HP number by your image lowers accordingly)

//keep going until your health points are less than zero (lose) - GAME OVER

//or defender's HP is less than zero - you win this round (text msg that you defeated him and to choose another enemy). defender disappears from screen.

//click a new enemy but your attack power and HP don't reset

//when there are no enemies left you win

//include a restart button
});