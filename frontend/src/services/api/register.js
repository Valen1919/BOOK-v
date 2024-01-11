import axios from 'axios';
import endPoints from '.';

const postregister = async (body) => {
  const config = {
    headers: {
      accept: '//',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.usuario.postRegister, body, config);
  return response.data;

};

export { postregister };