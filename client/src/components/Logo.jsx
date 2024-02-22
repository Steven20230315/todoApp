import logo from '../assets/images/logo.svg';
export default function Logo({ width, height }) {
	return (
		<nav>
			<img
				src={logo}
				alt='TODOAPP'
				className='logo'
				style={{ margin: '0.2rem', width: `${width}px`, height: `${height}px` }}
			/>
		</nav>
	);
}
