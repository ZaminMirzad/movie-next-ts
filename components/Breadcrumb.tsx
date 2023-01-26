export default function Breadcrumb() {
	return (
		<>
			<div className='bg-light p-2 h6 d-none d-md-block sticky-top'>
				<nav
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
				</nav>
			</div>
		</>
	);
}
