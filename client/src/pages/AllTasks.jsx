import { toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { useLoaderData, redirect } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import classes from './AllTasks.module.css';
import TaskList from '../components/TaskList';
import { useEffect } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import TaskEditView from '../components/TaskEditView';
import TaskView from '../components/Task/TaskView';
import AddTaskForm from '../components/AddTaskForm';
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
	const taskId = Cookies.get('taskId');
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const task = data?.data?.tasks;
	if (request.method === 'PATCH') {
		try {
			await customFetch.patch(`/tasks/${taskId}`, data);
			toast.success('Task updated successfully');
			return null;
		} catch (error) {
			toast.error(error?.response?.data.msg);
			return error;
		}
	} else if (request.method === 'DELETE') {
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
			return redirect('/dashboard');
		} catch (error) {
			toast.error(error?.response?.data.msg);
			return error;
		}
	}
};

const AllTasksContext = createContext();

export default function AllTasks() {
	const [sortBy, setSortBy] = useState('priority');
	const [sortedTasks, setSortedTasks] = useState([]);
	const { data } = useLoaderData();
	const [showForm, setShowForm] = useState(false);

	const handleShowForm = () => {
		setShowForm(!showForm);
	};
	useEffect(() => {
		const tasksCopy = [...data];

		if (sortBy === 'priority') {
			tasksCopy.sort((a, b) => a.priority.localeCompare(b.priority));
		} else if (sortBy === 'status') {
			tasksCopy.sort((a, b) => a.status.localeCompare(b.status));
		} else if (sortBy === 'dueDate') {
			tasksCopy.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
		}

		setSortedTasks([...tasksCopy]); // Use spread operator to create a new array
	}, [data, sortBy]);

	return (
		<AllTasksContext.Provider value={{ data }}>
			<div>
				<label>Sort by:</label>
				<select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
					<option value='priority'>Priority</option>
					<option value='status'>Status</option>
					<option value='dueDate'>Due Date</option>
				</select>
			</div>
			<div>
				{sortedTasks?.map((task) => (
					<TaskView key={task._id} task={task} id={task._id}></TaskView>
				))}
			</div>

			{/* <AddTaskForm showForm={showForm} handleShowForm={handleShowForm} /> */}
		</AllTasksContext.Provider>
	);
}

export const useAllTasksContext = () => useContext(AllTasksContext);
