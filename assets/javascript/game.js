//assign each character's health points, attack power, and counter attack power
var leia = {
	healthPoints: 150,
	attackPower: 10,
	counterAttackPower: 20
}

var padme = {
	healthPoints: 90,
	attackPower: 8,
	counterAttackPower: 35
}

var rey = {
	healthPoints: 135,
	attackPower: 12,
	counterAttackPower: 15
}

var zam = {
	healthPoints: 85,
	attackPower: 14,
	counterAttackPower: 30
}
//onclick function to select your character

//move your character to "your character" and other characters to enemies section

//onclick function to select enemy and move to defender area

//click attack button - 

// if you try to select attack when there is no one there, txt msg that says there's no enemy to fight

//should increase your attack power by its base power (show text message with HP) and decrease his HP by your current attack power (number by his images lowers accordingly)

//enemy immediately counter attacks - should decrease your health points by the defender's counter attack power (show text message with his CAP, HP number by your image lowers accordingly)

//keep going until your health points are less than zero (lose) - GAME OVER

//or defender's HP is less than zero - you win this round (text msg that you defeated him and to choose another enemy). defender disappears from screen.

//click a new enemy but your attack power and HP don't reset

//when there are no enemies left you win

//include a restart button