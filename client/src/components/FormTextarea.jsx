export default function FormTextarea() {
	return (
		<div className='form-row'>
			<label htmlFor='description' className='form-label'>
				Description
			</label>
			<textarea className='form-textarea' name='description' id='description' />
		</div>
	);
}
