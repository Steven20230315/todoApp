import { useState } from 'react';
import classes from './TaskList.module.css';
import { BsPencil } from 'react-icons/bs';
import { TASK_STATUS } from '../../../utils/constants';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { redirect, useOutlet } from 'react-router-dom';
import { Form, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function TaskList({ task, id }) {
	const [formData, setFormData] = useState({
		title: task.title,
		description: task.description,
		dueDate: task.dueDate,
		priority: task.priority,
		status: task.status,
		_id: id,
	});
	const [isHovered, setIsHovered] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleOpenModal = () => {
		window.history.pushState(null, '', `/dashboard/task/${id}`);
		Cookies.set('taskId', id);
		setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	return (
		<>
			<div
				className={`${classes.hovered_component} ${
					classes.isHovered ? 'classes.hovered' : ''
				}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className={classes.title}>
					<div className={classes.content}>
						<h5>{task.title}</h5>
					</div>
					{isHovered && (
						<div className={classes.button}>
							<button onClick={handleOpenModal}>
								<BsPencil
									style={{ color: 'black', backgroundColor: 'transparent' }}
								/>
							</button>
						</div>
					)}
				</div>
				<div className={classes.description}>{task.description}</div>
				<div className={classes.dueDate}>{task.dueDate}</div>
			</div>
			{isModalOpen && (
				<div className={classes.modal_overlay}>
					<div className={classes.modal_content}>
						<Form method='PATCH' className={classes.form}>
							<input
								type='text'
								className={classes.input}
								placeholder={task.title}
								name='title'
								id='title'
								onChange={handleInputChange}
							/>
							<textarea
								name='description'
								id='description'
								cols='30'
								rows='3'
								className={classes.input}
								placeholder={task.description}
								value={formData.description}
								onChange={handleInputChange}
							></textarea>
							<div className={classes.dropdown_group}>
								<div>
									<select
										name='priority'
										id='priority'
										className={classes.dropdown}
										defaultValue={task.priority}
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
									<select
										name='status'
										id='status'
										className={classes.dropdown}
										defaultValue={task.status}
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
									// onClick={handleSaveButtonClick}
									className={`${classes.btn} ${classes.greenButton}`}
								>
									Save
								</button>
								<button
									type='button'
									className={`${classes.btn} ${classes.redButton}`}
									onClick={handleCloseModal}
								>
									Cancel
								</button>
							</div>
							{/* <button
								type='button'
								className={`${classes.btn} ${classes.redButton}`}
								onClick={handleCloseModal}
							>
								Cancel
							</button> */}
						</Form>
					</div>
				</div>
			)}
		</>
	);
}

export default TaskList;
