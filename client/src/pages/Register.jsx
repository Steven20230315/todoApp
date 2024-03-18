import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import Logo from '../components/Logo';
import FormRow from '../components/FormRow';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
export const action = async ({ request }) => {
	console.log(request);
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	try {
		await customFetch.post('/auth/register', data);
		toast.success('Registered successfully!');
		return redirect('/login');
	} catch (error) {
		toast.error(error?.response?.data?.msg);
		console.log(error);
		return error;
	}
};

export default function Register() {
	const navigation = useNavigation();
	console.log(navigation);
	const isSubmitting = navigation.state === 'submitting';
	return (
		<Wrapper>
			<Form method='post' action='' className='form'>
				<Logo />
				<h4>Register</h4>
				<FormRow
					type='text'
					name='name'
					labelText='Name'
				></FormRow>
				<FormRow
					type='text'
					name='lastName'
					labelText='Last Name'
				></FormRow>
				<FormRow
					type='email'
					name='email'
					labelText='Email'
				></FormRow>
				<FormRow
					type='password'
					name='password'
					labelText='Password'
				></FormRow>
				<button type='submit' className='btn btn-block' disabled={isSubmitting}>
					{isSubmitting ? 'Submitting...' : 'Register'}
				</button>
				<p>
					Already a member?
					<Link to='/login' className='member-btn'>
						Login
					</Link>
				</p>
			</Form>
		</Wrapper>
	);
}
