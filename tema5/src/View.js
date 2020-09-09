const containerElement = document.querySelector('.container');
const newGameBtn = document.querySelector('.newGameBtn');
const flips = document.querySelector('.flips');

class View {
    constructor(){
        this.displayCards();
        this.hideButton();
    }

    displayCards = () => {
        const game = new Game();
        game.initCards();
    }

    hideButton = () => {
        newGameBtn.style.display = 'none';
    }
}

const view = new View();

newGameBtn.addEventListener('click', () => {
    containerElement.innerHTML = ''
    flips.innerHTML = 0;
    new View();
})