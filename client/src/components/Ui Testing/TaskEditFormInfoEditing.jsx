import styles from './TaskEditFormInfoEditing.module.css';
import { useState, useEffect, useRef } from 'react';
import { Form } from 'react-router-dom';

export default function TaskEditFormInfo({
	task,
	selectedPriority,
	selectedStatus,
}) {
	// component styles
	const {
		task_edit_form_info_container,
		task_edit_form_checkbox,
		task_edit_form_main_content,
		task_edit_form_checkbox_circle,
		task_edit_form_action_group,
		edit_form_checkbox_container,
		edit_form_main_section,
		edit_form_action_container,
		edit_form_save_button,
		edit_form_cancel_button,
		edit_form_title_input,
	} = styles;

	// component state
	const [isMainSectionClicked, setIsMainSectionClicked] = useState(false);
	const [isCheckBoxHovered, setIsCheckBoxHovered] = useState(false);
	const [title, setTitle] = useState(task.title);
	const [description, setDescription] = useState(task.description);

	// component functions
	const handleCancel = () => {
		setTitle(task.title);
		setDescription(task.description);
	};

	return (
		<>
			<Form
				method='PATCH'
				className={task_edit_form_info_container}
				autoComplete='off'
			>
				<div className={edit_form_main_section}>
					<div className={edit_form_checkbox_container}>
						<button
							name='intent'
							value='complete'
							className={task_edit_form_checkbox}
						>
							<span className={task_edit_form_checkbox_circle}>
								{isCheckBoxHovered && (
									<svg width='24' height='24' viewBox='0 0 24 24'>
										<path
											fill='currentColor'
											d='M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z'
										></path>
									</svg>
								)}
							</span>
						</button>
					</div>
					<div className={task_edit_form_main_content}>
						<div>
							<input
								type='text'
								name='title'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className={edit_form_title_input}
								placeholder={task.title}
							/>
						</div>
						<div style={{ minHeight: '60px' }}>
							<input
								type='text'
								name='description'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								className={edit_form_title_input}
								placeholder={task.description}
							/>
						</div>
						<input type='text' name='taskId' value={task._id} hidden readOnly />
						<input
							type='text'
							name='status'
							value={selectedStatus}
							hidden
							readOnly
						/>

						<input
							type='text'
							name='priority'
							value={selectedPriority}
							hidden
							readOnly
						/>
					</div>
				</div>
				<div className={edit_form_main_section}>
					<div className={edit_form_action_container}></div>
					<div className={task_edit_form_action_group}>
						<button
							type='reset'
							onClick={handleCancel}
							className={edit_form_cancel_button}
						>
							Cancel
						</button>
						<button
							name='intent'
							value='editTask'
							className={edit_form_save_button}
						>
							Save
						</button>
					</div>
				</div>
			</Form>
		</>
	);
}
