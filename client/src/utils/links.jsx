import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';
export const links = [
	{ text: 'all task', path: '', icon: <MdQueryStats /> },
	{ text: 'Today', path: 'today', icon: <FaWpforms /> },
	{ text: 'overdue', path: 'overdue', icon: <MdCalendarMonth /> },
	// { text: 'UiTesting', path: 'testingUiDesign', icon: <MdCalendarMonth /> },

	// { text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
	// { text: 'profile', path: 'profile', icon: <ImProfile /> },
	// { text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
];
