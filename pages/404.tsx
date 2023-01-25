import Link from 'next/link';
import React from 'react';

export default function NotFound() {
	return (
		<div className='d-flex flex-column justify-content-center align-items-center bg-accent1 vh-100'>
			<h1 className='h1 text-light'>
				<span className='badge bg-accent2 rounded-1'>404 😔</span> - Page Not
				Found
			</h1>
			<Link
				href={'/'}
				className='btn btn-outline-primary text-light'
			>
				Go Home
			</Link>
		</div>
	);
}
