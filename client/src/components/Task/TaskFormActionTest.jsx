import { Form } from 'react-router-dom';

export default function TaskFormActionTest() {
	return (
		<Form>
			<input type='text' name='title' placeholder='title' id='title' />
			<input
				type='text'
				name='description'
				placeholder='description'
				id='description'
			/>
			<selection>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
			</selection>
			<selection>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
			</selection>
		</Form>
	);
}
