import styles from './TaskCheckBox.module.css';
export default function TaskCheckBox({
	setIsCheckBoxHovered,
	isCheckBoxHovered,
}) {
	// component styles
	const { task_checkbox_btn, task_checkbox_circle } = styles;
	return (
		<button
			type='submit'
			name='intent'
			value='complete'
			className={task_checkbox_btn}
			onMouseEnter={() => setIsCheckBoxHovered(true)}
			onMouseLeave={() => setIsCheckBoxHovered(false)}
		>
			<span className={task_checkbox_circle}></span>
			{isCheckBoxHovered && (
				<svg width='24' height='24'>
					<path
						fill='white'
						d='M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z'
					></path>
				</svg>
			)}
		</button>
	);
}
