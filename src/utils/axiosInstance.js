import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://public-api.birdeye.so/public/', // Base URL for your requests
  headers: {
    'X-API-KEY': 'e31b600b9886411ab67f63ceab5e0801', // Add your API key here
    'Content-Type': 'application/json' // Set the content type if needed
  }
});

export default axiosInstance;