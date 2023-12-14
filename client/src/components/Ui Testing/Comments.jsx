import { useState } from 'react';
import styles from './Comments.module.css';
import { Form } from 'react-router-dom';
export default function Comments({ comment }) {
	// component styles
	const {
		comment_action_group,
		comment_action_dropdown,
		comment_form_container,
		comment_delete_btn,
		comment_date,
	} = styles;

	const commentId = comment._id;

	// component state
	const [isHovered, setIsHovered] = useState(false);
	const date = new Date(comment.createdAt);
	console.log(date.toLocaleDateString());
	return (
		<div
			key={commentId}
			className={comment_form_container}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<p>{comment.comment}</p>
			<p className={comment_date}>{date.toLocaleDateString()}</p>
			<Form method='DELETE'>
				<input
					type='text'
					name='taskId'
					defaultValue={comment.createdUnder}
					hidden
					readOnly
				/>
				<input
					type='text'
					name='commentId'
					defaultValue={comment._id}
					hidden
					readOnly
				/>

				{isHovered && (
					<button
						name='intent'
						value='deleteComment'
						type='submit'
						className={comment_delete_btn}
					>
						X
					</button>
				)}
			</Form>
		</div>
	);
}
