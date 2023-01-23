import React from 'react';
import { IoPlay } from 'react-icons/io5';
import { BsStarHalf } from 'react-icons/bs';
import Link from 'next/link';

type Props = {
	title: string;
	badge: string;
	imageUrl?: string;
	chair: string;
	id: number;
};

export default function MovieCard({
	title,
	imageUrl,
	badge,
	chair,
	id,
}: Props) {
	return (
		<>
			<Link href={`/movie/${id}`}>
				<div className='col h-100'>
					<div
						className='card  position-relative h-100 rounded-sm border-primary'
						style={{
							backgroundImage: `linear-gradient(to right bottom,rgba(0, 0, 0, 0.99),
           rgba(0,0,0,0.11)),url(${imageUrl}) `,
							backgroundPosition: 'center ',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
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
								className='card-text text-light  '
								style={{ fontSize: '14px', height: '30px' }}
							>
								{/* {description.slice(0, 150)} */}
								{chair}
							</p>
						</div>
						<div
							className='card-footer text-muted  lh-sm fw-semibold d-flex align-items-center justify-content-between'
							style={{ fontSize: '14px' }}
						>
							<span className='badge bg-primary rounded-0 text-light '>
								{badge}
							</span>
							<span className='text-warning d-flex align-items-center gap-1 fw-semibold'>
								5.6 <BsStarHalf />
							</span>
							<button
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
				</div>
			</Link>
		</>
	);
}