import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { authenticateUser } from './middleware/authMiddleware.js';
import cookieParser from 'cookie-parser';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// routers
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import taskRouter from './routes/taskRouter.js';

// server
const app = express();
const port = process.env.PORT || 5100;

// database

//middleware
const __dirname = dirname(fileURLToPath(import.meta.url));
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser());
app.use(express.json());
//routes

app.post(
	'https://main.d2eihi72apprns.amplifyapp.com/api/v1/test',
	(req, res) => {
		const { name } = req.body;
		res.json({ message: `hello ${name}`, data: req.body });
	}
);

app.get('/api/v1/test', (req, res) => {
	res.json({ message: 'hello' });
});

//
app.use(
	'https://main.d2eihi72apprns.amplifyapp.com//api/v1/tasks',
	authenticateUser,
	taskRouter
);
app.use(
	'https://main.d2eihi72apprns.amplifyapp.com/api/v1/users',
	authenticateUser,
	userRouter
);
app.use('https://main.d2eihi72apprns.amplifyapp.com/api/v1/auth', authRouter);
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

//Not found route. Here we use "use" and * to catch all routes and all methods
app.use('*', (req, res) => {
	res.status(404).json({ msg: 'not found' });
});

// error middleware
app.use(errorHandlerMiddleware);

try {
	await mongoose.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
} catch (error) {
	console.log(error);
	process.exit(1);
}
