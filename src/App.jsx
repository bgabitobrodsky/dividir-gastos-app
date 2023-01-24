import { MainRouter } from './router/MainRouter'
import { AppTheme } from './theme/AppTheme'

export const App = () => {
	return (
		<AppTheme>
			<MainRouter />
		</AppTheme>
	)
}
