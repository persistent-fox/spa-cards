import { Route, Routes } from 'react-router-dom';
import { Card, Cards } from './pages';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path={'/card/:id'} element={<Card />} />
				<Route path={'/'} element={<Cards />} />
			</Routes>
		</div>
	);
}

export default App;
