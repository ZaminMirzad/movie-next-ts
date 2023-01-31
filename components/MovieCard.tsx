import React from 'react';
import { IoPlay } from 'react-icons/io5';
import { BsStarHalf } from 'react-icons/bs';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

type Props = {
	title: string;
	type: string;
	imageUrl?: string;
	chair: string;
	id: number;
	vote?: string;
};

export default function MovieCard({
	title,
	imageUrl,
	type,
	chair,
	id,
	vote,
}: Props) {
	return (
		<>
			<Link href={`/${type.toLocaleLowerCase()}/${id}`}>
				<div
					className='col h-100'
					style={{ height: '200px' }}
				>
					<LazyLoad height={300}>
						<div
							className='card  position-relative h-100 rounded-sm border-primary'
							style={{
								backgroundImage: `linear-gradient(to right bottom,rgba(0, 0, 0, 0.99),
           			rgba(0,0,0,0.11)),url(${imageUrl}) `,
								backgroundPosition: 'center ',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								height: '100px',
							}}
						>
							<div className='card-body mb-4'>
								<h1
									className='card-title text-capitalize text-truncte fs-6 fw-semibold text-light mt-2'
									style={{ height: '30px' }}
								>
									{title}
								</h1>
								<p
									className='card-text text-light'
									style={{ fontSize: '14px', height: '120px' }}
								>
									{chair}
								</p>
							</div>
							<div
								className='card-footer text-muted  lh-sm fw-semibold d-flex align-items-center justify-content-between'
								style={{ fontSize: '14px' }}
							>
								<span className='badge bg-primary rounded-0 text-light text-uppercase'>
									{type}
								</span>
								<span className='text-warning d-flex align-items-center gap-1 fw-semibold'>
									{vote} <BsStarHalf />
								</span>
								<button
									type='button'
									name='trailer-button'
									className='btn bg-secondary btn-sm px-2 py-0 rounded-0 d-flex align-items-center'
									style={{ fontSize: '16px', height: '22px' }}
								>
									<IoPlay
										color='white'
										fontWeight={900}
									/>
								</button>
							</div>
						</div>
					</LazyLoad>
				</div>
			</Link>
		</>
	);
}
