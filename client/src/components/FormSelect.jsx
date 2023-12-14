import { TASK_PRIORITY, TASK_STATUS } from '../../../utils/constants';
export default function FormSelect({ name, labelText, options }) {
	return (
		<div className='form-row'>
			<label htmlFor='name' className='form-label'>
				{labelText || name}
			</label>
			<select name={name} id={name} className='form-select'>
				{options === 'priority'
					? Object.values(TASK_PRIORITY).map((item) => {
							return (
								<option key={Math.random()} value={item}>
									{item}
								</option>
							);
					  })
					: Object.values(TASK_STATUS).map((item) => {
							return (
								<option key={Math.random()} value={item}>
									{item}
								</option>
							);
					  })}
			</select>
		</div>
	);
}
