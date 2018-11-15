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
var flipCard = function(){
	var cardId = this.getAttribute("data-id")
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage)
	//logic to check if 2 cads have been played 
	if (cardsInPlay.length === 2){
	// call checkForMatch if 2 cards are flipped
	    checkForMatch();
	}else {
		alert("Please select 2 cards");
		}
}

// logic to loop through cards arr, append selected card & pass callback func
var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		 //create img element
		 var cardElement = document.createElement("img");
		 cardElement.setAttribute("src", "images/back.png");
		 // // set data attribute to be the current index of the card arr
		 cardElement.setAttribute("data-id", i);
		 // //add event listener and pass in callback func
		 cardElement.addEventListener("click", flipCard);
		 document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();

