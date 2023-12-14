import { useState } from 'react';
import { Form } from 'react-router-dom';
import styles from './TaskEditFormComment.module.css';
export default function TaskEditFormComment({
	task,
	id,
	isEditCommentBtnClicked,
}) {
	// component styles
	const {
		task_edit_form_comment_container,
		task_edit_form_comment_block,
		task_edit_form_edit_btn,
		task_comment_edit_form_container,
		task_comment_form,
		task_comment_form_input,
		task_comment_form_input_container,
		task_comment_form_save_btn,
		task_comment_form_action_container,
		task_comment_form_cancel_btn,
	} = styles;

	const [comment, setComment] = useState('');
	const [isCommentFormOpen, setIsCommentFormOpen] = useState(
		isEditCommentBtnClicked
	);
	return (
		<div className={task_edit_form_comment_container}>
			<div className={task_edit_form_comment_block}></div>
			{!isCommentFormOpen && (
				<button
					className={task_edit_form_edit_btn}
					onClick={() => setIsCommentFormOpen(true)}
				>
					Comment
				</button>
			)}
			{isCommentFormOpen && (
				<div className={task_comment_edit_form_container}>
					<Form className={task_comment_form} method='POST'>
						<div className={task_comment_form_input_container}>
							<input
								type='text'
								name='comment'
								placeholder='Add a comment...'
								value={comment}
								onChange={(e) => setComment(e.target.value)}
								className={task_comment_form_input}
							/>
							<input
								type='text'
								name='taskId'
								defaultValue={id}
								hidden
								readOnly
							/>
						</div>
						<div className={task_comment_form_action_container}>
							<button
								className={task_comment_form_cancel_btn}
								onClick={() => setIsCommentFormOpen(false)}
							>
								Cancel
							</button>
							<button
								className={task_comment_form_save_btn}
								name='intent'
								value='addComment'
							>
								Add Comment
							</button>
						</div>
					</Form>
				</div>
			)}
			{/* {isCommentFormOpen && (
				<Form method='POST'>
					<input
						type='text'
						name='comment'
						placeholder='Add a comment...'
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<input type='text' name='taskId' defaultValue={id} hidden readOnly />
					<button name='intent' value='addComment'>
						Add Comment
					</button>
				</Form>
			)} */}
		</div>
	);
}
