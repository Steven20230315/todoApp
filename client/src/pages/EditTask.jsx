import TaskEditView from '../components/TaskEditView';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext, useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

import AllTask from './AllTask';
import Cookies from 'js-cookie';
export const loader = async () => {
	try {
		const data = await customFetch.get('/tasks');
		console.log(data);
		const tasks = data?.data?.tasks;
		console.log(tasks);
		return { data: tasks };
	} catch (error) {
		toast.error(error?.response?.data.msg);
		return error;
	}
};

export const action = async ({ request, params }) => {
	console.log(params);
	const taskId = Cookies.get('taskId');
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const task = data?.data?.tasks;
	console.log(data);
	if (request.method === 'PATCH') {
		try {
			await customFetch.patch(`/tasks/${taskId}`, data);
			toast.success('Task updated successfully');
			return null;
		} catch (error) {
			toast.error(error?.response?.data.msg);
			return error;
		}
	} else if (request.method === 'delete') {
		try {
			await customFetch.delete(`/tasks/${taskId}`);
			toast.success('Task deleted successfully');
			return null;
		} catch (error) {
			toast.error(error?.response?.data.msg);
			return error;
		}
	} else {
		try {
			await customFetch.post('/tasks', data);
			console.log(data);
			toast.success('Task added successfully');
			return null;
		} catch (error) {
			toast.error(error?.response?.data.msg);
			return error;
		}
	}
};

const AllTasksContext = createContext();

export default function EditJob() {
	const { data } = useLoaderData();
	const [showForm, setShowForm] = useState(false);
	console.log(data);

	return (
		<AllTasksContext.Provider value={{ data }}>
			<AllTask />
			<div>
				{Object.values(data)?.map((task) => (
					<TaskList key={task._id} task={task} id={task._id} />
				))}
				<AddTaskForm></AddTaskForm>
				{/* <TaskEditView></TaskEditView> */}
			</div>
		</AllTasksContext.Provider>
	);
}
