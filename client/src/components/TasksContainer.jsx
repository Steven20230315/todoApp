import { useAllTasksContext } from '../pages/AllTasks';
import Task from './Task';
import Wrapper from '../assets/wrappers/TasksContainer';
export default function TasksContainer() {
	const { data } = useAllTasksContext();
	const { tasks } = data;
	if (tasks.length === 0)
		return (
			<Wrapper>
				<h2>No Tasks</h2>
			</Wrapper>
		);
	return (
		<Wrapper>
			<div className='tasks'>
				{tasks.map((task) => {
					return <Task key={task._id} {...task} />;
				})}
			</div>
		</Wrapper>
	);
}
