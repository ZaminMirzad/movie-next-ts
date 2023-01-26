import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index() {
	const route = useRouter();
	useEffect(() => {
		route.pathname === '/' && route.push('/home');
	}, []);
	return (
		<>
			<div className='vh-100 vw-100 d-flex flex-column justify-content-center align-items-center bg-dark text-warning gap-2'>
				<div
					className='spinner-border text-success'
					role='status'
					style={{ height: '5em', width: '5em' }}
				>
					<span className='visually-hidden'>Loading...</span>
				</div>
				Loading ...
			</div>
		</>
	);
}
