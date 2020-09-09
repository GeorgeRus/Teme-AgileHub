const container = document.querySelector('.container');

class Card {
    constructor(card, callback){
        this.callback = callback;
        this.card = card;
        this.createCardElement(card)
        this.click();
    }

    createCardElement = card => {
        this.cardImg = document.createElement('div');
        this.cardImg.setAttribute('data-id', card.id);
        this.cardImg.setAttribute('data-type', card.type);
        this.cardImg.classList.add('card');
        this.cardImg.innerHTML = `
            <img src=${card.back} class="back"/>
            <img src=${card.face} class="face"/>
        `
        container.appendChild(this.cardImg)
    }

    click = () => {
        this.cardImg.addEventListener('click', this.handleClick.bind(this))
    }

    handleClick = () => {
        const shouldFlip = this.cardImg.querySelector('.face').style.display === 'block';

        if(shouldFlip) return;
        
        const currentFace = this.cardImg.querySelector('.face')
        const currentBack = this.cardImg.querySelector('.back')
        currentBack.style.display = "none"
        currentFace.style.display = "block"

        this.callback({
            id: this.card.id, 
            type: this.card.type
        });
    }
}



