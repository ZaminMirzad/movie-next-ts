import { ChangeEventHandler, useEffect, useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
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

	useEffect(() => {
		try {
			fetch(
				`${process.env.NEXT_PUBLIC_BASE_URL}/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}`
			)
				.then((res) => res.json())
				.then((data) => setSearchResult(data.results));
		} catch (error) {
			console.log(error);
		}
	}, [searchTerm]);

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
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<span className='bg-white h-100 rounded-end text-dark search-span '>
							<FiSearch
								className='search-icon w-100 h-100 m-1 rounded-start'
								fontSize={8}
							/>
						</span>
					</div>
				</div>
				{searchResult?.length > 0 && (
					<div className='bg-dark text-white w-50  my- position-absolute top-100 p-0 overflow-y-scroll search-list rounded mt-1'>
						<div
							className=' list-unstyled px-2 my-2 text-capitalize d-flex flex-column gap-1 list-group bg-accen list-group-flus h-100 overflow-y-auto rounded '
							// style={{ maxHeight: '50% !important', height: '500px' }}
						>
							{searchResult?.map((item) => {
								return (
									<a
										href={`/${item.media_type}/${item.id}`}
										key={item.id}
										className=' list-group-item list-group-item-action bg-accent2 text-white d-flex justify-content-between align-items-center position-relative overflow-hidden'
									>
										{item.name || item.title}
										<LazyLoad height={37}>
											<img
												src={`${process.env.NEXT_PUBLIC_PICTURE_URL}/w200${item.backdrop_path}`}
												alt=''
												height={37}
												className='position-absolute top-0 end-0 bottom-0 '
											/>
										</LazyLoad>
									</a>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
