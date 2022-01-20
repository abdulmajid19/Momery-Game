document.addEventListener("DOMContentLoaded", () => {
  
  // Cards Array with objects
  
  
  const cardArray = [
    {
      name: "fries",
      img: "src/images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "src/images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "src/images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "src/images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "src/images/milkshake.png",
    },
    {
      name: "pizza",
      img: "src/images/pizza.png",
    },
    {
      name: "fries",
      img: "src/images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "src/images/cheeseburger.png",
    },

    {
      name: "hotdog",
      img: "src/images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "src/images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "src/images/milkshake.png",
    },
    {
      name: "pizza",
      img: "src/images/pizza.png",
    },
  ];
   cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsWon = [];
  
  // We create our board in createBoard function
  
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  
  //flip our card flipCard function
  
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 50);
    }
   }
  
// This checks for matching checkForMatch function
  
  
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const resultDisplay = document.querySelector("#result");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if (optionOneId == optionTwoId) {
      alert("You have clicked the same image");
      cards[optionOneId].setAttribute("src", "src/images/blank.png");
      cards[optionTwoId].setAttribute("src", "src/images/blank.png");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("you found a match");
      cards[optionOneId].setAttribute("src", "src/images/white.png");
      cards[optionTwoId].setAttribute("src", "src/images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "src/images/blank.png");
      cards[optionTwoId].setAttribute("src", "src/images/blank.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenIds = [];
    
    // This is the score and text we expect from Our game at the end.
    
    
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === 6) {
      resultDisplay.textContent = "Congratuation, you WON! ";
    }
     
  }
  createBoard();
});
