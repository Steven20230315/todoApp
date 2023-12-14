const CHECKBOX_STYLE = {
	border: '1px solid black',
	borderRadius: '50%',
	height: '18px',
	width: '18px',
	overflow: 'hidden',
	position: 'absolute',
	left: '3px',
	top: '3px',
	boxSizing: 'border-box',
	backgroundColor: 'transparent',
};

const CHECKBOXBTN_STYLE = {
	margin: '8px 6px 0 -3px',
	position: 'relative',
	zIndex: '1',
	alignItems: 'center',
	justifyContent: 'center',
	display: 'flex',
	border: 'none',
	height: '24px',
	width: '24px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
};
export default function TaskTest() {
	return (
		<>
			<div>
				{/* <div>Task Overflow action</div> */}
				{/* <input type='checkbox' name='' id='' /> */}
				<div>
					<button style={CHECKBOXBTN_STYLE}>
						<span style={CHECKBOX_STYLE}></span>
					</button>
				</div>
				{/* <div>Task List Content</div>
				<div>Task List Action</div> */}
			</div>
		</>
	);
}
