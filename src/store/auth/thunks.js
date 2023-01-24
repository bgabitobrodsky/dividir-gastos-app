import { logoutFirebase, signinWithGoogle } from "../../firebase/providers";
import { loadingCredentials, logout, login } from "./"

export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch( loadingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( loadingCredentials() );
        const result = await signinWithGoogle();

        if( !result.ok ) return dispatch( logout( result ))
        
        dispatch( login( result ))
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        dispatch( loadingCredentials() );
        await logoutFirebase();
        dispatch( logout() );
    }
}