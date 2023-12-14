import logo from '../assets/images/logo.svg';
export default function Logo() {
	return (
		<nav>
			<img
				src={logo}
				alt='TODOAPP'
				className='logo'
				style={{ margin: '0.2rem',  }}
			/>
		</nav>
	);
}
