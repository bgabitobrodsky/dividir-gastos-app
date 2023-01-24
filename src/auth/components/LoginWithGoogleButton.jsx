import { Google } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { startGoogleSignIn } from '../../store/auth';

export const LoginWithGoogleButton = () => {

    const dispatch = useDispatch();

    const onLoginWithGoogle = () => {
        dispatch( startGoogleSignIn() );
    }

    return (
        <Button 
            variant='contained'
            onClick={ onLoginWithGoogle }
        >
            <Google />
            <Typography>Login with Google</Typography>
        </Button>
    )
}
