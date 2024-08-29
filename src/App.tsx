import { Navigate, Route, Routes } from 'react-router-dom';
import { Card, Cards, Error } from './pages';
import { ERoutes } from './types/routes.enum';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path={`${ERoutes.CARD}/:id`} element={<Card />} />
				<Route path={ERoutes.HOME} element={<Cards />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
