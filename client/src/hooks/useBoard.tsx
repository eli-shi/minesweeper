import { useState } from 'react';
import { buildInitialBoard } from '../utils/Board';
import DefaultBlock, { BlockClassName, BlockStatus } from '../utils/Block';


export function useBoard({ rows, columns, numberOfMines }: { rows: number, columns: number, numberOfMines: number }) {

    const [board, setBoard] = useState(buildInitialBoard(rows, columns, numberOfMines));

    function revealBlock(block: DefaultBlock, triggerGameOver: () => void) {

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
    {/* should be callback or useEffect so that it can reset the board whenever a new block is reveal, aka when the block.status changes */ }


    return [board, revealBlock] as const;
}
