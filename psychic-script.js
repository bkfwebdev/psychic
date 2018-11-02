window.onload = function(){
							$("#nope").hide();
							$("#userprompt").hide();
}
var computerColors = ["red","orange","yellow","green","blue","indigo","violet"];
// Randomly select one of those colors in the array as the target
	var randomIndex = Math.random()*7;
	var randomChoice= Math.floor(randomIndex);
	var target = computerColors[randomChoice];
	var numofguess = 0;
	var snarkySnark = "";
	var psychicSnark = [
					"!!!... ",
					" WOW!, your psychic abilities are amazing!.",
					" You can do better,maybe after a cup of coffee.",
					" Okay maybe you are not psychic...today",
					" Perhaps you were distracted...",
					" Pick this one first next time, trust your instincts.",
					" It was only a matter of time...right?",
					" Sorry kid, you aint got it...",
                    " Dude! WTF, you only had 7 choices!",
                    " You need to find a short bridge & take a long walk"
					]
for (i=0;i<7;i++) {

		document.getElementById(computerColors[i]).onclick = getClickCallback(computerColors[i]);		
}


function getClickCallback(i){return function(){
document.getElementById("gameboard").style.backgroundColor = i;
numofguess += 1;

if (numofguess > 8)
{snarkySnark = "You're just fucking with me right now...right?.";}
else 
{snarkySnark = psychicSnark[numofguess];}

if (i==target){
document.getElementById("userprompt").innerHTML = "!!!YOU GOT IT!!!, Number of tries ="+numofguess+", "+snarkySnark+",click this bar to play again";
$("#userprompt").show();
$("#userprompt").click(function(){
									location.reload()
});
				
}
else {
$("#nope").show(2000);
$("#nope").hide(2000);
}
}

}