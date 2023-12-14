import { UnauthenticatedError, UnauthorizedError } from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

// Authenticates the user based on the provided token in the request cookies. 
export const authenticateUser = (req, res, next) => {
	const { token } = req.cookies;
	if (!token) throw new UnauthenticatedError('Authentication invalid1');
	try {
		const { userId, role } = verifyJWT(token);
		// console.log(userId, role);
		req.user = { userId, role };
		// console.log(req.user);
		// console.log('user authenticated');
		next();
	} catch (error) {
		throw new UnauthenticatedError('Authentication invalid2');
	}
};

export const authorizePermissions = (...roles) => {
	return (req, res, next) => {
		//roles is ['admin']. If user.role is admin, then it will return true
		if (!roles.includes(req.user.role)) {
			throw new UnauthorizedError(
				'You are not authorized to perform this action'
			);
		}
		console.log(roles);
		next();
	};
};
