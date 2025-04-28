export const Menu = () => {
    return (
        <div className="menu">
            <button>Play</button> {/*play minesweeper, should be play as guest later once authorization/user accounts has been implemented*/}
            <button>Login</button> {/*for the future user accounts*/}
            <button>Multiplayer</button> {/*pvp implementation?*/}
        </div>
    );
};