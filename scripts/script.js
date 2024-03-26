// Create player
const player = (symbol) => {
    this.symbol = symbol;

    return { symbol };
}

// Initialize board
const gameboard = () => {
    const board = ['', '', '', '', '', '', '', '', ''];

    return { board };
}

const gameController = () => {
    const player1 = player('x');
    const player2 = player('o');

    return { player1, player2 };
}