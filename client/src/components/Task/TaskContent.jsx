import classes from './TaskContent.module.css';
export default function TaskContent({ task, _id, key }) {
	const { task_content_container, task_title, task_description, task_tag } =
		classes;
	const { title, description} = task;
	return (
		<div className={task_content_container}>
			<div>
				<div className={task_title}>{title}</div>
				<div className={task_description}>{description}</div>
			</div>
			<div className={task_tag}>{ task.dueDate.split("T")[0] }</div>
		</div>
	);
}
