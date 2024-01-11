import axios from 'axios';
import endPoints from '.'

const sendEmail = async (bookId) => {
    const response = await axios.post(endPoints.email.sendemail, {bookId}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
  };

export { sendEmail };
