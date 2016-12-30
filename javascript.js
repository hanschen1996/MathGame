var playing = false;
var score = 0;
var time = 60;
var currentTime;
var myCounter, timeout;
var val1, val2;
var choices = [0, 0, 0, 0];
var val1, val2, correctIndex, correctAnswer;

function generateNewQuestion() {
	val1 = Math.round(Math.random() * 10);
	val2 = Math.round(Math.random() * 10);
	correctAnswer = val1 * val2;
	correctIndex = Math.round(Math.random() * 3);

	document.getElementById("question").innerHTML = val1 + " x " + val2;

	for (i = 0; i < 4; i ++) {
		if (i == correctIndex) { 
			choices[i] = correctAnswer;
			document.getElementById("choice" + (i + 1)).innerHTML = val1 * val2;
		}
		else {
			var wrong;
			do {
				wrong = Math.round(Math.random() * 100);
			} while (wrong == correctAnswer)
			choices[i] = wrong;
			document.getElementById("choice" + (i + 1)).innerHTML = wrong;
		}
	}
}

function displayGameOver() {
	playing = false;
	clearInterval(myCounter);
	document.getElementById("gameover").style.display = "inline";
	document.getElementById("finalScore").innerHTML = score;
	document.getElementById("timeRemaining").style.display = "none";
	document.getElementById("startreset").innerHTML = "Start Game!";
}

document.getElementById("startreset").onclick = function() {
	if (playing) {
		window.location.reload(); // reload the page
	}
	else {
		playing = true;
		score = 0;
		time = 60;
		document.getElementById("gameover").style.display = "none";

		document.getElementById("scoreValue").innerHTML = score;
		// show countdown box
		document.getElementById("timeRemaining").style.display = "inline";

		// reset time
		document.getElementById("timeRemainingValue").innerHTML = time;

		//get a reference to the time
		currentTime = document.getElementById("timeRemainingValue");

		// set a counter
		myCounter = setInterval(
			function() {
				time --; 
				currentTime.innerHTML = time; 
			    if (time == 0) {
			       	//clearInterval(myCounter);
			       	displayGameOver();
			    }
			}, 1000);

		// change the start button to reset
		document.getElementById("startreset").innerHTML = "Reset Game!";
		generateNewQuestion();
	}
}

function clearCorrectWrong() {
	clearTimeout(timeout);
	document.getElementById("correct").style.display = "none";
	document.getElementById("wrong").style.display = "none";
}

document.getElementById("choice1").onclick = function() {
	if (playing) {
		clearCorrectWrong();
		if (correctIndex == 0) {
			score += 1;
			document.getElementById("scoreValue").innerHTML = score;
			document.getElementById("correct").style.display = "inline";
			//document.getElementById("wrong").style.display = "none";
			timeout = setTimeout(function() {document.getElementById("correct").style.display = "none";}, 1000);
			generateNewQuestion();
		}

		else {
			document.getElementById("wrong").style.display = "inline";
			timeout = setTimeout(function() {document.getElementById("wrong").style.display = "none";}, 1000);
		}
	}
}

document.getElementById("choice2").onclick = function() {
	if (playing) {
		clearCorrectWrong();
		if (correctIndex == 1) {
			score += 1;
			document.getElementById("scoreValue").innerHTML = score;
			document.getElementById("correct").style.display = "inline";
			timeout = setTimeout(function() {document.getElementById("correct").style.display = "none";}, 1000);
			generateNewQuestion();
		}

		else {
			document.getElementById("wrong").style.display = "inline";
			timeout = setTimeout(function() {document.getElementById("wrong").style.display = "none";}, 1000);
		}
	}
}

document.getElementById("choice3").onclick = function() {
	if (playing) {
		clearCorrectWrong();
		if (correctIndex == 2) {
			score += 1;
			document.getElementById("scoreValue").innerHTML = score;
			document.getElementById("correct").style.display = "inline";
			timeout = setTimeout(function() {document.getElementById("correct").style.display = "none";}, 1000);
			generateNewQuestion();
		}

		else {
			document.getElementById("wrong").style.display = "inline";
			timeout = setTimeout(function() {document.getElementById("wrong").style.display = "none";}, 1000);
		}
	}
}

document.getElementById("choice4").onclick = function() {
	if (playing) {
		clearCorrectWrong();
		if (correctIndex == 3) {
			score += 1;
			document.getElementById("scoreValue").innerHTML = score;
			document.getElementById("correct").style.display = "inline";
			timeout = setTimeout(function() {document.getElementById("correct").style.display = "none";}, 1000);
			generateNewQuestion();
		}

		else {
			document.getElementById("wrong").style.display = "inline";
			timeout = setTimeout(function() {document.getElementById("wrong").style.display = "none";}, 1000);
		}
	}
}
