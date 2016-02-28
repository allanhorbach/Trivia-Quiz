// Defining questions
var question1 = new question({
	charName: "1. What was Coca Cola's original color?",
	answerOptions: ["Blue", "Green", "Yellow", "Red"],
	answer: 1,
	pageNumber: "page-1"
});

var question2 = new question({
	charName: "2. In Ben Hur what modern object can you see in the chariot race?",
	answerOptions: ["An Airplane", "Sunglasses", "Someone Smoking", "A Car"],
	answer: 3,
	pageNumber: "page-2"
});

var question3 = new question({
	charName: "3. Which Planet rotates Clockwise?",
	answerOptions: ["Earth", "Pluto", "Venus", "Mars"],
	answer: 2,
	pageNumber: "page-3"
});

var question4 = new question({
	charName: "4. How do crickets hear?",
	answerOptions: ["Through Their Wings", "Through their Tounges", "Through Their Knees ", "Through Their Belly"],
	answer: 2,
	pageNumber: "page-4"
});

var question5 = new question({
	charName: "5. What's a frog's favorite color?",
	answerOptions: ["Blue", "Green", "Red", "Yellow"],
	answer: 0,
	pageNumber: "page-5"
});
function question(option){
	this.charName = option.charName;
	this.answerOptions = option.answerOptions;
	this.answer = option.answer;
	this.pageNumber = option.pageNumber;
}

var genQuestion = function(x){
	var stage = $('#questions');
	stage.append('<div id="' + x.pageNumber + '" class="page"></div>');

	var questionsPage = $('#' + x.pageNumber);
	questionsPage.append('<h1>TV Character Quiz</h1><hr/>');
	questionsPage.append('<p class="charName">' + x.charName + '</p>')
	questionsPage.append('<form>');
	questionsPage.append('<input type="radio" name="tv1" value="0" checked>' + x.answerOptions[0] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="1">' + x.answerOptions[1] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="2">' + x.answerOptions[2] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="3">' + x.answerOptions[3] + '<br/>');
	questionsPage.append('</form>');
	questionsPage.append('<button>next</button>');
}

var count = 0;
var nextPage = 1;

function showScore(){
	$('.score').append(count + " out of 5");
}

function checkAnswer(x){
	var finalAnswer = $('input:checked').val();
	if(nextPage == 5 && finalAnswer == x.answer){
		count++;
		$('#questions').hide();
		$('#finish').show();
		showScore();
	} else if(nextPage == 5){
		$('#questions').hide();
		$('#finish').show();
		showScore();
	} else if(finalAnswer == x.answer){
		count++;
		nextPage++;
		$('.page').hide();
		$('#finish').hide();
		$('#page-' + nextPage).show();
	} else {
		nextPage++;
		$('.page').hide();
		$('#finish').hide();
		$('#page-' + nextPage).show();
	}
}

function newGame(){
	var create1 = new genQuestion(question1);
	var create2 = new genQuestion(question2);
	var create3 = new genQuestion(question3);
	var create4 = new genQuestion(question4);
	var create5 = new genQuestion(question5);
}

function restart(){
	count = 0;
	nextPage = 1;
	$('#start-page').show();
	$('#page-1').hide();
	$('#page-2').hide();
	$('#page-3').hide();
	$('#page-4').hide();
	$('#page-5').hide();
	$('#finish').hide();
	$('#questions').show();
	$('.score').empty();
	$('#finish').hide();
}

$(document).ready(function(){
  
	$('#start-page button').click(function(){
		$('#start-page').hide();
		$('#page-1').show();
		$('#page-2').hide();
		$('#page-3').hide();
		$('#page-4').hide();
		$('#page-5').hide();
		$('#finish').hide();
	});

	newGame();

	$('#page-1 button').click(function(){
		checkAnswer(question1);
	});

	$('#page-2 button').click(function(){
		checkAnswer(question2);
	});

	$('#page-3 button').click(function(){
		checkAnswer(question3);
	});

	$('#page-4 button').click(function(){
		checkAnswer(question4);
	});

	$('#page-5 button').click(function(){
		checkAnswer(question5);
	});

	$('#finish button').click(function(){
		restart();
	});
});