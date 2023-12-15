import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import {
	JOB_STATUS,
	JOB_TYPE,
	TASK_PRIORITY,
	TASK_STATUS,
} from '../utils/constants.js';
import Task from '../models/TaskModel.js';
import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
const withValidationErrors = (validateValues) => {
	return [
		validateValues,
		(req, res, next) => {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				const errorMessage = errors.array().map((err) => err.msg);
				if (errorMessage[0].startsWith('No task')) {
					throw new NotFoundError(errorMessage);
				}
				throw new BadRequestError(errorMessage);
			}
			console.log('no errors');
			next();
		},
	];
};

export const validateJobInput = withValidationErrors([
	body('company').notEmpty().withMessage('Company is required'),
	body('position').notEmpty().withMessage('Position is required'),
	body('jobLocation').notEmpty().withMessage('Job location is required'),
	body('jobStatus')
		.isIn(Object.values(JOB_STATUS))
		.withMessage('Invalid job status'),
	body('jobType')
		.isIn(Object.values(JOB_TYPE))
		.withMessage('Invalid type value'),
]);

export const validateTaskInput = withValidationErrors([
	body('title').notEmpty().withMessage('Title is required'),
	body('description').notEmpty().withMessage('Description is required'),
]);


// validate id param for task. It will check if the task exists and if the user is authorized(admin or owner). It is used when updating task or deleting task
export const validateIdParam1 = withValidationErrors([
	param('id').custom(async (value, { req }) => {
		const isValidId = mongoose.Types.ObjectId.isValid(value);
		if (!isValidId) {
			throw new BadRequestError(`Invalid MongoDB id: ${value}`);
		}
		const task = await Task.findById(value);
		if (!task) {
			// you can not pass id here. It will be undefined. You have to pass value
			// throw new NotFoundError(`No job with id ${id}`);
			throw new NotFoundError(`No task with id ${value}`);
		}
		// authenticateUser function will inject the user object to the request object. That's why user object is available here
		const isAdmin = req.user.role === 'admin';
		const isOwner = req.user.userId === task.createdBy.toString();
		if (!isAdmin && !isOwner) {
			throw new BadRequestError(
				'You are not authorized to perform this action'
			);
		}
		console.log('ValidateIdParam1 successful');
	}),
]);

// validate register input. Making sure necessary fields are not empty and each field is valid
export const validateRegisterInput = withValidationErrors([
	body('name').notEmpty().withMessage('Name is required'),
	body('lastName').optional(),
	body('email')
		.trim()
		.notEmpty()
		.withMessage('Email is required')
		.isEmail()
		.withMessage('Invalid email')
		.custom(async (email) => {
			const existedEmail = await User.findOne({ email });
			if (existedEmail) {
				throw new BadRequestError('Email already exists');
			}
		}),
	body('password')
		.trim()
		.notEmpty()
		.withMessage('Password is required')
		.isLength({ min: 6 })
		.matches(/[a-z]/)
		.matches(/[A-Z]/)
		.matches(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/)
		.withMessage(
			'The password must be at least 6 characters long, contain at least one lowercase letter, at least one uppercase letter, and at least one special character.'
		),
]);

// validate login input. Making sure necessary fields are not empty and each field is valid. (Here, we don't check wether email or password is valid. We just check if email and password are not empty.) The login function in the login route will check if email and password are valid.

export const validateLoginInfo = withValidationErrors([
	body('email')
		.notEmpty()
		.withMessage('Email is required')
		.isEmail()
		.withMessage('Invalid email'),
	body('password').notEmpty().withMessage('Password is required'),
]);

export const comparePasswords = async (password, hashedPassword) => {
	const isMatched = await bcrypt.compare(password, hashedPassword);
	return isMatched;
};

export const validateUpdateUserInput = withValidationErrors([
	body('name').notEmpty().withMessage('Name is required'),
	body('email')
		.notEmpty()
		.withMessage('Email is required')
		.isEmail()
		.withMessage('Invalid email')
		.trim()
		.custom(async (email, { req }) => {
			const user = await User.findOne({ email });
			if (user && user._id.toString() !== req.user.userId) {
				//we use the provided email to find if user exists. But we don't know if the user is the current user.
				throw new BadRequestError('Email already exists');
			}
		}),
	body('role').optional(),
]);

// A very simple validation function.
export const validateCommentInput = withValidationErrors([
	body('comment').notEmpty().withMessage('Comment cannot be empty'),
]);

export const validateDeleteCommentInput = withValidationErrors([
	param('commentId').notEmpty().withMessage('Did not provide comment id'),
	param('id').notEmpty().withMessage('Did not provide id'),
]);
