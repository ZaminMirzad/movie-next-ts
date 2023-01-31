import React from 'react';

interface Props {
	size: number;
}

export const CustomSpinnier = ({ size }: Props) => {
	return (
		<div className='vh-100 vw-100 d-flex justify-content-center align-items-center bg-gray'>
			<div style={{ height: `${size}px`, width: `${size}px` }}>
				<div className='loader' />
			</div>
		</div>
	);
};
