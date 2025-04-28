import { useState } from 'react';
import { buildInitialBoard } from '../utils/Board';
import DefaultBlock, { BlockClassName, BlockStatus } from '../utils/Block';


export function useBoard({ rows, columns, numberOfMines }: { rows: number, columns: number, numberOfMines: number }) {

    const [board, setBoard] = useState(buildInitialBoard(rows, columns, numberOfMines));

    function revealBlock(block: DefaultBlock) {
        {
            console.log(block);

            if (block.className !== BlockClassName.empty && block.className == BlockClassName.bomb) {
                {/* set gameOver to true*/ }
            } else {
                block.blockStatus = BlockStatus.revealed;
            }

            const newBoard: DefaultBlock[][] = [...board];

            setBoard(newBoard);
        }

    }
    {/* should be callback or useEffect so that it can reset the board whenever a new block is reveal, aka when the block.status changes */ }


    return [board, revealBlock] as const;
}
