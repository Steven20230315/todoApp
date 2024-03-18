import classes from './AddTaskBtn.module.css';
import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export default function AddTaskBtn() {
	const [showForm, setShowForm] = useState(false);

	const toggleForm = () => {
		setShowForm(!showForm);
	};
	return (
		<div>
			{showForm ? (
				<form method='post' className={classes.form}>
					<input
						type='text'
						placeholder='Task Name'
						className={classes.input}
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
							<select
								name='priority'
								id='priority'
								className={classes.dropdown}
							>
								<option
									value='low'
									style={{ backgroundColor: 'green', color: 'white' }}
								>
									Low
								</option>
								<option
									value='medium'
									style={{ backgroundColor: 'yellow', color: 'black' }}
								>
									Medium
								</option>
								<option
									value='high'
									style={{ backgroundColor: 'red', color: 'white' }}
								>
									High
								</option>
							</select>
						</div>

						<div>
							<select name='status' id='status' className={classes.dropdown}>
								<option
									value='low'
									style={{ backgroundColor: 'green', color: 'white' }}
								>
									Low
								</option>
								<option
									value='medium'
									style={{ backgroundColor: 'yellow', color: 'black' }}
								>
									Medium
								</option>
								<option
									value='high'
									style={{ backgroundColor: 'red', color: 'white' }}
								>
									High
								</option>
							</select>
						</div>
					</div>
					<div className={classes.btn_group}>
						<button
							type='submit'
							className={`${classes.btn} ${classes.greenButton}`}
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
				</form>
			) : (
				<button className={classes.btn} onClick={toggleForm}>
					<AiOutlinePlusCircle />
					<p>Add task</p>
				</button>
			)}
		</div>
	);
}
