import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import { useDashboardContext } from '../pages/DashboardLayout';
import Logo from './Logo';
export default function BigSidebar() {
	const { showSidebar } = useDashboardContext();
	return (
		<Wrapper>
			<div
				className={
					!showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
				}
			>
				<div className='content'>
					<header>
						<Logo /> ToDO
					</header>
					<NavLinks isBigSidebar />
				</div>
			</div>
		</Wrapper>
	);
}
