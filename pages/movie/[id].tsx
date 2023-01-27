import React, { useContext, useState } from 'react';
import { GetServerSideProps } from 'next';
import { SearchBar, Sidebar } from '@/components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TiArrowLeft } from 'react-icons/ti';

import { ThemeContext } from '@/context/themeContext';
import LazyLoad from 'react-lazyload';
import { apiKey, baseUrl, imgBaseUrl } from '@/constants/constants';

interface Props {
	movie: {
		name: string;
		title: string;
		poster_path: string;
		backdrop_path: string;
		vote_average: number;
		first_air_date: string;
	};
}

export default function MovieDetails({ movie }: Props) {
	const { theme } = useContext(ThemeContext);
	const path = useRouter();

	return (
		<>
			<div className={`container-fluid bg-${theme === 'dark' && 'secondary'} `}>
				<div className='row min-vh-100 flex-column flex-md-row '>
					<Sidebar />
					<main className='col px-0 flex-grow-1'>
						<SearchBar />
						{movie ? (
							<>
								<div className='container text-accent1 mt-2'>
									<Link
										href={'..'}
										className='btn btn-outline-dark  d-flex align-items-center justify-content-center text-light w-25'
									>
										<TiArrowLeft className='me-2' />
										Back
									</Link>
								</div>
								<div className='container text-light py-4 px-2 w-100'>
									<div className='card'>
										<h1 className='card-header text-accent1 fs-2'>
											Full Name: {movie.name || movie.title}
										</h1>
										<LazyLoad>
											<img
												src={imgBaseUrl + '/original' + movie.backdrop_path}
												alt={movie.name || movie.title}
												height={400}
												width={'80%'}
												className='img-fluid w-100'
											/>
										</LazyLoad>
										<div className='card-footer text-accent1'>
											{movie.title}
										</div>
									</div>
								</div>
							</>
						) : (
							<>
								<div
									className='spinner-border text-success'
									role='status'
									style={{ height: '5em', width: '5em' }}
								>
									<span className='visually-hidden'>Loading...</span>
								</div>
							</>
						)}
					</main>
				</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	// Fetch data from external API
	const res = await fetch(`${baseUrl}/movie/${params?.id}?api_key=${apiKey}`);
	const movie = await res.json();
	return {
		props: { movie }, // will be passed to the page component as props
	};
};
