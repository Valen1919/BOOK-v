import axios from 'axios';
import endPoints from '.';

const postLogin = async (body) => {
    const config = {
        headers: {
          accept: '//',
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(endPoints.usuario.postLogin, body, config);
      console.log(response);
      return response.data;

};

export { postLogin};