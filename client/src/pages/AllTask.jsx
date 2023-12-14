import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList'; 



function AllTask() {
	// State variables
	const [sortBy, setSortBy] = useState('priority'); 
	const [sortedTasks, setSortedTasks] = useState([]);
	const [tasks, setTasks] = useState([]); 




	const sampleTasks = [
		{
			_id: '1',
			title: 'Task 1',
			description: 'Description 1',
			priority: 'High',
			status: 'In Progress',
			dueDate: '2023-12-15',
		},
		{
			_id: '2',
			title: 'Task 2',
			description: 'Description 2',
			priority: 'Low',
			status: 'To Do',
			dueDate: '2023-12-10',
		},
		{
			_id: '3',
			title: 'Task 3',
			description: 'Description 3',
			priority: 'Low',
			status: 'To Do',
			dueDate: '2023-12-19',
		},
		{
			_id: '4',
			title: 'Task 4',
			description: 'Description 2',
			priority: 'High',
			status: 'To Do',
			dueDate: '2023-12-31',
		},
	];

	useEffect(() => {
		setTimeout(() => {
			setTasks(sampleTasks);
		}, 1000); 
	}, []);

	useEffect(() => {
		const sortTasks = () => {
			const tasksCopy = [...tasks];

			if (sortBy === 'priority') {
				tasksCopy.sort((a, b) => a.priority.localeCompare(b.priority));
			} else if (sortBy === 'status') {
				tasksCopy.sort((a, b) => a.status.localeCompare(b.status));
			} else if (sortBy === 'dueDate') {
				tasksCopy.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
			}

			setSortedTasks([...tasksCopy]); // Use spread operator to create a new array
		};

		sortTasks();
	}, [tasks, sortBy]);

	return (
		<div>
			{/* Add UI elements to allow the user to select sorting criteria (priority, status, due date) */}
			<div>
				<label>Sort by:</label>
				<select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
					<option value='priority'>Priority</option>
					<option value='status'>Status</option>
					<option value='dueDate'>Due Date</option>
				</select>
			</div>

			{/* Render the sorted task list */}
			{sortedTasks.map((task) => (
				<TaskList key={task._id} task={task} id={task._id} />
			))}
		</div>
	);
}

export default AllTask;
