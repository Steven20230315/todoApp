export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	try {
		await customFetch.post('/tasks', data);
		toast.success('Task added successfully');
		return redirect('/dashboard');
	} catch (error) {
		toast.error(error?.response?.data.msg);
		return error;
	}
};
