var cards = ["queen", "queen", "king", "king"]; 
var cardsInPlay = []; 
var cardOne = cards[0]; 
var cardTwo = cards[2];

//add cardOne to the cardsInPlay arr 
cardsInPlay.push(cardOne); 
console.log("User has flipped " + cardOne)
//add second card to cardsInPlay arr 
cardsInPlay.push(cardTwo);
console.log("User has flipped " + cardTwo)

//logic to check if 2 cads have been played 
if(cardsInPlay.length === 2){
    if(cardsInPlay[0] === cardsInPlay[1])
		alert("You've found a match!")
	}else {
		alert("Sorry no match try again!");
	}
