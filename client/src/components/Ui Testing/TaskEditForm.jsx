import styles from './TaskEditForm.module.css';
import { Form } from 'react-router-dom';
import AddTaskFormStatus from './AddTaskFormStatus';
import EditTaskFormStatus from './EditTaskFormStatus';
import AddTaskFormPriority from './AddTaskFormPriority';
import TaskEditFormInfo from './TaskEditFormInfo';
import EditTaskFormPriority from './EditTaskFormPriority';
import TaskEditFormInfoEditing from './TaskEditFormInfoEditing';
import TaskEditFormCommentSection from './TaskEditFormCommentSection';
import { useState } from 'react';
import TaskEditFormComment from './TaskEditFormComment';
import TaskEditFormTest from './TaskEditFormTest';
export default function TaskEditForm({
	id,
	task,
	handleCloseModal,
	isEditCommentBtnClicked,
}) {
	// component styles
	const {
		modal_overlay,
		modal_container,
		edit_modal_header,
		edit_modal_main_container,
		edit_modal_main_section,
		edit_modal_action_group,
	} = styles;

	// component state
	const [isMainSectionClicked, setIsMainSectionClicked] = useState(false);
	const [selectedStatus, setSelectedStatus] = useState(task.status);
	const [selectedPriority, setSelectedPriority] = useState(task.priority);
	return (
		<>
			<div className={modal_overlay}></div>
			<div className={modal_container}>
				<header className={edit_modal_header}>
					<button type='button' onClick={handleCloseModal}>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
							<path
								fill='currentColor'
								d='M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z'
							></path>
						</svg>
					</button>
				</header>
				<div className={edit_modal_main_container}>
					{/* render different components base on screen size will lose state. One way to avoid this is keep the state in the parent/container.*/}
					{/* This container only manage state of title and description, which mean when the screen size changes, only the title and description will remain. When it is editing, disable other components. And button in action group will be disabled. When they are clicked, they will automatically send a request to the server. So there is no need to store their state. */}
					{/* <div className={edit_modal_main_section}>
						
					</div> */}
					{/* <div className={edit_modal_action_group}>456</div> */}
					<TaskEditFormInfoEditing
						task={task}
						id={id}
						selectedPriority={selectedPriority}
						selectedStatus={selectedStatus}
					/>

					<div style={{ display: 'flex', gap: '10px', marginLeft: '50px' }}>
						<EditTaskFormStatus
							id={id}
							task={task}
							setSelectedStatus={setSelectedStatus}
						/>
						<EditTaskFormPriority
							id={id}
							task={task}
							setSelectedPriority={setSelectedPriority}
						/>
					</div>
					<TaskEditFormCommentSection id={id} task={task} />
					<TaskEditFormComment id={id} task={task} isEditCommentBtnClicked={isEditCommentBtnClicked}/>
				</div>
			</div>
		</>
	);
}
