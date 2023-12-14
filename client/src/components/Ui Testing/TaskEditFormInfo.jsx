import styles from './TaskEditFormInfo.module.css';
import { useState } from 'react';
import { Form } from 'react-router-dom';

export default function TaskEditFormInfo({task, id}) {
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
	} = styles;

	// component state
	const [isMainSectionClicked, setIsMainSectionClicked] = useState(false);
	const [isCheckBoxHovered, setIsCheckBoxHovered] = useState(false);

	return (
		<>
			<div className={task_edit_form_info_container}>
				<div className={edit_form_main_section}>
					<div className={edit_form_checkbox_container}>
						<Form>
							<button
								className={task_edit_form_checkbox}
								onMouseEnter={() => setIsCheckBoxHovered(true)}
								onMouseLeave={() => setIsCheckBoxHovered(false)}
							>
								<span className={task_edit_form_checkbox_circle}>
									{isCheckBoxHovered && (
										<svg width='24' height='24' viewBox='0 0 24 24'>
											<path
												fill='white'
												d='M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z'
											></path>
										</svg>
									)}
								</span>
							</button>
						</Form>
					</div>
					<div className={task_edit_form_main_content}>
						<div>
							<h3>{task.title}</h3>
						</div>
						<div style={{ minHeight: '60px' }}>{task.description}</div>
					</div>
				</div>
			</div>
		</>
	);
}
