import { Form } from 'react-router-dom';

<Form method='POST'>
	<button name='intent' value='addTask'>
		Submit
	</button>
</Form>;

export const action = async ({ request, params }) => {
	const formData = await request.formData;
	const data = Object.fromEntries(formData);
	const intent = formData.get('intent');
	switch (intent) {
		case 'addTask': {
			console.log('Make a post request');
			return null;
		}
		case 'updateTask': {
			console.log('Make a patch request');
			return null;
		}
		case 'addComment': {
			console.log('Make a post request');
			return null;
		}
		default: {
			console.log('Unknown request method');
			return null;
		}
	}
};

F;
