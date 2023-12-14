import styles from './AddTaskForm.module.css';
import { Form } from 'react-router-dom';
import { useState } from 'react';
import { TASK_PRIORITY, TASK_STATUS } from '../../../../utils/constants';
import AddTaskFormStatus from './AddTaskFormStatus';
import AddTaskFormPriority from './AddTaskFormPriority';
export default function AddTaskForm({ handleCloseForm }) {
	// component styles

	// component state
	const [title, setTitle] = useState('');
	const [isTitleEmpty, setIsTitleEmpty] = useState(true);
	const [selectedDate, setSelectedDate] = useState('');
	const [selectedPriority, setSelectedPriority] = useState('');
	const [selectedStatus, setSelectedStatus] = useState('');

	// component functions
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
		setIsTitleEmpty(e.target.value.length === 0);
	};
	const {
		add_task_form,
		add_task_main_content_container,
		add_task_input_container,
		add_task_form_btn_group,
		add_task_form_action_group,
		add_task_form_action_btn_group,
		add_task_form_cancel_btn,
		add_task_form_save_btn,
		add_task_form_date_picker,
	} = styles;
	return (
		<Form method='POST' className={add_task_form} autoComplete='off'>
			<div className={add_task_main_content_container}>
				<div className={add_task_input_container}>
					<input
						type='text'
						placeholder='Task Name'
						onChange={handleTitleChange}
						value={title}
						name='title'
					/>
					<input type='text' placeholder='Description' name='description' />
				</div>
				<div className={add_task_form_btn_group}>
					<input
						className={add_task_form_date_picker}
						type='date'
						name='dueDate'
						id='duaDate'
						onChange={(e) => setSelectedDate(e.target.value)}
						value={selectedDate}
					/>
					<input
						type='text'
						hidden
						name='priority'
						value={selectedPriority}
						readOnly
					/>
					<input
						type='text'
						hidden
						name='status'
						value={selectedStatus}
						readOnly
					/>
					<AddTaskFormPriority setSelectedPriority={setSelectedPriority} />
					<AddTaskFormStatus setSelectedStatus={setSelectedStatus} />
				</div>
			</div>
			<div className={add_task_form_action_group}>
				<div>Inbox</div>
				<div className={add_task_form_action_btn_group}>
					<button
						onClick={handleCloseForm}
						className={add_task_form_cancel_btn}
					>
						Cancel
					</button>
					<button
						name='intent'
						value='addTask'
						className={add_task_form_save_btn}
						disabled={isTitleEmpty}
					>
						Add Task
					</button>
				</div>
			</div>
		</Form>
	);
}
