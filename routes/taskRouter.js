import { Router } from 'express';
import {
	getAllTasks,
	createTask,
	deleteTask,
	updateTask,
	createComment,
	deleteComment,
} from '../controllers/taskController.js';

import {
	validateTaskInput,
	validateIdParam1,
	validateCommentInput,
	validateDeleteCommentInput,
} from '../middleware/validationMiddleware.js';
const router = Router();

router.route('/').get(getAllTasks).post(validateTaskInput, createTask);
router
	.route('/:id')
	.patch(validateIdParam1, validateTaskInput, updateTask)
	.delete(validateIdParam1, deleteTask);

router
	.route('/:id/comments')
	.post(validateIdParam1, validateCommentInput, createComment);
router
	.route('/:id/comments/:commentId')
	.patch(validateIdParam1)
	.delete(validateIdParam1, validateDeleteCommentInput, deleteComment);

export default router;
