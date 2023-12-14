import Wrapper from '../assets/wrappers/Navbar';
import { FaHome, FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import { DashboardContext } from '../pages/DashboardLayout';
import { useContext } from 'react';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
	const { toggleSidebar } = useDashboardContext();
	const { user } = useContext(DashboardContext);
	return (
		<Wrapper>
			<div className='nav-center'>
				<button type='button' className='toggle-btn' onClick={toggleSidebar}>
					<FaAlignLeft />
				</button>
				<div>
					<h4 className='logo-text'> dashboard </h4>
				</div>
				<div className='btn-container'>
					{/* <ThemeToggle /> */}
					<LogoutContainer />
				</div>
			</div>
		</Wrapper>
	);
}
