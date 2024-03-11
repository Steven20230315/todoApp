import { useState } from 'react';
import style from './CSS/AddTaskBtn.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import AddTaskForm from './AddTaskForm';
import IconBtn from './CSS/IconBtn';
export default function AddTaskBtn() {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div className={style.add_task_btn_container}>
			{!isClicked ? (
				<button
					className={style.add_task_btn}
					onClick={() => setIsClicked(!isClicked)}
				>
					<span>
						<AiOutlinePlus />
					</span>
					Add task
				</button>
			) : (
				<AddTaskForm />
			)}
			<IconBtn
				icon={<AiOutlinePlus />}
				onClick={() => setIsClicked(!isClicked)}
				text='Add task'
				className={style.add_task_btn}
			/>
		</div>
	);
}
