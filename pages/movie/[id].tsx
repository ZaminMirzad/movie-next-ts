import React, { useContext } from 'react';
import { GetServerSideProps } from 'next';
import { SearchBar, Sidebar } from '@/components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ThemeContext } from '@/context/themeContext';
import { apiKey, baseUrl, imgBaseUrl } from '@/constants/constants';
import Image from 'next/image';
import { CustomSpinnier } from '@/components/CustomSpinnier';
import { BsBook, BsShareFill, BsStarFill, BsStarHalf } from 'react-icons/bs';
import blurImg from 'public/next.svg';

interface Props {
	movie: {
		name: string;
		title: string;
		overview: string;
		poster_path: string;
		backdrop_path: string;
		vote_average: number;
		first_air_date: string;
		genres: { id: number; name: string }[];
		production_companies: {
			id: number;
			name: string;
			logo_path: string;
			origin_country: string;
		}[];
		production_countries: {
			iso_3166_1: number;
			name: string;
		}[];
		spoken_languages: { iso_639_1: string; name: string }[];
		imdb_id: string;
		id: number;
		original_language: string;
		original_title: string;
		release_date: string;
		runtime: number;
		status: string;
		tagline: string;
		vote_count: number;
		budget: number;
		homepage: string;
		belongs_to_collection: {};
		videos: {
			results: {
				id: string;
				iso_3166_1: string;
				key: string;
				name: string;
				official: boolean;
				published_at: string;
				site: string;
				type: string;
			}[];
		};
	};
	casts: {
		cast: {
			id: number;
			gender: string;
			known_for_department: string;
			name: string;
			original_name: string;
			profile_path: string;
			cast_id: number;
			character: string;
			credit_id: string;
			order: number;
		}[];
		crew: {
			id: number;
			gender: string;
			known_for_department: string;
			name: string;
			original_name: string;
			profile_path: string;
			cast_id: number;
			character: string;
			credit_id: string;
			department: string;
			job: string;
		}[];
	};
}

