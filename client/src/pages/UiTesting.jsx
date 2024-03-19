import { useState, useEffect, useRef } from 'react';
import Task from '../components/Ui Testing/Task';
import {
	json,
	useLoaderData,
	useLocation,
} from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import AddTaskBtn from '../components/Ui Testing/AddTaskBtn';
import axios from 'axios';
export const loader = async (params) => {
	try {
		// Get the filter criteria based on the pathname

		// Fetch tasks and filter based on the criteria
		const data = await axios.get('/api/v1/tasks');
		// const data = await customFetch.get('/tasks');
		const tasks = data?.data?.tasks;

		return { data: tasks };
	} catch (error) {
		toast.error(error?.response?.data.msg);
		return error;
	}
};
export const action = async ({ request, params }) => {
	let formData = await request.formData();
	let intent = formData.get('intent');
	let data = Object.fromEntries(formData);
	let taskId = formData.get('taskId');
	if (intent === 'complete') {
		try {
			await axios.delete(`/api/v1/tasks/${taskId}`, {
				method: 'DELETE',
				body: JSON.stringify(formData),
			});
			// await customFetch.delete(`/tasks/${taskId}`, {
			// 	method: 'DELETE',
			// 	body: JSON.stringify(formData),
			// });
			toast.success('Task deleted successfully');
			return { success: true };
		} catch (error) {
			toast.error(error?.response?.data.msg);
			return error;
		}
	}
	if (intent === 'addTask') {
		try {
			await axios.post('/api/v1/tasks', data);
			// await customFetch.post('/tasks', data);
			toast.success('Task added successfully');
			return { success: true };
		} catch (error) {
			toast.error(error?.response?.data.msg);
			return error;
		}
	}
	if (intent === 'addComment') {
		try {
			await axios.post(`/api/v1/tasks/${taskId}/comments`, data);
			// await customFetch.post(`/tasks/${taskId}/comments`, data);
			toast.success('Comment added successfully');
			return { success: true };
		} catch (error) {
			toast.error(error?.response?.data.msg);
			return error;
		}
	}
	if (intent === 'deleteComment') {
		try {
			await axios.delete(`/api/v1/tasks/${taskId}/comments/${data.commentId}`, {
				method: 'DELETE',
				body: JSON.stringify(formData),
			})
			// await customFetch.delete(`/tasks/${taskId}/comments/${data.commentId}`, {
			// 	method: 'DELETE',
			// 	body: JSON.stringify(formData),
			// });
			toast.success('Comment deleted successfully');
			return { success: true };
		} catch (error) {
			toast.error(error?.response?.data.msg);
			return error;
		}
	}
	if (intent === 'editTask') {
		try {
			await axios.patch(`/api/v1/tasks/${taskId}`, data);
			// await customFetch.patch(`/tasks/${taskId}`, data);
			toast.success('Task updated successfully');
			return { success: true };
		} catch (error) {
			toast.error(error?.response?.data.msg);
			return error;
		}
	}
	throw json({ message: `Unexpected intent: ${intent}` }, { status: 400 });
};

// component
export default function UiTesting() {
	const { data } = useLoaderData();
	const location = useLocation();
	let filteredTasks = [];
	const filterCriteria = location.pathname.split('/')[2];
	if (filterCriteria === 'today') {
		const currentDate = new Date();
		filteredTasks = data.filter(
			(task) => new Date(task.dueDate) >= currentDate
		);
		console.log(filteredTasks);
	} else if (filterCriteria === 'overdue') {
		const currentDate = new Date();
		filteredTasks = data.filter((task) => new Date(task.dueDate) < currentDate);
		console.log(filteredTasks);
	} else {
		filteredTasks = data;
	}

	// component state
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		setShowForm(false);
	}, [data]);

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	return (
		<>
			{filteredTasks?.map((task) => (
				<Task key={task._id} task={task} />
			))}
			<AddTaskBtn showForm={showForm} setShowForm={handleShowForm} />
		</>
	);
}
