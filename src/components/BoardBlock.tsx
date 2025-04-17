import DefaultBlock from "../utils/Block";
import "./style.css";

export const BoardBlock = ({ block, reveal }: { block: DefaultBlock, reveal: Function }) => {
    return (
        <div className={`boardBlock ${block.blockStatus} ${block.className}`} onClick={() => { console.log("clicked"); console.log(block.className); reveal(block); }}>
            <p>{block.className}</p>
        </div>
    )
}