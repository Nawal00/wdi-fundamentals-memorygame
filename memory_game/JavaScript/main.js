var cards = [
{
 rank: "queen",
 suit: "hearts", 
 cardImage: "images/queen-of-hearts.png"
}, 
{
 rank: "queen",
 suit: "diamonds", 
 cardImage: "images/queen-of-diamonds.png"
},
{
 rank: "king",
 suit: "hearts", 
 cardImage: "images/king-of-hearts.png"
}, 
{
 rank: "king",
 suit: "diamonds", 
 cardImage:	"images/king-of-diamonds.png"
}
]; 
var cardsInPlay = []; 

//checking for a match if cardsInPlay
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

// logic when users flips a card to add 
var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId].rank)
	console.log("User flipped " + cards[cardId].suit)
	console.log("User flipped " + cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank);
	//logic to check if 2 cads have been played 
	if (cardsInPlay.length === 2){
	    checkForMatch();
	}else {
		alert("Sorry no match try again!");
		}
}

flipCard(0);
flipCard(2);