function printDeckOfCards(cards) {
    function createCard (input){

        let cards = [];
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        for (let arg of input) {
            let face = '';
            let suit = '';

            if(arg.length == 2) {
                face = arg[0];
                suit = arg[1];
            }
            else if(arg.length == 3) {
                face = arg[0] + arg[1];
                suit = arg[2];
            }

            if (validFaces.indexOf(face.toString()) === -1){
                console.log(`Invalid card: ${arg}`);
                return false;
            }
    
            if (validSuits.indexOf(suit.toString()) === -1){
                console.log(`Invalid card: ${arg}`);
                return false;
            }

            switch (suit) {
                case 'S': suit = '\u2660'; break;
                case 'H': suit = '\u2665'; break;
                case 'D': suit = '\u2666'; break;
                case 'C': suit = '\u2663'; break;
            }

            let card =  {
                face : face,
                suit : suit,
                toString() {
                    return this.face + this.suit;
                }
            }
            cards.push(card);
        }

        return cards;

    }
      let cardsArgs = createCard(cards); 
      
      if(cardsArgs != false) {
          console.log(cardsArgs.join(' '));
      }
}
  printDeckOfCards(['AS', '10D', 'KH', '2C']);


  