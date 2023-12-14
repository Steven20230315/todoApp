import { useEffect } from 'react';
const MODAL_STYLES = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: 'rgba(0,0,0)',
	height: '500px',
	width: '500px',
	zIndex: 1000,
	borderRadius: '10px',
};

const MODAL_OVERLAY = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, .7)',
	zIndex: 1000,
};

export default function ModalWrapper({ open, children, handleCloseModal }) {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				handleCloseModal();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleCloseModal]);
	if (!open) return null;
	return (
		<>
			<div style={MODAL_OVERLAY} onClick={handleCloseModal} />
			<div style={MODAL_STYLES}>{children}</div>
		</>
	);
}
