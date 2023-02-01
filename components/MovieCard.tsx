import React from 'react';
import { IoPlay } from 'react-icons/io5';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

type Props = {
	title: string;
	type: string;
	imageUrl?: string;
	chair: string;
	id: number;
	vote: number;
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
			<div
				className='col h-100 p-0'
				style={{ maxHeight: '418px', maxWidth: '257px' }}
			>
				<LazyLoad height={298}>
					<div
						className='position-relative h-100 border-1 border-dark p-3'
						style={{
							backgroundImage: `linear-gradient(to right bottom,rgba(0, 0, 0, 99),
           			rgba(0,0,0,0.25)),url(${imageUrl}) `,
							backgroundPosition: 'center ',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							height: '100px',
							borderRadius: '15px',
						}}
					>
						<div className=''>
							<div
								className='card-title text-capitalize text-truncte fs-4 fw-bolder text-light pt-1 '
								style={{ minHeight: '199px' }}
							>
								{title}
							</div>
							<div className='d-flex align-items-center gap-1 fw-semibold text-warning my-3 p-1 rounded-2 blur-15 mix-color-evert w-fit-c'>
								{Array.from({ length: vote / 2 }, (_, v) => {
									return <BsStarFill key={v} />;
								})}
								{(vote / 2).toFixed(1).toString()[2] === '0' && <BsStarHalf />}
							</div>
							<div className=''></div>
						</div>
						<div
							className='card-foote text-muted  lh-sm fw-semibold d-flex align-items-center justify-content-between w-100'
							style={{ fontSize: '14px' }}
						>
							<button className='badge btn btn-secondary bg-opacity-50 rounded-3 text-light text-uppercase d-flex justify-content-center align-items-center fw-bold blur-15 fw-bolder'>
								<HiPlus fontSize={35} />
							</button>
							<Link
								href={`/${type.toLocaleLowerCase()}/${id}`}
								className='btn btn-sm p-1 rounded-3 d-flex align-items-center justify-content-center w-75  blur-30 fw-bold fs-4'
							>
								Details
							</Link>
						</div>
					</div>
				</LazyLoad>
			</div>
		</>
	);
}
