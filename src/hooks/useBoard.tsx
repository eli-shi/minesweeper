import { useEffect, useState } from 'react';
import { buildBoard } from '../utils/Board';
import DefaultBlock from '../utils/Block';
import { BlockStatus } from '../utils/Block';
import { BlockClassName } from '../utils/Block';

export function useBoard({ rows, columns, numberOfMines }: { rows: number, columns: number, numberOfMines: number }) {
    const [board, setBoard] = useState(buildBoard({ rows, columns, numberOfMines }));

    function revealBlock(block: DefaultBlock) {
        {
            console.log(block);

            if (block.className !== BlockClassName.default && block.className == BlockClassName.bomb) {
                {/* set gameOver to true*/ }
            } else {
                block.blockStatus = BlockStatus.revealed
            }

            const newBoard: DefaultBlock[][] = [...board];

            setBoard(newBoard);
        }

    }
    {/* should be callback or useEffect so that it can reset the board whenever a new block is reveal, aka when the block.status changes */ }


    return [board, revealBlock] as const;
}
