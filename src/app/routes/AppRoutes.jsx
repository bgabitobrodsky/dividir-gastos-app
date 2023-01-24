import { Route, Routes, Navigate } from "react-router-dom"
import { AppPage } from "../pages"

export const AppRoutes = () => {
  return (
    <Routes>
		<Route path="/" element={ <AppPage/> }/>

		<Route path="/*" element={ <Navigate to="/" />}/>
	</Routes>
  )
}
