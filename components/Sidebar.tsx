import { ThemeContext } from '@/context/themeContext';
import Link from 'next/link';
import { useContext } from 'react';
import {
	BsFillMoonStarsFill,
	BsSun,
	BsTable,
	BsGrid,
	BsPeople,
	BsCollectionPlayFill,
} from 'react-icons/bs';

export default function Sidebar2() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<aside className='col-12 col-md-3 col-xl-2 p-0  sticky-top bg-dark'>
			<nav
				className='navbar navbar-expand-md navbar-dark bg-dark flex-md-column flex-sm-row d-flex  align-items-center p-0  sticky-top '
				id='sidebar'
			>
				<div className='text-center  p-3'>
					<img
						src='https://avatars.githubusercontent.com/u/122528398?v=4'
						alt='by @webz-dev'
						className='img-thumbnail img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow'
						width='150'
						height='150'
					/>
					<Link
						href='/'
						className='navbar-brand mx-0 font-weight-bold  text-nowrap fs-5 text-uppercase d-flex align-items-center px-2 py-1 gap-2 bg-danger rounded-1 justify-content-center'
					>
						MoFlix <BsCollectionPlayFill />
					</Link>
				</div>
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
				{/* Menu */}
				<div
					className='collapse navbar-collapse  align-items-start my-1  flex-column justify-content-between p-3'
					id='nav'
				>
					<ul className='navbar-nav flex-column '>
						<li className='nav-item'>
							<Link
								href='/'
								className='nav-link gap-1 d-flex align-items-center active '
							>
								<BsGrid /> Movies
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								href='/tvs'
								className='nav-link gap-1 d-flex align-items-center'
							>
								<BsTable />
								Tv-Shows
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								href='/characters'
								className='nav-link gap-1 d-flex align-items-center'
							>
								<BsPeople /> Characters
							</Link>
						</li>
					</ul>
					{/* Account menu */}
					<hr className='border w-100 m-1' />
					<div
						className='dropdown d-flex justify-content-between order-1 dropup px-lg-1 gap-2 align-items-center my-1  
           '
					>
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
