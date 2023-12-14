import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useNavigation, Form, useOutletContext } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
export default function Profile() {
	const { user } = useOutletContext();
	const { name, lastName, email } = user;
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';
	return (
		<Wrapper>
			<Form method='post' className='form'>
				<h4 className='form-title'>profile</h4>
				<div className='form-center'>
					<FormRow type='text' name='name' value={name} labelText='name' />
					<FormRow
						type='text'
						name='lastName'
						value={lastName}
						labelText='last name'
					/>
					<FormRow type='email' name='email' value={email} labelText='email' />
				</div>
			</Form>
		</Wrapper>
	);
}
