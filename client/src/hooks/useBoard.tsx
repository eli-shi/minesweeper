import { useState, useEffect } from 'react';
import { buildInitialBoard } from '../utils/Board';
import DefaultBlock, { BlockClassName, BlockStatus } from '../utils/Block';


export function useBoard({ rows, columns, numberOfMines, triggerGameOver }: { rows: number, columns: number, numberOfMines: number, triggerGameOver: () => void }) {

    const [board, setBoard] = useState(buildInitialBoard(rows, columns, numberOfMines));

    function revealBlock(block: DefaultBlock) {

        if (block.blockStatus === BlockStatus.revealed) {
            // If the block is already revealed, do nothing
            return;
        }

        console.log(block);

        if (block.className == BlockClassName.bomb) {
            block.blockStatus = BlockStatus.revealed; // Mark the bomb as revealed
            const newBoard: DefaultBlock[][] = [...board];
            setBoard(newBoard); // Update the board state
            triggerGameOver(); // Trigger game over
        } else {
            block.blockStatus = BlockStatus.revealed; // Mark the block as revealed
            const newBoard: DefaultBlock[][] = [...board];
            setBoard(newBoard); // Update the board state
        }


    }

    useEffect(() => {
        const revealed = board.reduce((acc, row) => {
            acc += row.reduce((acc2, block) => {
                acc2 += (block.blockStatus === BlockStatus.revealed) ? 1 : 0;
                return acc2;
            }, 0);
            return acc;
        }, 0);

        if (revealed === rows * columns - numberOfMines) {
            alert("You won!");
            triggerGameOver();
        }
    }, [board]);
    {/* should be callback or useEffect so that it can reset the board whenever a new block is reveal, aka when the block.status changes */ }


    return [board, revealBlock] as const;
}
