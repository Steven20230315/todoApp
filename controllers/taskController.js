import Task from '../models/TaskModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/customErrors.js';

// get all tasks
export const getAllTasks = async (req, res) => {
	req.body.createdBy = req.user.userId;
	const tasks = await Task.find({ createdBy: req.user.userId });
	res.status(StatusCodes.OK).json({ tasks });
};

// create a task
export const createTask = async (req, res) => {
	console.log('*****************************************');
	console.log('This is req.body', req.body);
	console.log('This is req.user', req.user);
	console.log('*****************************************');

	req.body.createdBy = req.user.userId;
	const newTask = await Task.create(req.body);
	res.status(StatusCodes.CREATED).json({ success: true, data: newTask });
};

// export const updateTask = async (req, res) => {
// 	console.log(req);
// 	console.log(res);
// 	console.log('Error');
// 	const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
// 		new: true,
// 	});
// 	res.status(StatusCodes.OK).json({ msg: 'Update success', data: task });
// };

export const updateTask = async (req, res) => {
	try {
		// syntax Model.findByIdAndUpdate(id, update, options)
		// update is an object with the fields you want to update
		// req.body is an object so you don't need to and curly brackets
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		if (!task) {
			return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Task not found' });
		}

		res.status(StatusCodes.OK).json({ msg: 'Update success', data: task });
	} catch (error) {
		console.error(error);
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: 'Internal server error' });
	}
};

export const deleteTask = async (req, res) => {
	const task = await Task.findByIdAndDelete(req.params.id);
	const id = req.params.id;
	console.log('id is', id);
	if (!id) {
		return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Id not found' });
	}
	console.log('task id is', id);
	if (!task) {
		return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Task not found' });
	}

	res.status(StatusCodes.OK).json({ msg: `task with id ${id} deleted` });
};
``;

export const createComment = async (req, res) => {
	// req.body have the comment, taskId, and intent. I did not see userId in req.body
	// req.params also have the taskId, but it is called id
	// req.user have userId nad role
	// I have all the data needed to create a comment
	const taskId = req.params.id
		? req.params.id
		: req.body.taskId
		? req.body.taskId
		: null;
	if (!taskId) {
		return res.status(StatusCodes.NOT_FOUND).json({ msg: 'Task ID not found' });
	}
	const data = {
		comment: req.body.comment,
		createdBy: req.user.userId,
		createdUnder: taskId,
	};
	try {
		const newComment = await Task.findByIdAndUpdate(taskId, {
			$push: {
				comments: data,
			},
		});
		if (!newComment) {
			return res
				.status(StatusCodes.NOT_FOUND)
				.json({ msg: 'Comment update failed' });
		}
		res.status(StatusCodes.CREATED).json({ success: true, data: newComment });
	} catch (error) {
		console.error(error);
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: 'Internal server error' });
	}
};

export const deleteComment = async (req, res) => {
	const { id, commentId } = req.params;
	console.log('***************************************');
	console.log(id, commentId);
	try {
		const comment = await Task.findByIdAndUpdate(id, {
			$pull: {
				comments: {
					_id: commentId,
				},
			},
		});
		console.log(comment);
		res.status(StatusCodes.OK).json({ msg: 'Delete success' });
	} catch (error) {
		console.error(error);
		res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: 'Internal server error' });
	}
};
