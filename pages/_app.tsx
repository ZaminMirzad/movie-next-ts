import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../dist/custom.css';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		import('bootstrap');
	}, []);
	return <Component {...pageProps} />;
}
