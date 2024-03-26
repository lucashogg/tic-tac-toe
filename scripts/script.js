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

        const currentBoard = board.getBoard();
        const winningCombos = board.getWinningCombos();
        let playerSelect;
        let rounds = 9;

        // Play through rounds until board fills up or winning combo occurs
        while (rounds != 0) {
            // playerSelect = prompt(`Please enter a number for ${getCurrentPlayer().symbol}`);
            while (currentBoard[playerSelect] != '') {
                playerSelect = prompt(`Please enter a number for ${getCurrentPlayer().symbol}`);
            }
            currentBoard[playerSelect] = getCurrentPlayer().symbol;
            console.log(currentBoard);
            switchCurrentPlayer();


            // Check for winner
            // for (let j = 0; j < winningCombos.length; j++) {
            //     let a = winningCombos[j][0];
            //     let b = winningCombos[j][1];
            //     let c = winningCombos[j][2];

            //     for (let k = 0; k < currentBoard.length; k++);

            // }
            rounds--
            console.log(rounds);
        }

    }

    return { playRound };
}