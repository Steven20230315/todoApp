import { Form, redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';
const CHECKBOX_STYLE = {
	border: '1px solid black',
	borderRadius: '50%',
	height: '18px',
	width: '18px',
	overflow: 'hidden',
	position: 'absolute',
	left: '3px',
	top: '3px',
	boxSizing: 'border-box',
	backgroundColor: 'transparent',
};

const CHECKBOXBTN_STYLE = {
	margin: '8px 6px 0 -3px',
	position: 'relative',
	zIndex: '1',
	alignItems: 'center',
	justifyContent: 'center',
	display: 'flex',
	border: 'none',
	height: '24px',
	width: '24px',
	backgroundColor: 'transparent',
	cursor: 'pointer',
};

export default function TaskCheckBox({ handleDeleteButtonClick, id }) {
	console.log(id);
	const handleDelete = async (e) => {
		Cookies.set('taskId', id);
		e.stopPropagation();
		// try {
		// 	await customFetch.delete(`/tasks/${id}`);
		// 	toast.success('Task deleted successfully');
		// } catch (error) {
		// 	toast.error(error?.response?.data.msg);
		// }
		// return redirect('/dashboard');
	};
	return (
		<>
			<Form method='DELETE'>
				<button type='delete' onClick={handleDelete} style={CHECKBOXBTN_STYLE}>
					<span style={CHECKBOX_STYLE}></span>
				</button>
			</Form>
		</>
	);
}
