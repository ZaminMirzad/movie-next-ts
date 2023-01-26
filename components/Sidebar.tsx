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

	// const activeBg=active.pathname.includes
	return (
		<aside className='col-12 col-md-3 col-xl-2 p-0  sticky-top bg-dark'>
			<nav
				className='navbar navbar-expand-md navbar-dark bg-dark flex-md-column flex-sm-row d-flex  align-items-center flex-row p-  sticky-top'
				id='sidebar'
			>
				<div className='text-center  w-100 d-flex flex-md-column flex-sm-row justify-content-between align-items-center justify-content-center p-sm-2 px-sm-3'>
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
					{/* nav toggler button */}
					<button
						type='button'
						className='navbar-toggler collapsed border-0 order-0 mx-2'
						data-toggle='collapse'
						data-bs-target='#nav'
						aria-controls='nav'
						aria-expanded='false'
						aria-label='Toggle navigation'
						data-bs-toggle='collapse'
					>
						<span className='toggler-icon top-bar'></span>
						<span className='toggler-icon middle-bar'></span>
						<span className='toggler-icon bottom-bar'></span>
					</button>
				</div>
				{/* Menu */}
				<div
					className='collapse navbar-collapse  align-items-start my-1  flex-column justify-content-between  w-100 '
					id='nav'
				>
					<ul className='navbar-nav flex-column w-100 '>
						<li
							className={`nav-item bg-${
								active.pathname === '/' && 'secondary'
							} px-sm-3 `}
						>
							<Link
								href='/'
								className={`nav-link gap-1 d-flex align-items-center  p-2 text-${
									active.pathname === '/' && 'white'
								}`}
							>
								<BsGrid /> Movies
							</Link>
						</li>
						<li
							className={`nav-item bg-${
								active.pathname === '/tvs' && 'secondary text-white'
							} px-sm-3`}
						>
							<Link
								href='/tv'
								className={`nav-link gap-1 d-flex align-items-center  p-2 text-${
									active.pathname === '/tv' && 'white'
								}`}
							>
								<BsTable />
								Tv-Shows
							</Link>
						</li>
						<li
							className={`nav-item bg-${
								active.pathname === '/characters' && 'secondary text-white'
							} px-sm-3`}
						>
							<Link
								href='/characters'
								className={`nav-link gap-1 d-flex align-items-center  p-2 text-${
									active.pathname === '/characters' && 'white'
								}`}
							>
								<BsPeople /> Characters
							</Link>
						</li>
					</ul>
					{/* Account menu */}
					<hr className='border w-100 my-2' />
					<div className='dropdown d-flex justify-content-between order-1 dropup px-3 gap-1 align-items-center my-2 w-100 '>
						<Link
							href='#'
							className={`d-flex align-items-center text-${
								theme === 'light' ? 'light' : 'light'
							}  dropdown-toggle  pe-1 `}
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
						<ul className='dropdown-menu dropdown-menu-dark text-small shadow  mx-2 mb-1'>
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
