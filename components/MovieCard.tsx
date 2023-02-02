import React from 'react';
import { IoPlay } from 'react-icons/io5';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';

type Props = {
	title: string;
	type: string;
	imageUrl: string;
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
			<LazyLoad className='col mb-3 flex-grow-1 mx-auto'>
				<div className='border-1 border-light p-3 position-relative'>
					<Image
						src={imageUrl}
						fill={true}
						quality={42}
						style={{
							objectFit: 'cover',
							backgroundPosition: 'center ',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							minWidth: '250px',
							maxWidth: '340px',
							borderRadius: '15px',
						}}
						alt={title}
					/>
					<div className=''>
						<div
							className='card-titl position-sticky text-capitalize text-truncte fs-4 fw-bolder text-light pt-1 '
							style={{
								minHeight: '209px',
							}}
						>
							<h2
								className='mix-color-dog text-light bg-opacity-25 rounded-0 p-0 fs-4 blur-5'
								style={{
									width: 'fit-content',
									textShadow: '0px 5px 20px  rgba(0,0,0,0.9) ',
								}}
							>
								{title}
							</h2>
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
		</>
	);
}
