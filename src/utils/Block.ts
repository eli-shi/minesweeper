
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
}

type DefaultBlock = {
    blockStatus: BlockStatus,
    className: BlockClassName,
};

export default DefaultBlock;