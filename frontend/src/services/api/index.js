const API = import.meta.env.VITE_API_URL;


const endPoints = {

    usuario: {
        postRegister: `${API}/api/login/register`,
        getLogin: `${API}/api/login/login`

    },
    libro:{
        getlibros:`${API}/api/home/books`
    }

};


export default endPoints;