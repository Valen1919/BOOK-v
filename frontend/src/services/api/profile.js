import axios from 'axios';
import endPoints from '.'

//Para obtener los datos del usuario
const getUserData = async () => {
  const response = await axios.get(endPoints.usuario.getLogin, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

// Para enviar la información del usuario
const sendUserData = async (userData) => {
    try {
          
        const response = await axios.put(endPoints.usuario.putUser,userData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        return response.data;
      } catch (err) { {
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
    }}
}

export { getUserData, sendUserData };