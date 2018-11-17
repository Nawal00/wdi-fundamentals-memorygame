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
		//logic to check if 2 cads have been played
		if (cardsInPlay.length === 2){
		//check for match
			if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
			} else {
				alert("Sorry, try again.");
			}
		}
	}
	
	
	
	// logic when users flips a card to add to arr & checkForMatch
	var flipCard = function(){
		//set cardId to data-id
		var cardId = this.getAttribute("data-id");
		cardsInPlay.push(cards[cardId].rank); 
		this.setAttribute("src", cards[cardId].cardImage);
		setTimeout(checkForMatch, 200);
	}
	
	// logic to loop through cards arr, append selected card & pass callback func
	
	var createBoard = function(){
		for (var i = 0; i < cards.length; i++){
			 //create img element & set src attribute 
			 var cardElement = document.createElement("img");
			 cardElement.setAttribute("src", "images/back.png");
			 //set data attribute to be the current index of the card arr
			 cardElement.setAttribute("data-id", i);
			 //add event listener and pass in callback func
			 cardElement.addEventListener("click", flipCard);
			 //add card element to the game board ID
			 document.getElementById("game-board").appendChild(cardElement);
		}
	}
	
	var resetButton = document.getElementById('reset');
		resetButton.addEventListener("click", function(){
			var playedCards = document.getElementById("game-board").children
			for (var i = 0; i < playedCards.length; i++){ 
			// flip all the cards to back 
			playedCards[i].setAttribute("src", "images/back.png");
			cardsInPlay = [];
		}
	});
	
	
	createBoard();
	
	