import { Grid } from "@mui/material"

import { LoginWithGoogleButton } from '../components'

export const LoginPage = () => {
	return (
		<Grid container
			justifyContent='center'
			alignItems='center'
			sx={{
				minHeight:'100vh'
			}}
		>
			<Grid item>
				<LoginWithGoogleButton />
			</Grid>
		</Grid>
	)
}
