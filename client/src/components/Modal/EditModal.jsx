import { useState } from 'react';
import classes from './EditModal.module.css';

function TaskList({ task }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div className={classes.hovered_component}>
				{/* ... (your task content) */}
				<button onClick={handleOpenModal}>Edit</button>
			</div>

			{isModalOpen && (
				<div className='modal-overlay'>
					<div className='modal-content'>
						<form method='post' className={classes.form}>
							{/* Your form content */}
							<button
								type='button'
								className={`${classes.btn} ${classes.redButton}`}
								onClick={handleCloseModal}
							>
								Cancel
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
}

export default TaskList;
