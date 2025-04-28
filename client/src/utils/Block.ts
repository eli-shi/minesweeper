
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
    className: BlockClassName | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,

};

export default DefaultBlock;