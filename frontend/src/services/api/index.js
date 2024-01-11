const API = import.meta.env.VITE_API_URL;

const endPoints = {

    usuario: {
        postRegister: `${API}/api/login/register`,
        getLogin: `${API}/api/login/login`,
        putUser: `${API}/api/profile/user`

    },
    libro: {
        getLibros: `${API}/api/home/books`,
        getLibro: (book_id) => `${API}/api/home/books/${book_id}`,
        postLibro: `${API}/api/profile/book`
    },
    email: {
        sendemail: `${API}/api/home/sendemail`
    }

};

export default endPoints;