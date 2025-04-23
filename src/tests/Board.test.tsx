import React from 'react';
import { render, screen } from '@testing-library/react';
import { buildBoard } from '../utils/Board';
import '@testing-library/jest-dom';
import { BlockClassName, BlockStatus } from '../utils/Block';

test('buildBoard function returns array with correct dimensions', () => {
    const rows = 6;
    const columns = 6;
    const numberOfMines = 4;
    const board = buildBoard({ rows, columns, numberOfMines });

    expect(board).toHaveLength(rows);
    expect(board[0]).toHaveLength(columns);
})

test('buildBoard function returns array with correct block properties', () => {
    const rows = 6;
    const columns = 6;
    const numberOfMines = 4;
    const board = buildBoard({ rows, columns, numberOfMines });

    board.forEach((row) => {
        row.forEach((block) => {
            expect(block).toHaveProperty('className');
            expect(block).toHaveProperty('blockStatus');
        });
    }
    );
})

test('buildBoard function returns array with correct number of mines', () => {
    const rows = 6;
    const columns = 6;
    const numberOfMines = 4;
    const board = buildBoard({ rows, columns, numberOfMines });

    board.forEach((row) => {
        row.forEach((block) => {
            expect(block.className).toBe(BlockClassName.empty);
        });
    });
}
);

test('buildBoard function returns array with correct block status', () => {
    const rows = 6;
    const columns = 6;
    const numberOfMines = 4;
    const board = buildBoard({ rows, columns, numberOfMines });

    board.forEach((row) => {
        row.forEach((block) => {
            expect(block.blockStatus).toBe(BlockStatus.unrevealed);
        });
    });
}
);


test('buildBoard function returns array with correct bomb count', () => {
    const rows = 6;
    const columns = 6;
    const numberOfMines = 4;
    const initialBoard = buildBoard({ rows, columns, numberOfMines });

    const bombBoard = placeBombs(initialBoard, numberOfMines)

    let bombCount = 0;
    bombBoard.forEach((row) => {
        row.forEach((block) => {
            if (block.className === BlockClassName.bomb) {
                bombCount++;
            }
        });
    });
    expect(bombCount).toBe(numberOfMines);
}
);








