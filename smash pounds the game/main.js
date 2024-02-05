alert("Remember! this game is made when i still learing javascript (and i'm still learing), for now i don't know how to save in javascript, so your progress will be gone when you leave this page or refresh this page, now you can go")
let smashvar = 0
let lvlsmash = "newbie"
function smashfun() {
	smashvar = 1 + smashvar
	document.getElementById("smash").innerHTML = "smashes: " + smashvar
	if (smashvar == 50) {
	lvlsmash = "smasher"
	}
	if (smashvar == 100) {
	lvlsmash = "rizzler"
	}
	if (smashvar == 200) {
	lvlsmash = "Zamn"
	}
	if (smashvar >= 200) {
	document.getElementById("titleid").innerHTML = "you smashed him " + smashvar + " times, You should calm down"
	}
	if (smashvar == 269) {
	lvlsmash = "69, nice"
	}
	if (smashvar == 300) {
	lvlsmash = "maybe you should calm down?"
	}
	if (smashvar == 400) {
	lvlsmash = "Ok, stop"
	}
	if (smashvar °= 500) {
	lvlsmash = "I'm serious, stop"
	}
	if (smashvar == 600) {
	lvlsmash = "you know he's 14, right?"
	}
	if (smashvar == 610) {
	lvlsmash = "you don't listen to me"
	}
	if (smashvar == 700) {
	lvlsmash = "should i call the police?"
	}
	if (smashvar == 900) {
	lvlsmash = "What is the police number? i forget"
	}
	if (smashvar == 911) {
	lvlsmash = "Thanks for telling me is 911"
	}
	if (smashvar == 1000) {
	lvlsmash = "i have no words"
	document.getElementById("titleid").innerHTML = "i have no words"
	}
	document.getElementById("levelsmash").innerHTML = "level: " + lvlsmash
	}
