import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./VerDetalle.css"
import endPoints from '../../services/api';
import axios from 'axios';

function LibroDetalle() {
    const { book_id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(
          endPoints.libro.getLibros(book_id)
        );
        console.log(response);
        setBook(response.data);
      } catch (error) {
        console.error("Error al obtener los detalles de la ancheta:", error);
      }
    }

    fetchBook();
  }, [book_id]);

  if (!book) {
    return <div>Cargando...</div>;
  }


  return (
    <>
      <article className='bg-white w-full min-h-screen'>
        <div>

          <figure className='bg-blue-950 p-4 rounded-lg shadow-lg flex flex-row'>
            
            <img src={libro.img} alt={libro.titulo}  className='h-72'/>
            <h2 className='text-white ml-20'>{libro.titulo}</h2>
              <p className='text-xl text-white pt-6 '>{libro.descripcion}</p>
          </figure>
        </div>
      </article>
    </>
  );
}

export default LibroDetalle;
