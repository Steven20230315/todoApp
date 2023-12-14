import { useState } from 'react';
import styles from './AddTaskBtn.module.css';
import AddTaskForm from './AddTaskForm';
export default function AddTaskBtn({ showForm, setShowForm }) {
	// component styles
	const { add_task_btn, add_task_btn_circle } = styles;

	// component state
	return (
		<>
			{!showForm && (
				<button
					className={add_task_btn}
					// onClick={() => setIsAddTaskBtnClicked(true)}
					onClick={() => setShowForm(true)}
				>
					<span className={add_task_btn_circle}>
						<svg width='13' height='13'>
							<path
								fill='currentColor'
								fillRule='evenodd'
								d='M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z'
							></path>
						</svg>
					</span>
					Add Task
				</button>
			)}
			{/* {isAddTaskBtnClicked && <AddTaskForm  handleCloseForm={() => setIsAddTaskBtnClicked(false)}/>} */}
			{showForm && <AddTaskForm handleCloseForm={() => setShowForm(false)} />}
		</>
	);
}
