import { useContext } from "react"
import { UserContext } from "../contexts/User.Context";
import { useNavigate } from "react-router";

export const Loginpage = () => {

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

     const onLogin = () => {
        setUser({
            name: "Samuel",
            email: "toboncs@gmail.com"
        })

        navigate('/Home');
     }

    return(
        <>
        <h2>Login page</h2>
        <div>
            <span>
                User data
            </span>
            <pre>{ JSON.stringify(user, null, 3)}</pre>
        </div>
        <div>
            <button onClick={ onLogin }>Hacer Login</button>
        </div>
        </>
    )
}