const userFlips = document.querySelector('.flips');
const newGameButton = document.querySelector('.newGameBtn');
const cards = [
    {
        id: 1,
        type: 'first',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.pngitem.com/pimgs/m/24-240626_charizard-pokemon-card-hd-png-download.png'
    },
    {
        id: 1,
        type: 'second',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.pngitem.com/pimgs/m/24-240626_charizard-pokemon-card-hd-png-download.png'
    },
    {
        id: 2,
        type: 'first',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.kindpng.com/picc/m/540-5405298_lucario-ex-card-gx-mega-pokemon-cards-hd.png'
    },
    {
        id: 2,
        type: 'second',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.kindpng.com/picc/m/540-5405298_lucario-ex-card-gx-mega-pokemon-cards-hd.png'
    },
    {
        id: 3,
        type: 'first',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.pngitem.com/pimgs/m/117-1172746_charizard-pokemon-card-detective-pikachu-hd-png-download.png'
    },
    {
        id: 3,
        type: 'second',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.pngitem.com/pimgs/m/117-1172746_charizard-pokemon-card-detective-pikachu-hd-png-download.png'
    },
    {
        id: 4,
        type: 'first',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.kindpng.com/picc/m/152-1524342_tag-team-pokemon-cards-hd-png-download.png'
    },
    {
        id: 4,
        type: 'second',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.kindpng.com/picc/m/152-1524342_tag-team-pokemon-cards-hd-png-download.png'
    },
    {
        id: 5,
        type: 'first',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.kindpng.com/picc/m/220-2204354_pikachu-zekrom-gx-tag-team-pokmon-card-pokemon.png'
    },
    {
        id: 5,
        type: 'second',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.kindpng.com/picc/m/220-2204354_pikachu-zekrom-gx-tag-team-pokmon-card-pokemon.png'
    },
    {
        id: 6,
        type: 'first',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.pngitem.com/pimgs/m/134-1349562_pokemon-cards-unbroken-bonds-hd-png-download.png'
    },
    {
        id: 6,
        type: 'second',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://www.pngitem.com/pimgs/m/134-1349562_pokemon-cards-unbroken-bonds-hd-png-download.png'
    },
    {
        id: 7,
        type: 'first',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://pokemoncards4cheap.com/wp-content/uploads/2018/06/Venusaur.png'
    },
    {
        id: 7,
        type: 'second',
        back: 'https://i.pinimg.com/originals/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg',
        face: 'https://pokemoncards4cheap.com/wp-content/uploads/2018/06/Venusaur.png'
    }

];

class Game {
    constructor() {
        this.cardElements = [];
        this.actualStatus = [];
        this.rightMoves = 0;
        this.cards = cards;
        this.flips = 0;
    }

    initCards = () => {
        const cards = this.shuffleCards();
        cards.map(card => {
            this.cardElements.push(
                new Card(card, this.onUserSelect.bind(this)
            ));
        });
    }

    onUserSelect = data => {
        this.setMoves();
        this.actualStatus.push(data)

        if(this.actualStatus.length === 3){

            if(this.actualStatus[0].id !== this.actualStatus[1].id && this.flips % 2 === 1){
                const cardsToCheck = this.actualStatus.splice(0, 2);

                cardsToCheck.forEach(selectedCard => {
                    const cards = document.querySelectorAll(`[data-id='${selectedCard.id}']`);
                    const cardDataType = cards[0].getAttribute('data-type');
                    
                    cardDataType === selectedCard.type ? this.checkCard(cards, 0) : this.checkCard(cards, 1)
                    
                })
                
            }else {
                this.actualStatus = [this.actualStatus[2]]
                this.rightMoves++
            }
            
        }

        this.displayUserMessage()
    }

    setMoves = () => {
        this.flips++
        userFlips.innerHTML = this.flips;
    }
    
    setRandomNumber = upperLimit => Math.floor(Math.random() * upperLimit);
    
    shuffleCards = () => {
        let count = this.cards.length;
        
        while(count) {
            this.cards.push(this.cards.splice(this.setRandomNumber(count), 1)[0]);
            count -= 1; 
        }
        
        return this.cards;
    }
    
    checkCard = (cards, index) => {
        const currentFace = cards[index].querySelector('.face')
        const currentBack = cards[index].querySelector('.back')
        currentBack.style.display = "block";
        currentFace.style.display = "none";
    }


    displayUserMessage = () => {
        if(this.rightMoves + 1 === this.cards.length/2 && this.actualStatus.length === 2){
            alert(`Congrats! You won! Number of flips: ${this.flips}`)
            newGameButton.style.display = "block";
        }
    }
} 