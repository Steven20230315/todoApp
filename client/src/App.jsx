import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	DashboardLayout,
	Error,
	HomeLayout,
	Landing,
	Login,
	Register,
	UiTesting,
	Today,
} from './pages';
import customFetch from './utils/customFetch.js';

import { action as registerAction } from './pages/Register.jsx';
import { action as loginAction } from './pages/Login.jsx';
import { loader as dashboardLoader } from './pages/DashboardLayout.jsx';
import { action as UiTestingAction } from './pages/UiTesting';
import { loader as UiTestingLoader } from './pages/UiTesting';

export const checkDefaultTheme = () => {
	localStorage.setItem('dark-theme', true);
	const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
	document.body.classList.toggle('dark-theme', isDarkTheme);
	return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'register',
				element: <Register />,
				action: registerAction,
			},
			{
				path: 'login',
				element: <Login />,
				action: loginAction,
			},
			{
				path: 'dashboard',
				element: <DashboardLayout isDarkThemeEnabled={true} />,
				loader: dashboardLoader,
				children: [
					// {
					// 	index: true,
					// 	element: <AllTasks />,
					// 	loader: allTasksLoader,
					// 	action: TaskAction,
					// },
					{
						index: true,
						element: <UiTesting />,
						action: UiTestingAction,
						loader: UiTestingLoader,
					},
					{
						path: 'today',
						element: <UiTesting />,
						action: UiTestingAction,
						loader: UiTestingLoader,
					},
					{
						path: 'overdue',
						element: <UiTesting />,
						action: UiTestingAction,
						loader: UiTestingLoader,
					},
					{
						path: 'todayy',
						element: <Today />,
					},
				],
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
