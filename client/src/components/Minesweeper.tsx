import { useBoard } from '../hooks/useBoard';
import { BoardBlock } from './BoardBlock';
import "./style.css";



export const Minesweeper = ({ rows, columns, numberOfMines, triggerGameOver }: { rows: number, columns: number, numberOfMines: number, triggerGameOver: () => void }) => {
    const [board, revealBlock] = useBoard({ rows, columns, numberOfMines, triggerGameOver });

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
                    <BoardBlock
                        key={x * Math.random()}
                        block={block}
                        reveal={(block) => revealBlock(block)} />
                ))
            )}
            {/* add on click */}
        </div>
    );
};