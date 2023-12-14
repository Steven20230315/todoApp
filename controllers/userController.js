import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import Task from '../models/TaskModel.js';

export const getCurrentUser = async (req, res) => {
	// const user = await User.findById(req.user.userId);
	const user = await User.findOne({ _id: req.user.userId });
	const userWithoutPassword = user.toJSON();
	// res.status(StatusCodes.OK).json({ user });
	res
		.status(StatusCodes.OK)
		.json({ msg: 'get current user', userWithoutPassword });
};

export const getApplicationState = async (req, res) => {
	const users = await User.countDocuments();
	const tasks = await Task.countDocuments();
	// const user = await User.findById(req.user.userId);
	// res.status(StatusCodes.OK).json({ user });
	res.status(StatusCodes.OK).json({ users, tasks });
};
export const updateUser = async (req, res) => {
	// const user = await User.findById(req.user.userId);
	// res.status(StatusCodes.OK).json({ user });
	const obj = { ...req.body };
	console.log(obj);
	delete obj.password;
	console.log(obj);
	const updatedUser = await User.findOneAndUpdate(
		{ _id: req.user.userId },
		req.body
	);
	res.status(StatusCodes.OK).json({ msg: 'update user' });
};
