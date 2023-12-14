import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
export default function DatePicker() {
	const [selected, setSelected] = useState(new Date());
	return <DayPicker mode='single' selected={selected} onSelect={setSelected} />;
}
