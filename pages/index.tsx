import { Spinner } from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index() {
	const route = useRouter();
	useEffect(() => {
		route.pathname === '/' && route.push('/home');
	}, []);
	return (
		<>
			{/* <Spinner /> */}
			<div className='loader'></div>
		</>
	);
}
