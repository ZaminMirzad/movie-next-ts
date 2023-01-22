import React from 'react';
import { BsSun, BsFillMoonStarsFill } from 'react-icons/bs';
import { BsCollectionPlayFill } from 'react-icons/bs';

type Props = {
	mode: string;
	toggleMode: () => void;
};

export default function Header({ mode, toggleMode }: Props) {
	const textColor: string = mode === 'light' ? 'dark' : 'light';
	const bgColor: string = 'accent2';
	return (
		<div className='fluid '>
			<div className='container-fluid '>
				<nav
					className={`navbar navbar-expand-lg bg-body-tertiary  text-white text-${
						mode === 'light' ? 'dark' : 'light'
					} `}
				>
					<div className='container-fluid h-100'>
						<a
							className='navbar-brand bg-danger rounded-1 text-white px-4 fs-5 fw-semibold d-flex align-items-center gap-2 h-100'
							href='#'
						>
							PLAX <BsCollectionPlayFill fontSize='26' />
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
								<li className='nav-item'>
									<a
										className={`nav-link text-${textColor}`}
										aria-current='page'
										href='#'
									>
										Movies
									</a>
								</li>
								<li className='nav-item'>
									<a
										className={`nav-link text-${textColor}`}
										href='#'
									>
										Tv-Shows
									</a>
								</li>
								<li className='nav-item dropdown'>
									<a
										className={`nav-link dropdown-toggle text-${textColor}`}
										href='#'
										role='button'
										data-bs-toggle='dropdown'
										aria-expanded='false'
									>
										More
									</a>
									<ul
										className={`dropdown-menu bg-${bgColor}`}
										// data-bs-theme='dark'
									>
										<li>
											<a
												className={`dropdown-item text-${textColor}`}
												href='#'
											>
												Actors
											</a>
										</li>
										<li>
											<a
												className={`dropdown-item text-${textColor}`}
												href='#'
											>
												Production Companies
											</a>
										</li>
										<li>
											<hr className='dropdown-divider' />
										</li>
										<li>
											<a
												className={`dropdown-item text-${textColor}`}
												href='#'
											>
												Stream Providers
											</a>
										</li>
									</ul>
								</li>
							</ul>
							<form
								className='d-flex me-1 '
								role='search'
							>
								<input
									className='form-control form-control-sm me-2 rounded-1  '
									type='search'
									placeholder='Search here...'
									aria-label='Search'
								/>
							</form>
							{/* Toggle Btn for dark/light mode */}
							<div
								className={`ml-2 text-${mode === 'light' ? 'dark' : 'light'}`}
							>
								<button
									className='btn  btn-in p-2 rounded d-flex justify-content-center align-content-center'
									onClick={toggleMode}
								>
									{mode === 'light' ? (
										<BsFillMoonStarsFill fontSize={16} />
									) : (
										<BsSun
											fontSize={16}
											color='white'
										/>
									)}
								</button>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
