import { useReducer } from "react";
import { UserContext } from "./User.Context";
import { useAuthenticate } from "../../hooks/useAuthenticate";
import { authReducer } from "../../Reducer/authReducer";

const authInitialState = {
    logged: false,
    user: null,
    errorMessage: null
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return {
            logged: true,
            errorMessage: null,
            user
        }
    }
    return authInitialState
}
export const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(authReducer, authInitialState, init);
    const { login, logout } = useAuthenticate(dispatch);

    return (
        <UserContext.Provider value={{ userState, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
