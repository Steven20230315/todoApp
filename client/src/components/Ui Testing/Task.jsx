import styles from './Task.module.css';
import { Form } from 'react-router-dom';
import TaskEditBtnGroup from './TaskEditBtnGroup';
import { useState, useEffect } from 'react';
import TaskCheckBox from './TaskCheckBox';
import TaskEditForm from './TaskEditForm';

export default function Task({ task }) {
	// component styles
	const {
		task_container,
		task_edit_form,
		task_content_container,
		task_content_container_alignment,
		task_edit_form_action_group,
		task_dueDate,
		overdue,
		task_title,
		task_description,
	} = styles;

	// component state
	const [isTaskContainerHovered, setIsTaskContainerHovered] = useState(false);
	const [isCheckBoxHovered, setIsCheckBoxHovered] = useState(false);
	const [isOverdue, setIsOverdue] = useState(false);
	const [isEditBtnClicked, setIsEditBtnClicked] = useState(false);
	const [isEditCommentBtnClicked, setIsEditCommentBtnClicked] = useState(false);

	// you can change en-US to zh-tw
	const date = new Date(task?.dueDate).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
	});

	// component functions
	useEffect(() => {
		const dueDate = new Date(task?.dueDate);
		const today = new Date();
		if (dueDate < today) {
			setIsOverdue(true);
		}
	}, [task]);

	const handleCloseModal = () => {
		setIsEditBtnClicked(false);
	};

	// component return
	return (
		<div
			role='button'
			className={task_container}
			onMouseEnter={() => setIsTaskContainerHovered(true)}
			onMouseLeave={() => setIsTaskContainerHovered(false)}
		>
			{/*This div server as a button. When clicked, it will redirect to a new page. Current view plus a open modal. The background will be disabled. The url will be /:task_id  fullEditView*/}
			<Form method='DELETE' className={task_edit_form}>
				{/* Need to find a way to associate this button with a task id to perform delete */}
				<TaskCheckBox
					setIsCheckBoxHovered={setIsCheckBoxHovered}
					isCheckBoxHovered={isCheckBoxHovered}
				/>
				<input
					type='text'
					hidden
					defaultValue={task?._id}
					name='taskId'
					readOnly
				/>

				<div className={task_content_container}>
					<div className={task_content_container_alignment}>
						<div className={task_title}>{task?.title}</div>
						<div className={task_description}>{task?.description}</div>
						<div className={`${task_dueDate} ${isOverdue && overdue}`}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='12'
								height='12'
								fill='none'
								viewBox='0 0 12 12'
							>
								<path
									fill='currentColor'
									fillRule='evenodd'
									d='M9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7A1.5 1.5 0 0 0 2.5 11h7A1.5 1.5 0 0 0 11 9.5v-7A1.5 1.5 0 0 0 9.5 1ZM2 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7ZM8.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM3.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z'
									clipRule='evenodd'
								></path>
							</svg>
							{<span>{date}</span>}
						</div>
					</div>
				</div>
				<div className={task_edit_form_action_group}>
					{isTaskContainerHovered && (
						<TaskEditBtnGroup
							setIsEditBtnClicked={setIsEditBtnClicked}
							setIsEditCommentBtnClicked={setIsEditCommentBtnClicked}
						/>
					)}
				</div>
			</Form>
			{isEditBtnClicked && (
				<TaskEditForm
					id={task?._id}
					task={task}
					handleCloseModal={handleCloseModal}
					isEditCommentBtnClicked={isEditCommentBtnClicked}
				/>
			)}
		</div>
	);
}
