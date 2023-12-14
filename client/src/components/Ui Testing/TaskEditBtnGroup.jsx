export default function TaskEditBtnGroup({
	setIsEditBtnClicked,
	setIsEditCommentBtnClicked,
}) {
	// component styles
	return (
		<>
			<button
				type='button'
				onClick={() => {
					setIsEditCommentBtnClicked(false);
					setIsEditBtnClicked(true);
				}}
			>
				<svg width='24' height='24'>
					<g fill='none' fillRule='evenodd'>
						<path
							fill='currentColor'
							d='M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z'
						></path>
						<path
							stroke='currentColor'
							d='M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z'
						></path>
					</g>
				</svg>
			</button>
			{/* <button
				type='button'
				onClick={() => {
					setIsEditCommentBtnClicked(true);
					setIsEditBtnClicked(true);
				}}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					fill='none'
					viewBox='0 0 24 24'
				>
					<path
						fill='currentColor'
						fillRule='evenodd'
						d='M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6Zm12 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H7Z'
						clipRule='evenodd'
					></path>
				</svg>
			</button> */}
			<button
				type='button'
				onClick={() => {
					setIsEditCommentBtnClicked(true);
					setIsEditBtnClicked(true);
				}}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					data-svgs-path='sm1/comments.svg'
				>
					<path
						fill='currentColor'
						fillRule='nonzero'
						d='M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z'
					></path>
				</svg>
			</button>
		</>
	);
}
