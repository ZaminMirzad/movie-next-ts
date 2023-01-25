import React, { useContext, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Breadcrumb, Sidebar } from '@/components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TiArrowLeft } from 'react-icons/ti';

import { ThemeContext } from '@/context/themeContext';

interface Props {
	movie: { fullName: string; imageUrl: string };
}

export default function MovieDetails({ movie }: Props) {
	const { theme } = useContext(ThemeContext);

	const active = useRouter();

	return (
		<>
			<div className={`container-fluid bg-${theme === 'dark' && 'secondary'} `}>
				<div className='row min-vh-100 flex-column flex-md-row '>
					<Sidebar />
					<main className='col px-0 flex-grow-1'>
						<Breadcrumb />
						<div className='container text-accent1 mt-2'>
							<Link
								href={'..'}
								className='btn btn-outline-dark  d-flex align-items-center justify-content-center text-light w-25'
							>
								<TiArrowLeft className='me-2' />
								Back
							</Link>
						</div>
						<div
							className='container text-light p-5 w-100'
							// style={{ width: '550px' }}
						>
							<div className='card w-100'>
								<h1 className='card-header text-accent1 fs-2'>
									Full Name: {movie.fullName}
								</h1>
								<img
									src={movie.imageUrl}
									alt={movie.fullName}
									// height={360}
									// width={450}
								/>
								<div className='card-footer text-accent1'>{movie.fullName}</div>
							</div>
						</div>
					</main>
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
