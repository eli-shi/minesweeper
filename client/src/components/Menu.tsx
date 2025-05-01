import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export const Menu = ({ resetGameOver }: { resetGameOver: () => void }) => {

    const { logout } = useLogout()
    const { user } = useAuthContext()



    const handleClick = () => {
        logout()
    }

    return (
        <div className="menu">
            {user && (
                <div>
                    <p>Welcome, player</p>
                    <button onClick={() => {
                        console.log("game reset button clicked");
                        resetGameOver();
                    }}>Play</button>
                    <button onClick={handleClick}>Log out</button>
                </div>

            )}

            {!user && (
                <div>
                    <button onClick={() => {
                        console.log("game reset button clicked");
                        resetGameOver();
                    }}>Play</button>
                    {/*play minesweeper, should be play as guest later once authorization/user accounts has been implemented*/}
                    <Link to="/login">Login</Link> {/*for the future user accounts*/}
                    <Link to="/signup">Signup</Link> {/*for the future user accounts*/}
                </div>
            )}

        </div>
    );
};