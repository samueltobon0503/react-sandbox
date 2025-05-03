import { useContext, useEffect } from "react"
import { UserContext } from "../auth/contexts/User.Context"
import { EventList } from "../UI/components/EventList";

export const HomePage = () =>{

    const {user, setUser} = useContext(UserContext);
    return(
        <>
        <h1 className="text-center mb-4">Mis eventos</h1>
            <EventList></EventList>
        <p>Nombre: {user?.name}</p>
        </>
    )
}