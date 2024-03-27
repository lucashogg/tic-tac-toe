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

    const getBoard = () => board;
    const getWinningCombos = () => winningCombos;

    return { getBoard, getWinningCombos };
}

const gameController = () => {
    const player1 = player('x');
    const player2 = player('o');

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
        const currentBoard = board.getBoard();
        const winningCombos = board.getWinningCombos();
        let playerSelect;
        let rounds = 0;

        // Play through rounds until board fills up or winning combo occurs
        while (rounds != 9) {
            printNewRound();

            let symbol = getCurrentPlayer().symbol;

            while (currentBoard[playerSelect] != '') {
                playerSelect = prompt(`Please enter a number for ${symbol}`);
            }
            currentBoard[playerSelect] = symbol;
            console.log(currentBoard);

            // Check for winner
            if (rounds >= 2) {
                let winningArray = [];
                for (let i = 0; i < currentBoard.length; i++) {
                    if (currentBoard[i] === symbol) {
                        winningArray.push(i);
                    }
                }

                // Compare potential winning array with winning combos
                for (let j = 0; j < winningCombos.length; j++) {
                    winner = winningArray.filter(n => winningCombos[j].includes(n));

                    if (winner.length === 3) {
                        for (let k = 0; k < winner.length; k++) {
                            if (winner[k] != winningCombos[j][k]) {
                                break;
                            }
                        }
                        console.log(`${symbol} wins!`);
                        return;
                    }
                }
            }

            rounds++
            console.log(rounds);
            switchCurrentPlayer();
        }
        console.log('stalemate');
    }

    return { playRound };
}

const game = gameController();