import Deck from './Deck';
import GamePlay from './GamePlay';
import GameBoard from './GameBoard';



const createCard =(cardObj) => {
    let newItem = document.createElement('li');
    let newIcon = document.createElement('i');
    newItem.className = 'facedown';
    newIcon.className = cardObj.pic;
    newItem.appendChild(newIcon);
    return newItem
}

const newGame = () => {

    let deckOfCards = new Deck;
    let freshDeck = deckOfCards.shuffleDeck(deckOfCards);
    let board = document.getElementById('card-list');

    freshDeck.templateCardDeck.forEach(el => {
        let card = createCard(el);
        board.appendChild(card)
    })
}

newGame();