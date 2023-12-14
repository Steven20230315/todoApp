import { useState } from 'react';
import DatePicker from 'react-datepicker';
export default function DateSelector() {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<DatePicker
			closeOnScroll={true}
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			name='dueDate'
			id='dueDate'
		/>
	);
}