/* 


*/
export default function MovieDetails({ movie, casts }: Props) {
	const { theme } = useContext(ThemeContext);
	const path = useRouter();
	console.log(movie);
	return (
		<>
			<div className={`container-fluid bg-${theme === 'dark' && 'secondary'} `}>
				<div className='row min-vh-100 flex-column flex-md-row '>
					<Sidebar />
					<main className='col p-0 flex-grow-1'>
						<SearchBar />
						{movie ? (
							<>
								<div className=' text-light  w-100  position-relative'>
									<div className=' position-relative p-0'>
										<Image
											src={imgBaseUrl + '/original' + movie.backdrop_path}
											alt={movie.name || movie.title}
											fill
											className='img-fluid w-100'
											quality={80}
										/>
										<div
											className='position-sticky bg-gradient-to-tl pb-2'
											style={{ height: '608px' }}
										>
											<div className=' h-100 d-flex flex-column align-items-center  overflow-auto scroll-sm '>
												<div className='row row-cols-12 gap-5 h-lg-75 h-50 w-lg-70 w-100 my-auto p-lg-4 p-3 justify-content-center '>
													<div className='col col-lg-7 col-12  h-100 d-flex flex-column justify-content-between'>
														<div className=''>
															<h1 className='fs-2'>{movie.title}</h1>
															<div className='d-flex gap-2 align-items-center fs-6 fw-lighter'>
																<div className='d-flex align-items-center gap-1 text-warning'>
																	{Array.from(
																		{ length: movie.vote_average / 2 },
																		(_, v) => {
																			return <BsStarFill key={v} />;
																		}
																	)}
																	{(movie.vote_average / 2)
																		.toFixed(1)
																		.toString()[2] > '5' && <BsStarHalf />}
																</div>{' '}
																{(movie.vote_average / 2).toFixed(1)} {'|'}
																<div className=''>
																	{(movie.runtime / 60).toString()[0]}h{' '}
																	{movie.runtime % 60}min
																</div>
																<p className='text-success m-0'>
																	{movie.status}
																</p>
															</div>
															{/* genres */}
															<div className='d-flex gap-2 align-items-center py-2'>
																{movie.genres.map((genre) => {
																	return (
																		<span
																			key={genre.id}
																			className='badge p-0 blur-5 fw-light rounded-1'
																		>
																			{genre.name}
																		</span>
																	);
																})}
															</div>
														</div>
														{/* watch trailer buttons */}
														<div className='d-flex align-items-center gap-2 pb-lg-2 pb-1'>
															<button className='btn btn-secondary'>
																Watch Trailer
															</button>
															<button className='btn btn-primary'>
																Watch Full Movie
															</button>
														</div>
													</div>
													{/* Play image right side*/}
													<div className='col col-lg-4 col-12 h-100 position-relative shadow-lg'>
														<Image
															src={imgBaseUrl + '/original' + movie.poster_path}
															fill
															alt={movie.name || movie.title}
															style={{
																objectFit: 'cover',
															}}
															quality={50}
															className='rounded-4'
														/>
													</div>
													{/* overview */}
													<div className=' row row-cols-12 gap-5 justify-content-center p-4 pb-4 rounded-3 bg-dark bg-opacity-75'>
														<div className='col col-lg-7 col-12 '>
															<h1 className='fs-5'>Story</h1>
															<p className='text-muted'>{movie.overview}</p>
															<div className='mt-4 d-flex gap-2 align-items-center'>
																<button className='btn btn-outline-secondary text-info align-items-center d-flex gap-2 fs-6'>
																	<BsShareFill /> Share
																</button>
																<button className='btn btn-outline-secondary text-warning align-items-center d-flex gap-2 fs-6 '>
																	<BsStarFill /> Rate This
																</button>
																{movie.homepage && (
																	<Link
																		href={movie.homepage}
																		target='_blank'
																		referrerPolicy='no-referrer'
																		className=' align-items-center d-flex gap-2 fs-6 '
																	>
																		<BsBook /> Read More...
																	</Link>
																)}
															</div>
														</div>
														<div className='col col-lg-4 col-12 '>
															<div>
																<div>
																	<h1 className='fs-5 fw-normal'>Director</h1>
																	<p className='text-muted'>John Doe</p>
																</div>
																<div>
																	<h1 className='fs-5 fw-normal'>Writers</h1>
																	<p className='text-muted'>
																		John Doe,Jim Doe, Kiran Lie
																	</p>
																</div>
																<div>
																	<h1 className='fs-5 fw-normal'>Tags</h1>
																	<p className='text-muted'>{movie.tagline}</p>
																</div>
															</div>
														</div>
													</div>
													{/* Casts */}
													<div className=' rounded-3 bg-dark bg-opacity-75 w-100'>
														<h1 className='fs-5'>Casts</h1>
														<div
															className='d-flex w-100 scroll-sm overflow-x-auto'
															style={{
																height: '200px',
																maxWidth: '78vw',
															}}
														>
															<div className='d-flex gap-2'>
																{casts.cast?.map((cast: any) => {
																	return (
																		cast.profile_path && (
																			<div
																				key={cast.id}
																				className='position-relative'
																				style={{
																					height: '180px',
																					width: '140px',
																				}}
																			>
																				<Image
																					src={
																						imgBaseUrl +
																							'/w200' +
																							cast.profile_path || blurImg
																					}
																					fill
																					alt={cast.name}
																					placeholder='blur'
																					blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
																					className='rounded-2'
																				/>
																				<div className='position-sticky p-2 bg-gradient-to-tr h-100 w-100 '>
																					<Link
																						href={`/acting/${cast.id}`}
																						className='text-light'
																					>
																						<div className='hover-hidden hover-visible h-100 w-100 d-flex flex-column justify-content-end'>
																							<h3 className='fs-6 fw-semibold'>
																								{cast.name}
																							</h3>
																							<p className='fs-xs'>
																								Character: {cast.character}
																							</p>
																						</div>
																					</Link>
																				</div>
																			</div>
																		)
																	);
																})}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</>
						) : (
							<>
								<CustomSpinnier size={20} />
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
	const res = await fetch(
		`${baseUrl}/movie/${params?.id}?api_key=${apiKey}&append_to_response=videos,images`
	);
	const castRes = await fetch(
		`${baseUrl}/movie/${params?.id}/credits?api_key=${apiKey}`
	);
	const movie = await res.json();
	const casts = await castRes.json();
	return {
		props: { movie, casts },
	};
};
