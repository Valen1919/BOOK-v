import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./VerDetalle.css";
import endPoints from "../../services/api";
import { sendEmail } from "../../services/api/email.js"
import axios from "axios";

function LibroDetalle() {
  const { book_id } = useParams();
  const navigate = useNavigate();
  //const location = useLocation();
  //const from = location.state?.from;
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(endPoints.libro.getLibro(book_id));
        setBook(response.data.book);
      } catch (error) {
        console.error("Error al obtener los detalles del libro:", error);
      }
    }
    fetchBook();
  }, [book_id]);

  const solicitarLibro = async () => {
    console.log(localStorage);
    try {
      const response = await sendEmail(book_id);
      console.log(response)
      alert('solicitud  enviada');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      alert('Error al enviar el correo electrónico');
    }
  };

  return (
    <>
      <article className="bg-white w-full sm:w-auto min-h-screen">
        <div className="card-detail--container">
          <figure className="bg-blue-950 p-4 rounded-lg shadow-lg flex flex-row">
            <img
              src={book?.book_frontPage}
              alt={book?.book_title}
              className="w-full sm:w-1/2"
            />
            <div className="flex flex-col">
              <h2 className="text-center sm:text-left text-white text-3xl">
                {book?.book_title}
              </h2>
              <p className="text-center sm:text-left text-xl text-white pt-6 text-center ml-10">
                {book?.book_sypnosis}
              </p>
            </div>
          </figure>
          <div className="flex justify-between">
            <Button
              variant="outline-primary"
              className="w-auto sm:w-auto my-button"
              onClick={() => navigate(-1)}
            >
              Regresar
            </Button>
            <button
              onClick={solicitarLibro}>
              Solicitar{" "}
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default LibroDetalle;
