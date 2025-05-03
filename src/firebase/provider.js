import { signInWithEmailAndPassword } from "firebase/auth"
import { FirebaseAuth } from "./config"

export const loginUser = async (email, password) =>{
    try {
        
         const result = await signInWithEmailAndPassword(FirebaseAuth, email, password)
         console.log(result)

         const {uid, photoURL, displayName} = result.user;

         return {
            ok: true,
            displayName, photoURL, email, uid
         }

    } catch (error) {
        console.log(`Error from firebase: ${error.message}`)
        return {
            ok: false,
            errorMessage: error.message
         }
    }
}  