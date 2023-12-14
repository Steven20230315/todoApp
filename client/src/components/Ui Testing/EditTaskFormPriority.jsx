import { useState, useRef, useEffect } from 'react';
import styles from './EditTaskFormPriority.module.css';
import { TASK_STATUS, TASK_PRIORITY } from '../../../../utils/constants';

const icon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='14'
		height='16'
		fill='none'
		viewBox='2 -4 16 16'
		data-icon-name='priority-icon'
		data-priority='4'
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M2 3a.5.5 0 0 1 .276-.447C3.025 2.179 4.096 2 5.5 2c.901 0 1.485.135 2.658.526C9.235 2.885 9.735 3 10.5 3c1.263 0 2.192-.155 2.776-.447A.5.5 0 0 1 14 3v6.5a.5.5 0 0 1-.276.447c-.749.375-1.82.553-3.224.553-.901 0-1.485-.135-2.658-.526C6.765 9.615 6.265 9.5 5.5 9.5c-1.08 0-1.915.113-2.5.329V13.5a.5.5 0 0 1-1 0V3Zm1 5.779v-5.45C3.585 3.113 4.42 3 5.5 3c.765 0 1.265.115 2.342.474C9.015 3.865 9.599 4 10.5 4c1.002 0 1.834-.09 2.5-.279v5.45c-.585.216-1.42.329-2.5.329-.765 0-1.265-.115-2.342-.474C6.985 8.635 6.401 8.5 5.5 8.5c-1.001 0-1.834.09-2.5.279Z'
			clipRule='evenodd'
		></path>
	</svg>
);

export default function EditTaskFormStatus({ setSelectedPriority, task }) {
	// component styles
	const { task_status_dropdown, task_status_dropdown_option } = styles;

	// component state
	const [selectedOption, setSelectedOption] = useState('');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleOptionClick = (value) => {
		setSelectedOption(value);
		setSelectedPriority(value);
		setIsDropdownOpen(false);
		console.log(value);
	};
	useEffect(() => {
		const handleEscapeKeyPress = (event) => {
			if (event.key === 'Escape') {
				setIsDropdownOpen(false);
			}
		};

		const handleFocusOut = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		if (isDropdownOpen) {
			document.addEventListener('keydown', handleEscapeKeyPress);
			document.addEventListener('click', handleFocusOut);
		}

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
					value={task.priority}
					onChange={(e) => setSelectedOption(e.target.value)}
					name='priority'
				></select>
				<span>
					{icon}
					{selectedOption === TASK_PRIORITY.HIGH
						? 'Priority 1'
						: selectedOption === TASK_PRIORITY.MEDIUM
						? 'Priority 2'
						: 'Priority 3'}
				</span>
				{isDropdownOpen && (
					<div className={task_status_dropdown_option}>
						<div onClick={() => handleOptionClick(TASK_PRIORITY.HIGH)}>
							<span>
								{icon}
								Priority 1
							</span>
						</div>
						<div onClick={() => handleOptionClick(TASK_PRIORITY.MEDIUM)}>
							<span>
								{icon}
								Priority 2
							</span>
						</div>
						<div onClick={() => handleOptionClick(TASK_PRIORITY.LOW)}>
							<span>
								{icon}
								Priority 3
							</span>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
