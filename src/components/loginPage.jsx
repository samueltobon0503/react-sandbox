import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import { useNavigate } from "react-router-dom";

export const LoginPage = () =>{

    const { user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    const onLogin = ()=>{
        setUser({
            name:'Nicolas',
            email:'nico@gmail.com'
        })

        navigate('/');
    }

    return(
        <>
        <h2> Login Page</h2>
        <div>
            <span> User Data</span>
            <pre> { JSON.stringify( user, null, 3) }</pre>
        </div>

        <div>
            <button onClick = { onLogin }> Hacer Login</button>
        </div>
        </>
    )

}