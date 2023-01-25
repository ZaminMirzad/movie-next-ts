import { Breadcrumb, Sidebar } from '@/components';
import { ThemeContext } from '@/context/themeContext';
import { useContext } from 'react';

export default function TvShows() {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<div className={`container-fluid bg-${theme === 'dark' && 'secondary'} `}>
				<div className='row min-vh-100 flex-column flex-md-row '>
					<Sidebar />
					<main className='col px-0 flex-grow-1'>
						<Breadcrumb />
						contect
					</main>
				</div>
			</div>
		</>
	);
}
