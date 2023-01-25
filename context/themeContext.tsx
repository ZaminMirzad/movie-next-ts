import {
	FC,
	ReactElement,
	ReactNode,
	createContext,
	useContext,
	useState,
} from 'react';

type ContextType = {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
};

// Context
export const ThemeContext = createContext<ContextType>({
	theme: 'dark',
	toggleTheme: () => {},
});

// Provider
export const ThemeProvider: React.FC = ({ children }): JSX.Element => {
	const [theme, setTheme] = useState<'light' | 'dark'>(
		(typeof window !== 'undefined' &&
			(localStorage.getItem('theme') as 'light' | 'dark')) ||
			'dark'
	);

	const toggleTheme = (): void => {
		const val = theme === 'light' ? 'dark' : 'light';
		setTheme(val);
		typeof window !== 'undefined' && localStorage.setItem('theme', val);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
