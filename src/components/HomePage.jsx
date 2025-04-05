import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

export const HomePage= () =>{

    const{ user, setUser} = useContext(UserContext);

    return(
        <div>
            <h1>Hola Home Page</h1>
            <h3> User Information</h3>
            <span> Name: {user?.name}</span>
            <br/>
            <span> Email: {user?.email}</span>
        </div>
    )
}