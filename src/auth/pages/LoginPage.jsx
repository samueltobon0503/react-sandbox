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
        <div className="flex justify-content-center align-items-center h-screen ">
                <pre>{ JSON.stringify(user, null, 3)}</pre>
                <button  onClick={ onLogin }>Hacer Login</button>
        </div>
        </>
    )
}