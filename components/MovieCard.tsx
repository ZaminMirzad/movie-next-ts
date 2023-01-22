import React from 'react';
import { IoPlay } from 'react-icons/io5';
import { BsStarHalf } from 'react-icons/bs';

type Props = {
	title: string;
};

export default function MovieCard({ title }: Props) {
	return (
		<>
			<div className='col h-100'>
				<div
					className='card  position-relative h-100 rounded-sm border-primary'
					style={{
						backgroundImage: `linear-gradient(to right bottom,rgba(0, 0, 0, 0.99),
           rgba(0,0,0,0.11)),url('https://img.freepik.com/free-vector/village-house-hill-with-snow-frozen-pond-night-vector-cartoon-illustration-winter-landscape-countryside-with-small-wooden-cottage-coniferous-trees-ice-lake-moon-sky_107791-10654.jpg?w=826&t=st=1674415811~exp=1674416411~hmac=9110bf0e05a8289dcca2ad5f93a08946c8630e1a5dc9bcebf1b0b0995c620ba9') `,
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
						</p>
					</div>
					<div
						className='card-footer text-muted  lh-sm fw-semibold d-flex align-items-center justify-content-between'
						style={{ fontSize: '14px' }}
					>
						<span className='badge bg-primary rounded-0 text-light '>
							2 days ago
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
		</>
	);
}
