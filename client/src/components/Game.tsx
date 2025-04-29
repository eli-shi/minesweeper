import "./style.css";



// import { Menu } from "./Menu";
import { Minesweeper } from "./Minesweeper";
import { useGameOver } from "../hooks/useGameOver";


export const Game = ({ rows, columns }: { rows: number, columns: number }) => {

    console.log("Game component");
    console.log(rows);
    console.log(columns);

    const { gameOver, triggerGameOver, resetGameOver } = useGameOver();



    return (
        <div className="game">

            {/*if the game is over, present menu, else present the game arena */}
            {gameOver ? (
                <div className="gameOver">
                    <h1>Game Over</h1>
                    <button onClick={() => {
                        console.log("game reset button clicked");
                        resetGameOver();
                    }}>Play Again</button>
                </div>
            ) : (
                <Minesweeper
                    rows={rows}
                    columns={columns}
                    numberOfMines={5}
                    triggerGameOver={() => {
                        console.log("triggerGameOver passed to Minesweeper");
                        triggerGameOver();
                    }}
                />
            )}

        </div>
    );

};