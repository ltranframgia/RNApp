import axios from 'axios';

const axiosInstance = axios.create();
axiosInstance.defaults.timeout = 30000;


const request = async (method, url) => {
    console.log('request ====================== ')
    return axiosInstance({
        method,
        url
    });
}

export default { request }