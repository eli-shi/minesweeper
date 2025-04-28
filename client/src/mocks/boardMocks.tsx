import DefaultBlock, { BlockClassName, BlockStatus } from '../utils/Block';



const mockEmptyBoard: DefaultBlock[][] = [
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
];

const mockOneBombBoard: DefaultBlock[][] = [
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
];


const mockTwoBombBoard: DefaultBlock[][] = [
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
];

const mockThreeBombBoard: DefaultBlock[][] = [
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
];

const mockFourBombBoard: DefaultBlock[][] = [
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
];

const mockFiveBombBoard: DefaultBlock[][] = [
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
];

const mockSixBombBoard: DefaultBlock[][] = [
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
];

const mockSevenBombBoard: DefaultBlock[][] = [
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
    ],
];

const mockEightBombBoard: DefaultBlock[][] = [
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.empty },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
    [
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
        { blockStatus: BlockStatus.unrevealed, className: BlockClassName.bomb },
    ],
];



export { mockEmptyBoard, mockOneBombBoard, mockTwoBombBoard, mockThreeBombBoard, mockFourBombBoard, mockFiveBombBoard, mockSixBombBoard, mockSevenBombBoard, mockEightBombBoard };