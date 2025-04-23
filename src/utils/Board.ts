import DefaultBlock from './Block';
import { BlockClassName } from './Block';
import { BlockStatus } from './Block';

const buildBoard = ({ rows, columns, numberOfMines }: { rows: number, columns: number, numberOfMines: number }) => {
    const tempBlock: DefaultBlock = {
        className: BlockClassName.default,
        blockStatus: BlockStatus.unrevealed,
    }

    const builtBoard: DefaultBlock[][] = Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: columns }, (_, colIndex) => ({
            ...tempBlock
        }))
    );
    // new Array(columns).fill(0).map((element, index) =>
    //     Array(rows).fill(0).map((element2, index2) => ({ ...tempBlock }))
    // );


    let currentNumOfMines = 0;

    // while(currentNumOfMines < numberOfMines){

    //     const row = Math.random() * rows ;
    //     const floorRows = row.toFixed(0);
    //     const column = Math.random() * columns ;
    //     const floorColumns = columns.toFixed(0);
    //     console.log("row", row);
    //     console.log("column", column);


    //     console.log("buildboard", builtBoard);

    //     if (builtBoard[row][column].className == ""){
    //         builtBoard[row][column].className = BlockClassName.bomb;
    //         currentNumOfMines++;
    //     }
    // }    


    {/* mines around*/ }

    console.log("builtBoard")
    return builtBoard;
}


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
}


{/* function that reveals blocks*/ }

export { buildBoard, placeBombs };