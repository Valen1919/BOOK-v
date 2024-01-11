import axios from 'axios';
import endPoints from './index.js';

const getLibros = async (page, size) => {
  const config = {
    headers: {
      accept: '//',
      'Content-Type': 'application/json',
    },
    params: {
      page,
      size,
    },
  };
  const response = await axios.get(endPoints.libro.getLibros, config);
  console.log(response.data);
  return response.data;
};
const sendBookData = async (bookData) => {
  try {

    const response = await axios.post(endPoints.libro.postLibro, bookData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err) {
    {
      if (err.response) {
        // The server responded with a status code outside of the 2xx range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", err.message);
      }
    }
  }
}
export { getLibros, sendBookData };
