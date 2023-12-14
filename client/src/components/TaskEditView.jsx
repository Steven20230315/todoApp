import classes from './TaskEditView.module.css';
import { BsCalendar2Event } from 'react-icons/bs';
import { BsFlag } from 'react-icons/bs';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useNavigate } from 'react-router-dom';
export default function TaskEditView({ handleCloseEdit, task, id }) {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		title: task.title,
		description: task.description,
		dueDate: task.dueDate,
		priority: task.priority,
		status: task.status,
		_id: id,
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const {
		task_editor_editing_area,
		task_editor_input_fields,
		task_editor_btn_group,
		task_editor_action_group,
	} = classes;
	console.log(task);
	const [showDatePicker, setShowDatePicker] = useState(false);
	const handleShowDatePicker = () => {
		setShowDatePicker(!showDatePicker);
	};
	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent default form submission

		// Get updated data from form fields
		const updatedData = {
			title: e.target.elements.title.value,
			description: e.target.elements.description.value,
			// Add other fields as needed
		};

		// Send a PATCH request to update the task
		try {
			const response = await customFetch.patch(`/tasks/${id}`, updatedData);
			if (response.status === 200) {
				toast.success('Task updated successfully');
				handleCloseEdit();
				navigate(`/dashboard`);
			} else {
				toast.error('Failed to update task');
			}
		} catch (error) {
			toast.error(error?.response?.data.msg);
		}
	};

	return (
		<Form method='PATCH' onSubmit={handleSubmit}>
			<div className={task_editor_editing_area}>
				<div className={task_editor_input_fields}>
					<input
						type='text'
						placeholder={formData.title}
						name='title'
						id='title'
						value={formData.title}
						onChange={handleInputChange}
					/>
					<input
						type='text'
						placeholder={formData.description}
						name='description'
						id='description'
						value={formData.description}
						onChange={handleInputChange}
					/>
				</div>
				<div className={task_editor_btn_group}>
					<button onClick={handleShowDatePicker} type='button'>
						<BsCalendar2Event
							style={{
								color: '#ff7066',
								verticalAlign: 'middle',
							}}
						/>
						<span style={{ color: '#ff7066', display: 'inline-block' , marginLeft: '5px', marginTop:'2px' }}>
							Due Date
						</span>
						{showDatePicker ? (
							<input type='date' name='dueDate' id='dueDate' />
						) : null}
					</button>
					<select>
						<option value=''>
							<BsFlag />
							Priority 1
						</option>
						<option value=''>
							<BsFlag />
							Priority 2
						</option>
						<option value=''>
							<BsFlag />
							Priority 3
						</option>
						<option value=''>
							<BsFlag />
							Priority 4
						</option>
					</select>
					<button type='button'>3</button>
					<button type='button'>4</button>
				</div>

				<div className={task_editor_action_group}>
					<button onClick={handleCloseEdit}>Cancel</button>
					<button type='submit'>Save</button>
				</div>
			</div>
		</Form>
	);
}
