import axios from 'axios';
import { BASE_URL } from './apiConfig';


const api = axios.create({
	baseURL: `${BASE_URL}`,
	headers: {
		'Content-Type': 'application/json'
	},
})


//request interceptor
api.interceptors.request.use(function (config) {
	console.log("......... api request intercepter.");
	return config;
}, function (error) {
	// Do something with request error
	console.log("......... error occured while api request intercepter.");
	return Promise.reject(error);
});

//response interceptor
api.interceptors.response.use(function (response) {
	console.log("......... api response intercepter.");
	return response;
}, function (error) {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	console.log("......... error occured while api response intercepter.");
	return Promise.reject(error);
});