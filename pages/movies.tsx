import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { SearchBar, MovieCard, Sidebar, Carousel } from '@/components';
import { useContext, useState } from 'react';
import { SiHomeassistant } from 'react-icons/si';
import { GetServerSideProps } from 'next';
import { ThemeContext } from '@/context/themeContext';
import { imgBaseUrl, baseUrl, apiKey } from '@/constants/constants';

interface Props {
	id: number;
	firstName: string;
	lastName: string;
	name: string;
	imageUrl: string;
	title: string;
	original_name: string;
	original_title: string;
	backdrop_path: string;
	media_type: string;
	poster_path: string;
	vote_average: number;
	overview: string;
	first_air_date: string;
	original_language: string;
}

export default function Home({ movies }: { movies: Props[] }) {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<Head>
				<title>Moflix | Movies | Tv Shows</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<div className={`container-fluid bg-${theme === 'dark' && 'dark'} `}>
				<div className='row min-vh-100 flex-column flex-md-row '>
					<Sidebar />
					<main className='col px-0 flex-grow-1 position-relative overflow-hidden'>
						{/* SearchBar */}
						<SearchBar />
						{/* Carousel */}
						<div className='mx-auto px-lg-3 px-2 my-4 w-100'>
							<Carousel movies={movies} />
						</div>
						{/* Cards */}
						<div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-md-2 row-cols-xl-4 mx-auto p-0 my-3 px-2'>
							{movies?.map((m) => {
								return (
									<MovieCard
										key={m.id}
										title={m.original_name || m.original_title}
										imageUrl={imgBaseUrl + '/w300' + m.poster_path}
										type={m.media_type}
										chair={m.title}
										id={m.id}
										vote={m.vote_average}
									/>
								);
							})}
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	// Fetch data from external API
	const res = await fetch(`${baseUrl}/trending/movie/week?api_key=${apiKey}`);
	const movies = await res.json();

	return {
		props: { movies: movies.results }, // will be passed to the page component as props
	};
};
