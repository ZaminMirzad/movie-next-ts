import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import '../dist/custom.css';
import '../styles/custom.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ThemeProvider } from '@/context/themeContext';
import { CustomSpinnier } from '@/components/CustomSpinnier';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('bootstrap');
  }, []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log('start');
      setLoading(true);
    };
    const end = () => {
      console.log('finished');
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <ThemeProvider>
      {loading ? <CustomSpinnier size={100} /> : <Component {...pageProps} />}
    </ThemeProvider>
  );
}
