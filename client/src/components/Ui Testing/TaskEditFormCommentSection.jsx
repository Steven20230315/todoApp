import { useState } from 'react';
import Styles from './TaskEditFormCommentSection.module.css';
import Comments from './Comments';

export default function TaskEditFormCommentSection({ task, id }) {
	const { task_edit_view_comment_container } = Styles;
	const comments = task.comments;
	if (!comments) return null;
	return (
		<>
			<div className={task_edit_view_comment_container}>
				{comments?.map((comment) => (
					<Comments key={comment._id} comment={comment} />
				))}
			</div>
		</>
	);
}
