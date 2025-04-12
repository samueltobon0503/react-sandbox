import { useContext } from "react"
import { UserContext } from "../contexts/User.Context";
import { useNavigate } from "react-router";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

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
            <Card title="Login Page"  className="bg-teal-500 flex flex-column align-items-center"
              style={{ width: 'auto', padding: '2rem' }}>
                <pre>{ JSON.stringify(user, null, 3)}</pre>
                <Button icon="pi pi-check" onClick={ onLogin }>Hacer Login</Button>
            </Card>
        </div>
        </>
    )
}