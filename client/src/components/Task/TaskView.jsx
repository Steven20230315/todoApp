import { useState } from 'react';
import TaskCheckBox from './TaskCheckBox';
import TaskAction from './TaskAction';
import TaskContent from './TaskContent';
import classes from './TaskView.module.css';
import TaskViewModal from '../Modal/TaskViewModal';
import ModalWrapper from '../Modal/ModalWrapper';
import TaskEditView from '../TaskEditView';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import { useAllTasksContext } from '../../pages/AllTasks';

export default function Task({ task, id }) {
	const { task_container } = classes;
	const [isHovered, setIsHovered] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleOpenEdit = () => {
		setIsEditing(true);
	};

	const handleCloseEdit = () => {
		setIsEditing(false);
	};

	// to prevent open modal and edit view at the same time.
	const handleEditButtonClick = (e) => {
		e.stopPropagation();
		window.history.pushState(null, '', `/dashboard/${id}`);
		Cookies.set('taskId', id);
		handleOpenEdit();
	};

	const handleDeleteButtonClick = (e) => {
		e.stopPropagation();
	};

	return (
		<>
			{isEditing && task && (
				<TaskEditView handleCloseEdit={handleCloseEdit} task={task} id={id} />
			)}

			{!isEditing && (
				<div
					role='button'
					className={task_container}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onClick={handleOpenModal}
				>
					<TaskCheckBox
						handleDeleteButtonClick={handleDeleteButtonClick}
						id={id}
					/>
					<TaskContent task={task} _id={id} />
					{isHovered && (
						<TaskAction
							handleEditButtonClick={handleEditButtonClick}
							handleCloseEdit={handleCloseEdit}
						/>
					)}
				</div>
			)}
			{isModalOpen && (
				<TaskViewModal
					handleCloseModal={handleCloseModal}
					task={task}
					_id={id}
				/>
			)}
			{/* <ModalWrapper open={ isModalOpen } handleCloseModal={ handleCloseModal } /> */}
		</>
	);
}
