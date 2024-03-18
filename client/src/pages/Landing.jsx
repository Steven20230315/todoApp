import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
export default function Landing() {
	return (
		<Wrapper>
			<div className='container page'>
				<div className='info'>
					<h1>
						<Logo width={100} height={100} />
						Task <span>tracking </span>app
					</h1>
					<p>
						A minimalistic task tracking app. Design to help you stay organized. 
					</p>
					<Link to='/register' className='btn register-link'>
						Register
					</Link>
					<Link to='/login' className='btn'>
						Login
					</Link>
				</div>
			</div>
		</Wrapper>
	);
}
