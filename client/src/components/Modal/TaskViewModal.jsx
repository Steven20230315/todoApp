import classes from './TaskViewModal.module.css';
import { useEffect, useState } from 'react';
import TaskCheckBox from '../Task/TaskCheckBox';
import TaskContent from '../Task/TaskContent';
import { Form } from 'react-router-dom';
export default function TaskViewModal({ handleCloseModal, task, _id }) {
	const {
		modal_overlay,
		modal_content,
		task_main_content_container,
		task_main_content_action,
		task_main_content_subtask,
		task_main_content_comments,
		task_main_content_comments_form,
	} = classes;

	// component data
	const [formData, setFormData] = useState({
		commentText: '',
	});

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				handleCloseModal();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleCloseModal]);

	const handleAddComment = async (e) => {
		e.preventDefault();
		// console.log(e);
		// console.log(e.target.form[1].value);
	};
	return (
		<>
			<div className={modal_overlay} onClick={handleCloseModal}></div>
			<div className={modal_content}>
				<div className={task_main_content_action}>Top Action</div>
				<div className={task_main_content_container}>
					<div>
						<div>{task.title}</div>
						<div>{task.description}</div>
					</div>
					<div className={task_main_content_action}>
						<div className={task_main_content_subtask}>
							<button>
								<span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										fill='none'
										viewBox='0 0 24 24'
									>
										<path
											fill='currentColor'
											fillRule='evenodd'
											d='M12 6a.462.462 0 0 0-.461.462v5.077H6.462a.462.462 0 1 0 0 .922h5.077v5.077a.461.461 0 1 0 .922 0v-5.077h5.077a.461.461 0 1 0 0-.922h-5.077V6.462A.462.462 0 0 0 12 6Z'
											clipRule='evenodd'
										></path>
									</svg>
								</span>
								<span>Add subtask</span>
							</button>
						</div>
						<div className={task_main_content_comments}>
							<Form method='patch' className={task_main_content_comments_form}>
								<button onClick={handleAddComment}>Add comment</button>
								<div>
									<input
										type='text'
										id='comment'
										name='comment'
										value={formData.commentText}
										onChange={(e) =>
											setFormData({ ...formData, commentText: e.target.value })
										}
									/>
								</div>
								<span>{task.comments[0]?.text}</span>
								<span>{task.comments[1]?.text}</span>
								<button type='submit'>Cancel</button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
