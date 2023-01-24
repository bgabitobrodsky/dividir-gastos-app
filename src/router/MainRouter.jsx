import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppRoutes } from '../app/routes/AppRoutes'
import { LoadingAuth } from '../auth/components/LoadingAuth'
import { LoginPage } from '../auth/pages'
import { useLoadAuth } from '../hooks/useLoadAuth'

export const MainRouter = () => {

    const loginStatus = useLoadAuth();

    if( loginStatus === "loading" ) return <LoadingAuth/>

	return (
		<Routes>

            {
                loginStatus === 'authenticated'
                ? <Route path='*' element={ <AppRoutes /> }/>
                : <Route path='/login' element={ <LoginPage />}/>
            }
            
			<Route path='*' element={ <Navigate to='/login'/> }/>
		</Routes>
	)
}
