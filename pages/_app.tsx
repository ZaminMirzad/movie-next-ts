import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../dist/custom.css';
import '../styles/custom.css';
import { ThemeProvider } from '@/context/themeContext';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		import('bootstrap');
	}, []);
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
