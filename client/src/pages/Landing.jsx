import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
export default function Landing() {
	return (
		<Wrapper>
			<div className='container page'>
				<div className='info'>
					<h1>
						<Logo />
						Task <span>tracking </span>app
					</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
						molestiae consectetur fugiat provident accusantium fuga quasi quam,
						nobis voluptates assumenda magni distinctio similique natus, modi
						voluptatibus dolor alias iusto aspernatur.
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
