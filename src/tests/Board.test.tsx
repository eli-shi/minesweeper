
import { buildBoard, placeBombs } from '../utils/Board';
import '@testing-library/jest-dom';
import DefaultBlock, { BlockClassName, BlockStatus } from '../utils/Block';

test('buildBoard function returns array with correct dimensions', () => {
    const rows = 6;
    const columns = 6;
    const board = buildBoard({ rows, columns });

    expect(board).toHaveLength(rows);
    expect(board[0]).toHaveLength(columns);
})

test('buildBoard function returns array with correct block properties', () => {
    const rows = 6;
    const columns = 6;
    const board = buildBoard({ rows, columns });

    board.forEach((row: DefaultBlock[]) => {
        row.forEach((block: DefaultBlock) => {
            expect(block).toHaveProperty('className');
            expect(block).toHaveProperty('blockStatus');
        });
    }
    );
})

test('buildBoard function returns array with correct block className', () => {
    const rows = 6;
    const columns = 6;
    const board = buildBoard({ rows, columns });

    board.forEach((row: DefaultBlock[]) => {
        row.forEach((block: DefaultBlock) => {
            expect(block.className).toBe(BlockClassName.empty);
        });
    });
}
);

test('buildBoard function returns array with correct block status', () => {
    const rows = 6;
    const columns = 6;
    const board = buildBoard({ rows, columns });

    board.forEach((row: DefaultBlock[]) => {
        row.forEach((block: DefaultBlock) => {
            expect(block.blockStatus).toBe(BlockStatus.unrevealed);
        });
    });
}
);


test('buildBoard function returns array with correct bomb count', () => {
    const rows = 6;
    const columns = 6;
    const numberOfMines = 4;
    const initialBoard = buildBoard({ rows, columns });

    const bombBoard = placeBombs(initialBoard, numberOfMines);

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








