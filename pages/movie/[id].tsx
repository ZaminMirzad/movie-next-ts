import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Header } from '@/components';
import Link from 'next/link';
import { TiArrowLeft } from 'react-icons/ti';

interface Props {
	movie: { fullName: string; imageUrl: string };
}

export default function MovieDetails({ movie }: Props) {
	const [mode, setmode] = useState('light');
	const toggleMode = () => {
		if (mode === 'light') {
			setmode('dark');
			document.body.style.backgroundColor = '#141a4d';
		} else {
			setmode('light');
			document.body.style.backgroundColor = 'white';
		}
	};
	console.log(movie);

	return (
		<>
			<Header
				mode={mode}
				toggleMode={toggleMode}
			/>
			<div className='container mx-auto text-accent1 mt-2'>
				<Link
					href={'..'}
					className='btn btn-secondary d-flex align-items-center justify-content-center text-light w-25'
				>
					<TiArrowLeft className='me-2' />
					Back
				</Link>
			</div>
			<div
				className='container text-light p-5'
				style={{ width: '550px' }}
			>
				<div className='card'>
					<h1 className='card-header text-accent1 fs-2'>
						Full Name: {movie.fullName}
					</h1>
					<img
						src={movie.imageUrl}
						alt={movie.fullName}
						height={360}
						width={450}
					/>
					<div className='card-footer text-accent1'>{movie.fullName}</div>
				</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	// Fetch data from external API
	const res = await fetch(
		`https://thronesapi.com/api/v2/Characters/${params?.id}`
	);
	const movie = await res.json();
	return {
		props: { movie }, // will be passed to the page component as props
	};
};
