import { Route, Routes } from 'react-router-dom';
import { Card, Cards } from './pages';
import { ERoutes } from './types/routes.enum';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path={`${ERoutes.CARD}/:id`} element={<Card />} />
				<Route path={ERoutes.HOME} element={<Cards />} />
			</Routes>
		</div>
	);
}

export default App;
