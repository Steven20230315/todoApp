import User from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';
import { hashPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { comparePasswords } from '../middleware/validationMiddleware.js';
import { createJWT } from '../utils/tokenUtils.js';

// register
export const register = async (req, res) => {
	const isRegistered = await User.findOne({ email: req.body.email });
	if (isRegistered)
		res
			.status(StatusCodes.BAD_REQUEST)
			.json({ success: false, message: 'User already exists' });
	req.body.password = await hashPassword(req.body.password);
	const { name, email, password, lastName } = req.body;
	const newUser = await User.create({
		name,
		email,
		password,
		lastName,
	});
	if (!newUser)
		res
			.status(StatusCodes.BAD_REQUEST)
			.json({ success: false, message: 'Invalid user data' });
	res.status(StatusCodes.CREATED).json({ msg: 'User created' });
};

// 1. Verify user credentials 2. Fetch user data from DB 3. Use JWT to create token which is encoded with user data. 4. store token in cookie
export const login = async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email });
	const isValidUser =
		user && (await comparePasswords(req.body.password, user.password));
	if (!isValidUser) {
		throw new UnauthenticatedError('Invalid credentials');
	}
	const oneDay = 1000 * 60 * 60 * 24;
	const token = createJWT({ userId: user._id, role: user.role });
	res.cookie('token', token, {
		httpOnly: true,
		expires: new Date(Date.now() + oneDay),
		secure: process.env.NODE_ENV === 'production', // during development it will be false
	});
	res.status(StatusCodes.OK).json({ msg: 'User logged in' });
};

export const logout = async (req, res) => {
	res.cookie('token', '', {
		httpOnly: true,
		expires: new Date(Date.now()),
	});
	res.status(StatusCodes.OK).json({ msg: 'User logged out' });
};
