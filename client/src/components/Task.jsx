import classes from './Task.module.css';
import { Form } from 'react-router-dom';
// import day from 'dayjs';
// import advancedFormat from 'dayjs/plugin/advancedFormat';
// day.extend(advancedFormat);

const deleteHandler = (e) => {
	e.preventDefault();
};

export default function Task({
	tittle,
	description,
	status,
	dueDate,
	priority,
}) {
	const date = dueDate.split('T')[0];
	console.log(date);
	return (
		<div className={classes.container}>
			<header>
				<h4 className={classes.tittle}>{tittle}</h4>
			</header>
			<hr />
			<footer>
				<div>
					<p className={classes.description}>{description}</p>
				</div>
				<hr />
				<div>
					<form action='' className={classes.btn_group}>
						<button type='button' className={classes.btn}>
							Edit
						</button>
						<button className={classes.btn}>
							
						</button>
					</form>
				</div>
			</footer>
		</div>
	);
}
