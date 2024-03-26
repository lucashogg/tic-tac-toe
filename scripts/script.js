// Create player
const player = (symbol) => {
    this.symbol = symbol;

    return { symbol };
}

// Initialize board
const gameboard = () => {
    const board = ['', '', '', '', '', '', '', '', ''];
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    return { board, winningCombos };
}

const gameController = () => {
    const player1 = player('x');
    const player2 = player('o');
    const gameCount = 0;

    const board = gameboard();

    let currentPlayer = player1;
    const switchCurrentPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
    const getCurrentPlayer = () => currentPlayer;

    const printNewRound = () => {
        console.log(`It's ${getCurrentPlayer().symbol}'s turn.`);
    }

    const playRound = () => {
        printNewRound();

    }

    return { playRound };
}