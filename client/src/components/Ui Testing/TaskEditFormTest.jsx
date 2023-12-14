import { useState } from 'react';
import { Form } from 'react-router-dom';
import styles from './TaskEditFormTest.module.css';
export default function TaskEditFormTest({ task }) {
	// component styles
	const {
		edit_form_task_container,
		edit_form_checkbox_container,
		edit_form_main_section_container,
		edit_form_main_section_title,
		edit_form_main_section_description,
		edit_form_main_section_content,
	} = styles;

	// component states
	const [isHovered, setIsHovered] = useState(false);
	const [isCheckboxHovered, setItCheckboxHovered] = useState(false);
	const [title, setTitle] = useState(task.title);
	const [description, setDescription] = useState(task.description);

	//component functions
	const handleTitleChange = (e) => {
		setTitle(e.target.textContent);
		console.log(title);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.textContent);
		console.log(description);
	};
	return (
		<Form className={edit_form_task_container}>
			<div className={edit_form_checkbox_container}>
				<button
					name='intent'
					value='complete'
					onMouseEnter={() => setItCheckboxHovered(true)}
					onMouseLeave={() => setItCheckboxHovered(false)}
				>
					<span>
						{isCheckboxHovered && (
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
			<div
				className={edit_form_main_section_container}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className={edit_form_main_section_content}>
					<input type='text' hidden name='title' value={title} />
					<input type='text' hidden name='description' value={description} />
					<h5
						className={edit_form_main_section_title}
						contentEditable
						onInput={handleTitleChange}
					>
						{title}
					</h5>
					<p
						className={edit_form_main_section_description}
						contentEditable
						onInput={handleDescriptionChange}
					>
						{description}
					</p>
				</div>
			</div>
		</Form>
	);
}
