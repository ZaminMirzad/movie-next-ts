import React from 'react';

export default function Home() {
	return (
		<div className='container-fluid'>
			<div className='row min-vh-100 flex-column flex-md-row'>
				<aside className='col-12 col-md-3 col-xl-2 p-0 bg-dark '>
					<nav
						className='navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top '
						id='sidebar'
					>
						<div className='text-center p-3'>
							<img
								src='https://impreza.us-themes.com/wp-content/uploads/paolo-bendandi-D-8XODEIr_s-unsplash.jpg'
								alt='profile picture'
								className='img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow'
							/>
							<a
								href='#'
								className='navbar-brand mx-0 font-weight-bold  text-nowrap'
							>
								XcentPupil
							</a>
						</div>
						<button
							type='button'
							className='navbar-toggler border-0 order-1'
							data-toggle='collapse'
							data-bs-target='#nav'
							aria-controls='nav'
							aria-expanded='true'
							aria-label='Toggle navigation'
							data-bs-toggle='collapse'
						>
							<span className='navbar-toggler-icon'></span>
						</button>

						<div
							className='collapse navbar-collapse order-last'
							id='nav'
						>
							<ul className='navbar-nav flex-column w-100 justify-content-center'>
								<li className='nav-item'>
									<a
										href='#'
										className='nav-link active'
									>
										Edit Profile
									</a>
								</li>
								<li className='nav-item'>
									<a
										href='#'
										className='nav-link'
									>
										Projects
									</a>
								</li>
								<li className='nav-item'>
									<a
										href='#'
										className='nav-link'
									>
										Tasks
									</a>
								</li>
								<li className='nav-item'>
									<a
										href='#'
										className='nav-link'
									>
										Users Info
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</aside>
				<main className='col px-0 flex-grow-1 '>
					<div className='container-fluid py-3 border'>
						<article className=''>
							<h1 className='fw-1'>main container</h1>
						</article>
					</div>
				</main>
			</div>
		</div>
	);
}
