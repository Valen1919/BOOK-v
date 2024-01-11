import React, { useState, useEffect, useRef } from 'react';
import "./MisLibros.css" // Importa el archivo de estilos CSS
import { sendBookData } from '../../services/api/books.js'
import { useForm } from "../../hooks";


function MisLibros() {
  const { serializefiles } = useForm();
  const formRef = useRef();
  const [bookData, setBookData] = useState({
    book_title: '',
    book_sypnosis: '',
    photo: null,
    book_frontPage: '',
    book_author: '',
  });
  const [book_title, setBook_title] = useState(bookData.book_title);
  const [book_sypnosis, setBook_sypnosis] = useState(bookData.book_sypnosis);
  const [book_author, setBook_author] = useState(bookData.book_author);
  const [photo, setPhoto] = useState(bookData.photo);
  const [book_frontPage, setBook_frontPage] = useState(bookData.book_frontPage);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Aquí puedes poner la lógica que quieras ejecutar cuando cambie bookData
  }, [bookData]);

  const handleSave = async (ev) => {
    ev.preventDefault();
    console.log(ev.target)
    const formData = serializefiles(ev.target);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error('No token provided');
      }
      const response = await sendBookData(formData);
      if (!response) {
        throw new Error(`HTTP error!`);
      }
      console.log(response)
    } catch (error) {
      console.error("Error al guardar:", error.message);
      if (error.response) {
        console.error("Server error:", error.response.data);
      }
      setError(error.message);
    }
  }


  return (
    <div className="mis-libros-container">
      <form onSubmit={handleSave}>
        <h1>Mis Libros</h1>
        <p>Recuerde subir la imagen en un formato de 240 × 360 píxeles,para una mejor visualización</p>
        <div className="agregar-libro">
          <input
            type="text"
            id="photo"
            name="photo"
          />
          {photo && (
            <img src={URL.createObjectURL(photo)} alt="Portada del libro" />
          )}
          <input
            type="text"
            id='book_title'
            name="book_title"
            placeholder="Titulo del libro"
          />
          <input
            type="text"
            id='book_sypnosis'
            name="book_sypnosis"
            placeholder="Descripcion del libro"
          />
          <input
            type="text"
            id='book_author'
            name="book_author"
            placeholder="Autor del libro"
          />
          <input
            type="text"
            id='book_frontPage'
            name="book_frontPage"
            placeholder="Portada del libro"
          />
        </div>
        <button type='submit'  >
          Agregar Libro
        </button>
      </form >
    </div>
  );
}
export default MisLibros;
