// components/tienda/Tienda.jsx
import React from 'react';
import Book from './Book'; // Asumiendo que tienes un componente Book similar al proporcionado anteriormente
import './Tienda.css'; // Asegúrate de importar tu archivo de estilos CSS

const Tienda = () => {
  const libros = [
    { id: 1, title: 'Libro 1', author: 'Autor 1', price: 19.99, image: 'https://4.bp.blogspot.com/-22jh5KmQugY/V67VgIEfSqI/AAAAAAAAAR8/HI56xICmGQAE1D2TpC_oOi7sOlMnsWQewCLcB/s1600/9788498387544.jpg' },
    { id: 2, title: 'Libro 2', author: 'Autor 2', price: 24.99, image: 'https://http2.mlstatic.com/D_NQ_NP_2X_986175-MLM46494610700_062021-F.jpg' },
    { id: 3, title: 'Libro 3', author: 'Autor 3', price: 25.99, image: 'https://3.bp.blogspot.com/-9cbEF6kHoJ4/VLusvATudOI/AAAAAAAABcs/yZkVXaHViuA/s1600/9788467574142.jpg' },
    { id: 4, title: 'Libro 4', author: 'Autor 4', price: 1.99, image: 'https://www.aventurazas.com/sites/default/files/recursos/libros-aventuras.jpg' },
    { id: 5, title: 'Libro 5', author: 'Autor 5', price: 4.99, image: 'https://www.aventurazas.com/sites/default/files/recursos/libros-aventuras.jpg' },
    { id: 6, title: 'Libro 6', author: 'Autor 6', price: 15.99, image: 'https://www.aventurazas.com/sites/default/files/recursos/libros-aventuras.jpg' },
    // Agrega más libros según sea necesario
  ];

  return (
    <div className="tienda">
      <h1>Tienda de Libros</h1>
      <div className="grid-container">
        {libros.map((libro) => (
          <Book key={libro.id} {...libro} />
        ))}
      </div>
    </div>
  );
};

export default Tienda;
