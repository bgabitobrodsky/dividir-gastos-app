import { Logout } from '@mui/icons-material';
import { Button, MenuItem, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth';

export const LogoutButton = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <MenuItem 
            onClick={ onLogout }
        >
            <Logout />
            <Typography>Logout</Typography>
        </MenuItem>
    )
}
