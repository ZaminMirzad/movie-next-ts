import { baseUrl, apiKey, imgBaseUrl } from '@/constants/constants';
import Link from 'next/link';
import { ChangeEventHandler, useEffect, useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import LazyLoad from 'react-lazyload';

interface IResultProps {
	id: number;
	title: string;
	name: string;
	poster_path: string;
	backdrop_path: string;
	media_type: string;
}

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResult, setSearchResult] = useState<IResultProps[]>([]);

	const handleSearch = () => {
		try {
			fetch(`${baseUrl}/search/multi?api_key=${apiKey}&query=${searchTerm}`)
				.then((res) => res.json())
				.then((data) => setSearchResult(data.results?.slice(0, 10)));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleSearch();
	}, [searchTerm]);

	return (
		<>
			<div className=' p-2 h6 d-none d-md-block sticky-top bg-accent2'>
				<div className='row g-3'>
					<div className='d-flex align-items-center  w-50'>
						<input
							className='search-input text-dark fw-semibold fs-6 w-100 form-control rounded-0  border-0 rounded-start'
							type='text'
							id='search'
							placeholder='Search here...'
							onChange={(e) => setSearchTerm(e.target.value)}
							autoComplete='off'
							value={searchTerm}
						/>
						<span className='bg-white rounded-end text-dark search-span h-100 d-flex justify-content-center align-items-center p-1'>
							{searchTerm.length === 0 ? (
								<FiSearch
									fontSize={28}
									onClick={handleSearch}
									className='search-icon-click'
								/>
							) : (
								<MdClose
									fontSize={28}
									onClick={() => setSearchTerm('')}
									className='search-icon-click'
								/>
							)}
						</span>
					</div>
				</div>
				{searchResult?.length > 0 && (
					<div className='bg-dark text-white  my- position-absolute top-100 overflow-y-scroll search-list rounded '>
						<div className=' list-unstyled text-capitalize d-flex flex-column gap-1 list-group bg-accen  overflow-y-auto rounded '>
							{searchResult?.map((item) => {
								return (
									<Link
										href={`/${item.media_type}/${item.id}`}
										key={item.id}
										className=' list-group-item list-group-item-action bg-accent2 text-white d-flex justify-content-between align-items-center position-relative '
									>
										{item.name || item.title}
										<div className='w-25'>
											<LazyLoad height={36}>
												<img
													src={`${imgBaseUrl}/w200${item.backdrop_path}`}
													alt={item.name || item.title}
													height={36}
													width={60}
													className='position-absolute top-0 end-0 bottom-0 h-100 search-list-image'
												/>
											</LazyLoad>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
