let startingMinutes = 25;
let time = startingMinutes * 60;

let workMinutes = 25;
let shortMinutes = 5
let longMinutes = 30;



//Selected Elements
//Timer
const timerElement = document.getElementById('timer');
const startElement = document.getElementById('start-btn');
const stopElement = document.getElementById('stop-btn');
const resetElement = document.getElementById('reset-btn');
//Intervals
const workElement = document.getElementById('work-btn');
const shortElement = document.getElementById('short-btn');
const longElement = document.getElementById('long-btn');

//Display the starting time upon page load
timerOnLoad();
function timerOnLoad () {
	timerElement.innerHTML = `${startingMinutes}:00`;
}

//Start countdown when you click start button
let startCountdown
startElement.onclick = function () {
	clearInterval(startCountdown);
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

//Detect when the work, short, or long button is being clicked & switch the interval type
document.onclick = function () {
	if (event.target === workElement){
		switchIntervalType(workMinutes);
	}
	else if (event.target === shortElement) {
		switchIntervalType(shortMinutes);
	}
	else if(event.target === longElement){
		switchIntervalType(longMinutes);
	}
}

//Switch interval type & reset the timer
function switchIntervalType(type){
		clearInterval(startCountdown);
		startingMinutes = type;
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


