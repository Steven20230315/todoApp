import mongoose from 'mongoose';
import { TASK_STATUS, TASK_PRIORITY } from '../utils/constants.js';

const CommentSchema = new mongoose.Schema(
	{
		comment: {
			type: String,
			required: true,
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		createdUnder: {
			type: mongoose.Types.ObjectId,
			ref: 'Task',
			required: true,
		},
	},
	{ timestamps: true }
);

const TaskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please provide title'],
		},
		status: {
			type: String,
			enum: Object.values(TASK_STATUS),
			default: TASK_STATUS.PENDING,
		},
		priority: {
			type: String,
			enum: Object.values(TASK_PRIORITY),
			default: TASK_PRIORITY.LOW,
		},
		description: {
			type: String,
			required: [true, 'Please provide description'],
		},
		createdDate: {
			type: Date,
			default: Date.now(),
		},
		dueDate: {
			type: Date,
			default: Date.now(),
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
		},
		comments: [CommentSchema], // Array of comments
		parentTask: {
			type: mongoose.Types.ObjectId,
			ref: 'Task',
		},
		subTasks: [
			{
				type: mongoose.Types.ObjectId,
				ref: 'Task',
			},
		],
	},
	{ timestamps: true }
);

export default mongoose.model('Task', TaskSchema);
