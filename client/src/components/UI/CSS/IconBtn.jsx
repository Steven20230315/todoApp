import { AiOutlinePlus } from 'react-icons/ai';

export default function IconBtn({
	icon = <AiOutlinePlus />,
	text = 'Add task',
	className,
	onClick,
}) {
	return (
		<button className={className} onClick={onClick ? onClick : null}>
			<span>{icon}</span>
			{text}
		</button>
	);
}
