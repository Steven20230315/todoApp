import { useState, useRef, useEffect } from 'react';
import styles from './AddTaskFormStatus.module.css';
import { TASK_STATUS } from '../../../../utils/constants';

export default function AddTaskFormStatus({ setSelectedStatus }) {
	// component styles
	const { task_status_dropdown, task_status_dropdown_option } = styles;

	// component state
	const [selectedOption, setSelectedOption] = useState('');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleOptionClick = (value) => {
		setSelectedOption(value); // Update the selected option when a div is clicked
		setSelectedStatus(value);
		setIsDropdownOpen(false); // Close the dropdown
		console.log(value);
	};

	useEffect(() => {
		const handleEscapeKeyPress = (event) => {
			if (event.key === 'Escape') {
				setIsDropdownOpen(false); // Close the dropdown when the Escape key is pressed
			}
		};

		const handleFocusOut = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false); // Close the dropdown when focus is lost outside of the component
			}
		};

		// Attach the event listeners when the dropdown is open
		if (isDropdownOpen) {
			document.addEventListener('keydown', handleEscapeKeyPress);
			document.addEventListener('click', handleFocusOut);
		}

		// Remove the event listeners when the component unmounts or when the dropdown is closed
		return () => {
			document.removeEventListener('keydown', handleEscapeKeyPress);
			document.removeEventListener('click', handleFocusOut);
		};
	}, [isDropdownOpen]);

	return (
		<>
			<div
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				className={task_status_dropdown}
				ref={dropdownRef}
			>
				<select
					hidden
					value={selectedOption}
					onChange={(e) => setSelectedOption(e.target.value)}
					name='status'
				></select>
				{selectedOption === '' ? 'Status' : selectedOption}
				{isDropdownOpen && (
					<div className={task_status_dropdown_option}>
						<div onClick={() => handleOptionClick(TASK_STATUS.TO_DO)}>
							<span>{TASK_STATUS.TO_DO}</span>
						</div>
						<div onClick={() => handleOptionClick(TASK_STATUS.PENDING)}>
							<span>{TASK_STATUS.PENDING}</span>
						</div>
						<div onClick={() => handleOptionClick(TASK_STATUS.COMPLETED)}>
							<span>{TASK_STATUS.COMPLETED}</span>
						</div>
						<div onClick={() => handleOptionClick(TASK_STATUS.IN_PROGRESS)}>
							<span>{TASK_STATUS.IN_PROGRESS}</span>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
