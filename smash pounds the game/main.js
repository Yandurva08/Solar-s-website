alert("Remember! this game is made when i still learing javascript (and i'm still learing), for now i don't know how to save in javascript, so your progress will be gone when you leave this page or refresh this page, now you can go")
let smashvar = 0
let smashper = 1
let smashhs = 0
var buy = new Audio('buy.ogg');
var deny = new Audio('deny.ogg');
function smashfun() {
var tap = new Audio('tap.ogg');
  tap.play();
	smashvar = smashper + Math.floor(smashvar)
	document.getElementById("smash").innerHTML = "Smashes: " + smashvar
	if (smashvar > smashhs) {
		smashhs = smashvar
		document.getElementById("highscore"). innerHTML = "HighScore: " + Math.floor(smashhs)
}
	}
let nitrocost = 30
let isfive = false
let spc = 5
function buynitro() {
	if (smashper <= 80000) {
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
	nitrocost *= 1.5
	
	document.getElementById("costnitro").innerHTML = Math.floor(nitrocost)
	document.getElementById("smash").innerHTML = "Smashes: " + smashvar
	buy.play()
	}
	else {
		deny.play()
	}
	}
	else {
		alert("Max level")
		deny.play()
}
}
let smashpersec = 0
const spsin = setInterval(function() {
	smashvar += smashpersec
	document.getElementById("smash").innerHTML = "Smashes: " + Math.floor(smashvar)
	if (smashvar > smashhs) {
		smashhs = smashvar
		document.getElementById("highscore"). innerHTML = "HighScore: " + Math.floor(smashhs)
}
}, 1000)
let spscost = 50
let spsamo = 5
function balling() {
	if (spsamo <= 3000) {
	if (smashvar >= Math.floor(spscost)) {
		smashpersec += spsamo
		smashvar -= spscost
		spscost *= 1.8
		spsamo *= 2
		document.getElementById("smash").innerHTML = "Smashes: " + Math.floor(smashvar)
		document.getElementById("costballing"). innerHTML = Math.floor(spscost)
		document.getElementById("spss").innerHTML = "+" + spsamo
		buy.play()
		console.log("sps: " + smashpersec)
	}
	else {
		deny.play()
	}
	}
	else {
		alert("Max level")
		deny.play()
		}
	}
function theend() {
	deny.play()
	}
