const startingMinutes = 1;
/*let time = startingMinutes * 60;*/
let time = startingMinutes * 60;



//Selected Elements
//Timer
const timerElement = document.getElementById('timer');
const startElement = document.getElementById('start-btn');
const stopElement = document.getElementById('stop-btn');
const resetElement = document.getElementById('reset-btn');

//Display the starting time upon page load
timerOnLoad();
function timerOnLoad () {
	timerElement.innerHTML = `${startingMinutes}:00`;
}

//Start countdown when you click start button
var startCountdown
startElement.onclick = function () {
	startCountdown = setInterval(countdown, 1000);
};

//Stop countdown when you click stop button
stopElement.onclick = function () {
	clearInterval(startCountdown);

};

//Reset time & redisplay reset time
resetElement.onclick = function () {
	time = startingMinutes * 60;
	timerOnLoad();

}

//Handling countdown on timer
function countdown(){
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	seconds = seconds < 10 ? '0'+ seconds : seconds;
	timerElement.innerHTML = `${minutes}:${seconds}`;
	time --;
	time = time < 0 ? 0 : time;
}


