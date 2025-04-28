
export enum BlockStatus {
    unrevealed = "unrevealed",
    revealed = "revealed",
    flagged = "flagged",
    question = "question",
}
export enum BlockClassName {
    bomb = "bomb",
    empty = "empty",
    default = "",
    one = "one",
    two = "two",
    three = "three",
    four = "four",
    five = "five",
    six = "six",
    seven = "seven",
    eight = "eight",
}

type DefaultBlock = {
    blockStatus: BlockStatus,
    className: BlockClassName,
};

export default DefaultBlock;