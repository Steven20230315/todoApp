import axios from 'axios';

const customFetch = axios.create({
	baseURL: 'https://main.d2eihi72apprns.amplifyapp.com/api/v1',
});

export default customFetch;
