class Deck  {
    constructor() {
        this.templateCardDeck = [
          { pic: "fa fa-camera-retro", faceup: false, matched: false },
          { pic: "fa fa-camera-retro", faceup: false, matched: false },
          { pic: "fa fa-hackaday", faceup: false, matched: false },
          { pic: "fa fa-hackaday", faceup: false, matched: false },
          { pic: "fa fa-bolt", faceup: false, matched: false },
          { pic: "fa fa-bolt", faceup: false, matched: false },
          { pic: "fa fa-balance-scale", faceup: false, matched: false },
          { pic: "fa fa-balance-scale", faceup: false, matched: false },
          { pic: "fa fa-paw", faceup: false, matched: false },
          { pic: "fa fa-paw", faceup: false, matched: false },
          { pic: "fa fa-trophy", faceup: false, matched: false },
          { pic: "fa fa-trophy", faceup: false, matched: false },
          { pic: "fa fa-rocket", faceup: false, matched: false },
          { pic: "fa fa-rocket", faceup: false, matched: false },
          { pic: "fa fa-star", faceup: false, matched: false },
          { pic: "fa fa-star", faceup: false, matched: false }
        ];
    }

    cardMatch(cardDeck, firstCardIndex, secondCardIndex) {
        if (cardDeck[firstCardIndex] == cardDeck[secondCardIndex]) {
            return true
        } else {
            return false
        };
    };

    shuffleDeck(cardDeck) {
        const topRange = 16,
              bottomRange = 1,
              shuffledDeck = [];

        while (shuffledDeck.length < topRange) {
            let newIndex = Math.floor(Math.random() * (topRange - bottomRange) + bottomRange);
            if (shuffledDeck.indexOf(newIndex) == -1 ) {
                shuffledDeck.push(cardDeck[newIndex])
            }
        }
        return shuffledDeck;
    };
};

export default Deck;