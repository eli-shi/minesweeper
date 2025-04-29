import "./style.css";



// import { Menu } from "./Menu";
import { Minesweeper } from "./Minesweeper";
import { useGameOver } from "../hooks/useGameOver";
import { Menu } from "./Menu";


export const Game = ({ rows, columns }: { rows: number, columns: number }) => {

    console.log("Game component");
    console.log(rows);
    console.log(columns);

    const { gameOver, triggerGameOver, resetGameOver } = useGameOver();



    return (
        <div className="game">

            {/*if the game is over, present menu, else present the game arena */}
            {gameOver ? (
                <Menu resetGameOver={resetGameOver} />
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