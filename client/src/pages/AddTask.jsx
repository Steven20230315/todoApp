import { useOutletContext } from 'react-router-dom';
import { TASK_STATUS, TASK_PRIORITY } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import classes from '../components/AddTaskBtn.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import TaskView from '../components/Task/TaskView';



export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		await customFetch.post('/tasks', data);
		toast.success('Task added successfully');
		return null;
	} catch (error) {
		toast.error(error?.response?.data.msg);
		return error;
	}
};

export default function AddTask() {
	const { user } = useOutletContext();
	const today = new Date().toISOString().split('T')[0];
	console.log(today);
	const [showForm, setShowForm] = useState(false);

	const toggleForm = () => {
		setShowForm(!showForm);
	};

	return (
		<div>
			{/* <TaskView></TaskView> */}
			{showForm ? (
				<Form method='post' className={classes.form}>
					<input
						type='text'
						placeholder='Task Name'
						id='tittle'
						className={classes.input}
						name='tittle'
					/>
					<textarea
						name='description'
						id='description'
						cols='30'
						rows='3'
						className={classes.input}
						placeholder='Task Description'
					></textarea>
					<div className={classes.dropdown_group}>
						<div>
							<input type='date' name='dueDate' id='dueDate' />
						</div>

						<div>
							<select
								name='priority'
								id='priority'
								className={classes.dropdown}
								defaultValue={TASK_PRIORITY.LOW}
							>
								<option
									value={TASK_PRIORITY.LOW}
									style={{ backgroundColor: 'green', color: 'white' }}
								>
									Low
								</option>
								<option
									value={TASK_PRIORITY.MEDIUM}
									style={{ backgroundColor: 'yellow', color: 'black' }}
								>
									Medium
								</option>
								<option
									value={TASK_PRIORITY.HIGH}
									style={{ backgroundColor: 'red', color: 'white' }}
								>
									High
								</option>
							</select>
						</div>

						<div>
							<select
								name='status'
								id='status'
								className={classes.dropdown}
								defaultValue={TASK_STATUS.PENDING}
							>
								<option
									value={TASK_STATUS.PENDING}
									style={{ backgroundColor: 'blue', color: 'white' }}
								>
									Pending
								</option>
								<option
									value={TASK_STATUS.TO_DO}
									style={{ backgroundColor: 'blue', color: 'white' }}
								>
									To-Do
								</option>
								<option
									value={TASK_STATUS.IN_PROGRESS}
									style={{ backgroundColor: 'orange', color: 'black' }}
								>
									In Progress
								</option>
								<option
									value={TASK_STATUS.COMPLETED}
									style={{ backgroundColor: 'green', color: 'white' }}
								>
									Completed
								</option>
							</select>
						</div>
					</div>
					<div className={classes.btn_group}>
						<button
							type='submit'
							className={`${classes.btn} ${classes.greenButton}`}
							// disabled={isSubmitting}
						>
							Add Task
						</button>
						<button
							type='button'
							className={`${classes.btn} ${classes.redButton}`}
							onClick={toggleForm}
						>
							Cancel
						</button>
					</div>
				</Form>
			) : (
				<button className={classes.btn} onClick={toggleForm}>
					<AiOutlinePlusCircle />
					<p>Add task</p>
				</button>
			)}
		</div>
	);
	// <Form method='post' className='form' action=''>
	// 	<h4 className='form-title'> Add Task</h4>
	// 	<div className='form-center'>
	// 		<FormRow type='text' name='tittle' labelText='tittle'></FormRow>
	// 		<FormTextarea
	// 			name='description'
	// 			labelText='Description'
	// 		></FormTextarea>
	// 		<FormRow type='date' name='dueDate' defaultValue={today}></FormRow>
	// 		<FormSelect
	// 			name='priority'
	// 			labelText='Priority'
	// 			options='priority'
	// 		></FormSelect>
	// 		<FormSelect
	// 			name='status'
	// 			labelText='Status'
	// 			options='status'
	// 		></FormSelect>
	// 		<button
	// 			type='submit'
	// 			className='btn btn-block form-btn'
	// 			disabled={isSubmitting}
	// 		>
	// 			{isSubmitting ? 'Submitting...' : 'Submit'}
	// 		</button>
	// 	</div>
	// </Form>
}
