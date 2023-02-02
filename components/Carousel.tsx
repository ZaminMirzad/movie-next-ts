import { imgBaseUrl } from '@/constants/constants';
import Link from 'next/link';
import React from 'react';
import { HiChevronLeft, HiChevronRight, HiPlus } from 'react-icons/hi';
import LazyLoad from 'react-lazyload';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export interface Props {
	id: number;
	firstName: string;
	lastName: string;
	imageUrl: string;
	title: string;
	name: string;
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

export const CustomCarousel = ({ movies }: { movies: Props[] }) => {
	return (
		<>
			<Carousel
				className='position-relative'
				showArrows={true}
				transitionTime={1000}
				interval={4000}
				autoPlay={true}
				showStatus={false}
				infiniteLoop={true}
				// animationHandler={'fade'}
				showIndicators={false}
				renderArrowPrev={(clickHandler, hasPrev) => {
					return (
						<div
							className={`position-${
								hasPrev ? 'absolute' : 'hidden'
							} top-0 bottom-0 start-0 p-3 text-white rounded-3 fs-2 d-flex justify-content-center align-items-center  text-light h-100 `}
							style={{ zIndex: '50' }}
						>
							<button
								className={`btn text-white rounded-3 fs-2 d-flex justify-content-center align-items-center p-1 blur-20 text-light `}
								onClick={clickHandler}
							>
								<HiChevronLeft
									fontSize={25}
									className=''
								/>
							</button>
						</div>
					);
				}}
				renderArrowNext={(clickHandler, hasNext) => {
					return (
						<div
							className={`position-${
								hasNext ? 'absolute' : 'hidden'
							}  top-0 bottom-0 end-0 p-3 text-white rounded-3 fs-2 d-flex justify-content-center align-items-center h-100 `}
						>
							<button
								className={` btn text-white rounded-3 fs-2 d-flex justify-content-center align-items-center p-1 blur-20 text-light `}
								onClick={clickHandler}
							>
								<HiChevronRight
									fontSize={25}
									className=''
								/>
							</button>
						</div>
					);
				}}
			>
				{movies?.map((m) => {
					return (
						<LazyLoad key={m.id}>
							<div className='slider-wrapper '>
								<div className='slider-wrappe p-4 d-flex flex-column justify-content-between align-items-start h-100 w-100 position-relative'>
									<Image
										src={imgBaseUrl + '/original' + m.backdrop_path}
										fill={true}
										quality={32}
										style={{
											objectFit: 'cover',
											backgroundPosition: 'center ',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											borderRadius: '15px',
										}}
										alt={m.title || m.name}
									/>
									<h1
										className='text-light text-capitalize px-2 position-sticky bg-opacity-2 blur-5 rounded-1 bg-dak shadow-c'
										style={{
											width: 'fit-content',
											textShadow: '5px 5px 20px  rgba(0,0,0,0.9) ',
										}}
									>
										{m.title || m.name}
									</h1>
									<div className='w-100 d-flex gap-3 justify-content-start align-items-center'>
										<button className='d-flex gap-1 align-items-center btn rounded-3 blur-20 fw-bold text-light'>
											<HiPlus
												fontWeight={800}
												fontSize={24}
											/>{' '}
											Watchlist
										</button>
										<Link
											href={`/${m.media_type.toLocaleLowerCase()}/${m.id}`}
											className='btn fw-bold blur-30 rounded-3'
										>
											Watch Now
										</Link>
									</div>
								</div>
							</div>
						</LazyLoad>
					);
				})}
			</Carousel>
		</>
	);
};

export default CustomCarousel;
