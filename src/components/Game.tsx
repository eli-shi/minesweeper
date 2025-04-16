import "./style.css";

import { useState } from "react";

import { Menu } from "./Menu";
import { Minesweeper } from "./Minesweeper";


export const Game = ({ rows, columns }: { rows: number, columns: number }) => {

    console.log("Game component");
    console.log(rows);
    console.log(columns);

    const [gameOver, setGameOver] = useState(false);


    return (
        <div className="game">

            {/*if the game is over, present menu, else present the game arena */}
            {gameOver ? <Menu /> : <Minesweeper rows={rows} columns={columns} numberOfMines={5} />}

        </div>
    );

}