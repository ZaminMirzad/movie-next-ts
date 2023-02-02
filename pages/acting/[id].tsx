import React, { useContext } from 'react';
import { GetServerSideProps } from 'next';
import { SearchBar, Sidebar } from '../../components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TiArrowLeft } from 'react-icons/ti';

import { ThemeContext } from '../../context/themeContext';
import { apiKey, baseUrl, imgBaseUrl } from '../../constants/constants';
import Image from 'next/image';

interface Props {
	person: {
		name: string;
		title: string;
		poster_path: string;
		profile_path: string;
		vote_average: number;
		first_air_date: string;
	};
}

export default function Person({ person }: Props) {
	const { theme } = useContext(ThemeContext);
	const path = useRouter();

	return (
		<>
			<div className={`container-fluid bg-${theme === 'dark' && 'secondary'} `}>
				<div className='row min-vh-100 flex-column flex-md-row '>
					<Sidebar />
					<main className='col px-0 flex-grow-1'>
						<SearchBar />
						{person ? (
							<>
								<div className='container text-accent1 mt-2'>
									<Link
										href={'..'}
										className='btn btn-secondary  d-flex align-items-center justify-content-center text-light w-25'
									>
										<TiArrowLeft className='me-2' />
										Back
									</Link>
								</div>
								<div className='container text-light py-4 px-2 w-100'>
									<div className='card position-relative w-50'>
										<h1 className='card-header text-accent1 fs-2'>
											Full Name: {person.name || person.title}
										</h1>
										<div
											style={{
												height: '400px',
												width: '40%',
											}}
										>
											<Image
												src={imgBaseUrl + '/original' + person.profile_path}
												alt={person.name || person.title}
												fill
												className='img-fluid w-100'
												quality={50}
											/>
										</div>
										<div className='card-footer text-accent1'>
											{person.title}
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
	const res = await fetch(`${baseUrl}/person/${params?.id}?api_key=${apiKey}`);
	const person = await res.json();
	return {
		props: { person }, // will be passed to the page component as props
	};
};
