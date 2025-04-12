import { useContext, useEffect } from "react"
import { UserContext } from "../auth/contexts/User.Context"

export const HomePage = () =>{

    const {user, setUser} = useContext(UserContext);
    return(
        <>
        <h1>Home</h1>
        <p>Nombre: {user?.name}</p>
        </>
    )
}