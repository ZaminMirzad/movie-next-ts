import { ChangeEventHandler, useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function Breadcrumb() {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<>
			<div className=' p-2 h6 d-none d-md-block sticky-top bg-accent2'>
				<div className='row g-3'>
					<div className='d-flex align-items-center  '>
						<input
							className='search-input text-dark fw-semibold fs-6 '
							type='text'
							id='search'
							placeholder='Search here...'
						/>
						<span className='bg-white h-100 rounded-end text-dark search-span '>
							<FiSearch
								className='search-icon w-100 h-100 m-1 rounded-start'
								fontSize={8}
							/>
						</span>
						{searchTerm}
					</div>
				</div>
				{/* <nav
					aria-label='breadcrumb'
					className=''
				>
					<ol className='breadcrumb  m-0'>
						<li className='breadcrumb-item'>
							<a href='#'>Home</a>
						</li>
						<li className='breadcrumb-item'>
							<a href='#'>Library</a>
						</li>
						<li
							className='breadcrumb-item active'
							aria-current='page'
						>
							Data
						</li>
					</ol>
				</nav> */}
			</div>
		</>
	);
}
