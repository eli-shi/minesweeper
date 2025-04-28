
import { buildEmptyBoard, placeBombs, numberBoard } from '../utils/Board';
import '@testing-library/jest-dom';
import 'jest-extended';
import DefaultBlock, { BlockClassName, BlockStatus } from '../utils/Block';
import { mockEmptyBoard, mockOneBombBoard, mockTwoBombBoard, mockThreeBombBoard, mockFourBombBoard, mockFiveBombBoard, mockSixBombBoard, mockSevenBombBoard, mockEightBombBoard } from '../mocks/boardMocks';



//TO-DO: test error handling for buildBoard function, different cases for rows and columns variables

test('buildBoard function returns array with correct dimensions', () => {
    const rows = 6;
    const columns = 6;
    const board = buildEmptyBoard({ rows, columns });

    expect(board).toHaveLength(rows);
    expect(board[0]).toHaveLength(columns);
});

test('buildBoard function returns array with correct block properties', () => {
    const rows = 6;
    const columns = 6;
    const board = buildEmptyBoard({ rows, columns });

    board.forEach((row: DefaultBlock[]) => {
        row.forEach((block: DefaultBlock) => {
            expect(block).toHaveProperty('className');
            expect(block).toHaveProperty('blockStatus');
        });
    }
    );
});

test('buildBoard function returns array with correct block className', () => {
    const rows = 6;
    const columns = 6;
    const board = buildEmptyBoard({ rows, columns });

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
    const board = buildEmptyBoard({ rows, columns });

    board.forEach((row: DefaultBlock[]) => {
        row.forEach((block: DefaultBlock) => {
            expect(block.blockStatus).toBe(BlockStatus.unrevealed);
        });
    });
}
);

//TO-DO: 1. replace buildBoard function in the test with mock data 
// 2. test error handling for placeBombs function, different cases for numberOfMines variable
test('placeBombs function returns array with correct bomb count', () => {
    const rows = 6;
    const columns = 6;
    const numberOfMines = 4;
    const initialBoard = buildEmptyBoard({ rows, columns });

    const bombBoard = placeBombs(initialBoard, numberOfMines);

    let bombCount = 0;
    bombBoard.forEach((row: DefaultBlock[]) => {
        row.forEach((block) => {
            if (block.className === BlockClassName.bomb) {
                bombCount++;
            }
        });
    });
    expect(bombCount).toBe(numberOfMines);
}
);

//tests for numberBoard to return correct numbering depending on the case
test('case #0: empty board', () => {
    const numberedBoard = numberBoard(mockEmptyBoard);
    numberedBoard.forEach((row: DefaultBlock[]) => {
        row.forEach((block) => {
            expect(block.className).toBe(BlockClassName.empty);
        });
    });
}
);

test('case #1: board with one bomb', () => {
    const numberedBoard = numberBoard(mockOneBombBoard);


    numberedBoard.forEach((row: DefaultBlock[], y: number) => {
        row.forEach((block, x) => {
            if ((x === 1 && y === 0) || (x == 0 && y === 1) || (x === 1 && y === 1)) {
                expect(block.className).toBe(1);
            } else {
                expect(block.className).toBeOneOf([BlockClassName.empty, BlockClassName.bomb]);
            }


        });
    });
})

test('case #2: board with two bomb', () => {
    const numberedBoard = numberBoard(mockTwoBombBoard);


    numberedBoard.forEach((row: DefaultBlock[], y: number) => {
        row.forEach((block, x) => {
            if ((x === 2 && y === 0) || (x == 2 && y === 1)) {
                expect(block.className).toBe(1);
            } else if ((x === 0 && y === 1) || (x == 1 && y === 1)) {
                expect(block.className).toBe(2);
            } else {
                expect(block.className).toBeOneOf([BlockClassName.empty, BlockClassName.bomb]);
            }

        });
    });
})

test('case #3: board with three bomb', () => {
    const numberedBoard = numberBoard(mockThreeBombBoard);


    numberedBoard.forEach((row: DefaultBlock[], y: number) => {
        row.forEach((block, x) => {
            if ((x === 0 && y === 1) || (x == 2 && y === 1)) {
                expect(block.className).toBe(2);
            } else if ((x === 1 && y === 1)) {
                expect(block.className).toBe(3);
            } else {
                expect(block.className).toBeOneOf([BlockClassName.empty, BlockClassName.bomb]);
            }

        });
    });
})

test('case #4: board with four bomb', () => {
    const numberedBoard = numberBoard(mockFourBombBoard);


    numberedBoard.forEach((row: DefaultBlock[], y: number) => {
        row.forEach((block, x) => {
            if ((x === 1 && y === 1)) {
                expect(block.className).toBe(4);
            } else if ((x === 2 && y === 1)) {
                expect(block.className).toBe(2);
            } else if ((x === 0 && y === 2) || (x === 1 && y === 2)) {
                expect(block.className).toBe(1);
            } else {
                expect(block.className).toBeOneOf([BlockClassName.empty, BlockClassName.bomb]);
            }
        });
    });
})


test('case #5: board with five bomb', () => {
    const numberedBoard = numberBoard(mockFiveBombBoard);


    numberedBoard.forEach((row: DefaultBlock[], y: number) => {
        row.forEach((block, x) => {
            if ((x === 1 && y === 1)) {
                expect(block.className).toBe(5);
            } else if ((x === 1 && y === 2)) {
                expect(block.className).toBe(2);
            } else if ((x === 0 && y === 2) || (x === 2 && y === 2)) {
                expect(block.className).toBe(1);
            } else {
                expect(block.className).toBe(BlockClassName.bomb);
            }
        });
    });
})

test('case #6: board with six bomb', () => {
    const numberedBoard = numberBoard(mockSixBombBoard);


    numberedBoard.forEach((row: DefaultBlock[], y: number) => {
        row.forEach((block, x) => {
            if ((x === 1 && y === 1)) {
                expect(block.className).toBe(6);
            } else if ((x === 1 && y === 2)) {
                expect(block.className).toBe(3);
            } else if (x === 2 && y === 2) {
                expect(block.className).toBe(1);
            } else {
                expect(block.className).toBe(BlockClassName.bomb);
            }
        });
    });
})

test('case #7: board with seven bomb', () => {
    const numberedBoard = numberBoard(mockSevenBombBoard);


    numberedBoard.forEach((row: DefaultBlock[], y: number) => {
        row.forEach((block, x) => {
            if ((x === 1 && y === 1)) {
                expect(block.className).toBe(7);
            } else if (x === 2 && y === 2) {
                expect(block.className).toBe(2);
            } else {
                expect(block.className).toBe(BlockClassName.bomb);
            }
        });
    });
})

test('case #8: board with eight bomb', () => {
    const numberedBoard = numberBoard(mockEightBombBoard);


    numberedBoard.forEach((row: DefaultBlock[], y: number) => {
        row.forEach((block, x) => {
            if ((x === 1 && y === 1)) {
                expect(block.className).toBe(8);
            } else {
                expect(block.className).toBe(BlockClassName.bomb);
            }
        });
    });
})

