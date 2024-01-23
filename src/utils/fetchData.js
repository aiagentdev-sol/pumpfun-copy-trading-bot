// utils/fetchData.js
import axios from 'axios';
import NextCors from 'nextjs-cors';
import axiosInstance from './axiosInstance';
// export const fetchPopularCollections = async () => {
//   try {
//     const response = await axios.get('https://api-mainnet.magiceden.dev/v2/marketplace/popular_collections?timeRange=1d');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };



export const fetchHotCollections = async () => {
  try {
    const response = await axiosInstance.get('tokenlist?sort_by=v24hUSD&sort_type=desc'); // Note: Removed the base URL prefix as it's set in the instance
    return response.data;
  } catch (error) {
    console.error('Error fetching token list data:', error);
    throw error;
  }
};
