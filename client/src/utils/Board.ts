import DefaultBlock from './Block';
import { BlockClassName } from './Block';
import { BlockStatus } from './Block';

const buildBoard = ({ rows, columns }: { rows: number, columns: number }) => {
    const tempBlock: DefaultBlock = {
        className: BlockClassName.default,
        blockStatus: BlockStatus.unrevealed,
    };

    const builtBoard: DefaultBlock[][] = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => ({
            ...tempBlock
        }))
    );

    console.log("builtBoard");
    return builtBoard;
};


const placeBombs = (board: DefaultBlock[][], numberOfMines: number) => {
    const rows = board.length;
    const columns = board[0].length;
    let currentNumOfMines = 0;

    while (currentNumOfMines < numberOfMines) {
        const row = Math.floor(Math.random() * rows);
        const column = Math.floor(Math.random() * columns);

        if (board[row][column].className === BlockClassName.default) {
            board[row][column].className = BlockClassName.bomb;
            currentNumOfMines++;
        }
    }
    return board;
};

const numberBoard = (board: DefaultBlock[][]) => {
    const rows = board.length;
    const columns = board[0].length;

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            if (board[row][column].className === BlockClassName.bomb) {
                continue;
            }

            let bombCount = 0;

            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const newRow = row + i;
                    const newColumn = column + j;

                    if (
                        newRow >= 0 &&
                        newRow < rows &&
                        newColumn >= 0 &&
                        newColumn < columns &&
                        board[newRow][newColumn].className === BlockClassName.bomb
                    ) {
                        bombCount++;
                    }
                }
            }

            if (bombCount > 0) {
                board[row][column].className = bombCount as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
            } else {
                board[row][column].className = BlockClassName.empty;
            }
        }
    }
    return board;
}

{/* function that reveals blocks*/ }

export { buildBoard, placeBombs, numberBoard };