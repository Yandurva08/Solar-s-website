alert("Remember! this game is made when i still learing javascript (and i'm still learing), for now i don't know how to save in javascript, so your progress will be gone when you leave this page or refresh this page, now you can go")
let smashvar = 0
let smashper = 1
let smashhs = 0
var buy = new Audio('buy.ogg');
var deny = new Audio('deny.ogg');
function smashfun() {
var tap = new Audio('tap.ogg');
  tap.play();
	smashvar = smashper + smashvar
	document.getElementById("smash").innerHTML = "Smashes: " + smashvar
	if (smashvar > smashhs) {
		smashhs = smashvar
		document.getElementById("highscore"). innerHTML = "HighScore: " + smashhs
}
	}
let nitrocost = 10
let isfive = false
let spc = 5
function buynitro() {
	if (smashvar >= Math.floor(nitrocost)) {
	if (isfive == true) {
	smashper += spc
	spc *= 2
	document.getElementById("npc").innerHTML = "+" + spc
	}
	else {
		smashper += 4
		isfive = true
		}
	console.log("smash per: " + smashper)
	smashvar -= Math.floor(nitrocost)
	nitrocost *= 1.3
	
	document.getElementById("costnitro").innerHTML = Math.floor(nitrocost)
	document.getElementById("smash").innerHTML = "Smashes: " + smashvar
	buy.play()
	}
	else {
		deny.play()
	}
	}
let smashpersec = 0
const spsin = setInterval(function() {
	smashvar += smashpersec
	document.getElementById("smash").innerHTML = "Smashes: " + smashvar
	if (smashvar > smashhs) {
		smashhs = smashvar
		document.getElementById("highscore"). innerHTML = "HighScore: " + smashhs
}
}, 1000)
let spscost = 50
let spsamo = 5
function balling() {
	if (smashvar >= Math.floor(spscost)) {
		smashpersec += spsamo
		smashvar -= spscost
		spscost *= 1.5
		spsamo *= 2
		document.getElementById("smash").innerHTML = "smashes: " + smashvar
		document.getElementById("costballing"). innerHTML = Math.floor(spscost)
		document.getElementById("spss").innerHTML = "+" + spsamo
		buy.play()
		console.log("sps: " + smashpersec)
	}
	else {
		deny.play()
	}
	}
function theend() {
	deny.play()
	}
