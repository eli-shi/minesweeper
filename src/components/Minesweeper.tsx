import { useBoard } from '../hooks/useBoard';
import { BoardBlock } from './BoardBlock';
import "./style.css";



export const Minesweeper = ({ rows, columns, numberOfMines }: { rows: number, columns: number, numberOfMines: number }) => {
    const [board, setBoard] = useBoard({ rows, columns, numberOfMines });

    console.log("Minesweeper component");
    console.log(rows);
    console.log(columns);
    console.log(numberOfMines);

    const boardStyle = {
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`
    };


    return (
        <div className="board" style={boardStyle}>
            {board.map((row) =>
                row.map((block, x) => (
                    <BoardBlock key={1} block={block} reveal={setBoard} />
                ))
            )}
            {/* add on click */}
        </div>
    )
}