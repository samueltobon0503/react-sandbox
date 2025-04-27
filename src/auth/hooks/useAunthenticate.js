import { authTypes } from "../types/authTypes";

export const useAuthenticate = (dispatch) => {
  
    const login = ({email, password} ) => {
        const action = {
            type: authTypes.login,
            payload: {email, password},
        };

        localStorage.setItem('user', JSON.stringify({email, password}));
 
        dispatch(action);
    };

    const logout = ( ) => {
        const action = {
            type: authTypes.logout,
        };

        dispatch(action);
    };


    return { login };
 }