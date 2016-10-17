// Variables
var winCounter = 0;
var loosCounter = 0;
// var characterList = [knights, bulls, gators, noles];
var randomHPNumb = [];



createHP();
attackPower();
counterPower();
moveCharacters();


// Create Health Points for each Character

function createHP () {
	knightsHP = Math.floor(Math.random()* 201 + 1);
	$("#knightsHP").html(knightsHP);

	bullsHP = Math.floor(Math.random()* 201 + 1);
	$("#bullsHP").html(bullsHP);

	gatorsHP = Math.floor(Math.random()* 201 + 1);
	$("#gatorsHP").html(gatorsHP);

	nolesHP = Math.floor(Math.random()* 201 + 1);
	$("#nolesHP").html(nolesHP);
}

function attackPower () {
	knightsAttack = Math.floor(Math.random()* 20 + 1);
	$("#knightsAttack").html(knightsAttack);
	console.log(knightsAttack);

	bullsAttack = Math.floor(Math.random()* 20 + 1);
	$("#bullsAttack").html(bullsAttack);
	console.log(bullsAttack);

	gatorsAttack = Math.floor(Math.random()* 20 + 1);
	$("#gatorsAttack").html(gatorsAttack);
	console.log(gatorsAttack);

	nolesAttack = Math.floor(Math.random()* 20 + 1);
	$("#nolesAttack").html(nolesAttack);
	console.log(nolesAttack);
}

function counterPower () {
	knightsCounterAttack = Math.floor(Math.random()* 20 + 1);
	$("#knightsCounterAttack").html(knightsCounterAttack);
	console.log(knightsCounterAttack);

	bullsCounterAttack = Math.floor(Math.random()* 20 + 1);
	$("#bullsCounterAttack").html(bullsCounterAttack);
	console.log(bullsCounterAttack);

	gatorsCounterAttack = Math.floor(Math.random()* 20 + 1);
	$("#gatorsCounterAttack").html(gatorsCounterAttack);
	console.log(gatorsCounterAttack);

	nolesCounterAttack = Math.floor(Math.random()* 20 + 1);
	$("#nolesCounterAttack").html(nolesCounterAttack);
	console.log(nolesCounterAttack);
}


// Moving the character boxes into position for battle
function moveCharacters () {

	function yourCharacterMove(selectedElement) {
		$(".yourCharacterSpot").append(selectedElement);
	}

	$(".character").on('click', function() {
		var selectedElement = $(this);
		yourCharacterMove(selectedElement);
	});

	function defenderMove(selectedElement) {
		$(".defenderSpot").append(selectedElement);
	}

	(".character").on('click', function() {
		var selectedElement = $(this);
		defenderMove(selectedElement);
	});
}