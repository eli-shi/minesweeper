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


{/* function that reveals blocks*/ }

export { buildBoard, placeBombs };