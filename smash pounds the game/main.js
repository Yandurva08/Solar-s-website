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
let nitrocostmult = 1
let isfive = false
let spc = 5
function buynitro() {
	if (smashvar >= nitrocost) {
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
	smashvar -= nitrocost
	nitrocost *= nitrocostmult *= 2
	console.log("nitro cost mult: " + nitrocostmult)
	
	document.getElementById("costnitro").innerHTML = nitrocost
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
let spscostmult = 1
let spsamo = 5
function balling() {
	if (smashvar >= spscost) {
		smashpersec += spsamo
		smashvar -= spscost
		spscost *= spscostmult *= 2
		spsamo *= 2
		document.getElementById("smash").innerHTML = "smashes: " + smashvar
		document.getElementById("costballing"). innerHTML = spscost
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
