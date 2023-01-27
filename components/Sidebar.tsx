import {
	CHARACTERS_ROUTE,
	HOME_ROUTE,
	MOVIES_ROUTE,
	TV_ROUTE,
} from '@/constants/routes';
import { ThemeContext } from '@/context/themeContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import {
	BsFillMoonStarsFill,
	BsSun,
	BsTable,
	BsGrid,
	BsPeople,
} from 'react-icons/bs';
import { ImHome } from 'react-icons/im';

export default function Sidebar2() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const active = useRouter();
	return (
		<aside className='col-12 col-md-3 col-xl-2 p-0  sticky-top bg-dark'>
			<nav
				className='navbar navbar-expand-md navbar-dark bg-dark flex-md-column flex-sm-row d-flex  align-items-center p-0  sticky-top '
				id='sidebar'
			>
				<div className='text-center  p-3 px-3'>
					<img
						src='https://impreza.us-themes.com/wp-content/uploads/paolo-bendandi-D-8XODEIr_s-unsplash.jpg'
						alt='profile picture'
						className='img-thumbnail img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow'
						width='150'
						height='150'
					/>
					<Link
						href='/'
						className='navbar-brand mx-0 font-weight-bold  text-nowrap fs-5 text-uppercase '
					>
						MoFlix Movies
					</Link>
				</div>
				<button
					type='button'
					className='navbar-toggler collapsed border-0 order-0 mx-2'
					data-toggle='collapse'
					data-bs-target='#nav'
					aria-controls='nav'
					aria-expanded='true'
					aria-label='Toggle navigation'
					data-bs-toggle='collapse'
				>
					<span className='toggler-icon top-bar'></span>
					<span className='toggler-icon middle-bar'></span>
					<span className='toggler-icon bottom-bar'></span>
				</button>
				{/* Menu */}
				<div
					className='collapse navbar-collapse  align-items-start my-1  flex-column justify-content-between   w-100'
					id='nav'
				>
					<ul className='navbar-nav flex-column w-100 px-2 px-lg-0'>
						<li
							className={`nav-item bg-${
								active.asPath === HOME_ROUTE && 'secondary text-white'
							} px-sm-3 `}
						>
							<Link
								href={HOME_ROUTE}
								className={`nav-link gap-1 d-flex align-items-center  p-2 text-${
									active.asPath === HOME_ROUTE && 'white'
								}`}
							>
								<ImHome /> Home
							</Link>
						</li>
						<li
							className={`nav-item bg-${
								active.asPath.includes(MOVIES_ROUTE) && 'secondary text-white'
							} bg-${
								active.asPath.includes('/movie') && 'secondary text-white'
							} px-sm-3 `}
						>
							<Link
								href={MOVIES_ROUTE}
								className={`nav-link gap-1 d-flex align-items-center  p-2 text-${
									active.asPath.includes(MOVIES_ROUTE) && 'white'
								} text-${active.asPath.includes('/movie') && 'white'} `}
							>
								<BsGrid /> Movies
							</Link>
						</li>
						<li
							className={`nav-item bg-${
								active.asPath.includes(TV_ROUTE) && 'secondary text-white'
							}  px-sm-3`}
						>
							<Link
								href={TV_ROUTE}
								className={`nav-link gap-1 d-flex align-items-center  p-2 text-${
									active.asPath.includes(TV_ROUTE) && 'white'
								}`}
							>
								<BsTable />
								Tv-Shows
							</Link>
						</li>
						<li
							className={`nav-item bg-${
								active.asPath.includes(CHARACTERS_ROUTE) &&
								'secondary text-white'
							} px-sm-3`}
						>
							<Link
								href={CHARACTERS_ROUTE}
								className={`nav-link gap-1 d-flex align-items-center  p-2 text-${
									active.asPath.includes(CHARACTERS_ROUTE) && 'white'
								}`}
							>
								<BsPeople /> Characters
							</Link>
						</li>
					</ul>
					{/* Account menu */}
					<hr className='border w-100 m-1' />
					<div className='dropdown d-flex justify-content-between order-1 dropup px-lg-2 px-2 gap-2 align-items-center my-1'>
						<Link
							href='#'
							className={`d-flex align-items-center text-${
								theme === 'light' ? 'light' : 'light'
							}  dropdown-toggle  pe-2 `}
							data-bs-toggle='dropdown'
							aria-expanded='false'
							data-bs-auto-close='true'
						>
							<img
								src='https://github.com/mdo.png'
								alt=''
								width='32'
								height='32'
								className='rounded-circle me-2'
							/>
							<strong>Account</strong>
						</Link>
						<ul className='dropdown-menu dropdown-menu-dark text-small shadow  mx-4 mb-2 '>
							<li>
								<Link
									className='dropdown-item'
									href='#'
								>
									New project...
								</Link>
							</li>
							<li>
								<Link
									className='dropdown-item'
									href='#'
								>
									Settings
								</Link>
							</li>
							<li>
								<Link
									className='dropdown-item'
									href='#'
								>
									Profile
								</Link>
							</li>
							<li>
								<hr className='dropdown-divider' />
							</li>
							<li>
								<Link
									className='dropdown-item'
									href='#'
								>
									Sign out
								</Link>
							</li>
						</ul>
						<hr className='border py-2' />
						<button
							className='btn  btn-in p-2 rounded d-flex justify-content-center align-content-center'
							onClick={toggleTheme}
						>
							{theme === 'light' ? (
								<BsFillMoonStarsFill
									fontSize={16}
									color='white'
								/>
							) : (
								<BsSun
									fontSize={16}
									color='white'
								/>
							)}
						</button>
					</div>
				</div>
			</nav>
		</aside>
	);
}
