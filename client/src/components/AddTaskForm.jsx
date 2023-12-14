import { useOutletContext } from 'react-router-dom';
import { TASK_STATUS, TASK_PRIORITY } from '../../../utils/constants';
import { Form, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import classes from '../components/AddTaskBtn.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AddTaskForm({ handleShowForm, showForm }) {
	const { user } = useOutletContext();
	const navigation = useNavigation();
	const [startDate, setStartDate] = useState(new Date());

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	handleShowForm();
	// };

	return (
		<div>
			{showForm ? (
				<Form method='post' className={classes.form}>
					<input
						type='text'
						placeholder='Task Name'
						id='title'
						className={classes.input}
						name='title'
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
							<DatePicker
								showIcon
								selected={startDate}
								onChange={(date) => setStartDate(date)}
								name='dueDate'
								id='dueDate'
							/>
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
							className={`${classes.btn} ${classes.greenButton}`}
							type='submit'
							// onClick={handleSubmit}
						>
							Add Task
						</button>
						<button
							type='button'
							className={`${classes.btn} ${classes.redButton}`}
							onClick={handleShowForm}
						>
							Cancel
						</button>
					</div>
				</Form>
			) : (
				<button className={classes.btn} onClick={handleShowForm}>
					<AiOutlinePlusCircle />
					<p>Add task</p>
				</button>
			)}
		</div>
	);
}
