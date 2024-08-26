import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
);
