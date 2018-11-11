var cards = ["queen", "queen", "king", "king"]; 
var cardsInPlay = []; 

//checking for a match if cardsInPlay
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}

// function to store stepss when users flips a card
var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId])
	cardsInPlay.push(cards[cardId]);
	//logic to check if 2 cads have been played 
	if(cardsInPlay.length === 2){
	    checkForMatch();
		}else {
			alert("Sorry no match try again!");
		}
}

flipCard(0);
flipCard(2);