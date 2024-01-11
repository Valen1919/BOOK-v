import React from 'react';
import './Categoriasimg.css';

const Categoriasimg = () => {
  const categorias = [
    {
      nombre: 'Romance',
      imagenURL: 'https://i.pinimg.com/originals/1e/9f/ba/1e9fba3089eb3d5c1f2ebc7f379d62d8.jpg',
    },
    {
      nombre: 'Terror',
      imagenURL: 'https://3.bp.blogspot.com/-9cbEF6kHoJ4/VLusvATudOI/AAAAAAAABcs/yZkVXaHViuA/s1600/9788467574142.jpg',
    },
    {
      nombre: 'Aventura',
      imagenURL: 'https://www.aventurazas.com/sites/default/files/recursos/libros-aventuras.jpg',
    },
    {
      nombre: 'Ciencia ficción',
      imagenURL: 'https://www.mejoreslibros.top/wp-content/uploads/2021/03/La-Cupula-Libro-1338x2048.jpg',
    },
    {
      nombre: 'Fantasía',
      imagenURL: 'https://i.pinimg.com/originals/1e/9f/ba/1e9fba3089eb3d5c1f2ebc7f379d62d8.jpg',
    },
    {
      nombre: 'Romance',
      imagenURL: 'https://i.pinimg.com/originals/1e/9f/ba/1e9fba3089eb3d5c1f2ebc7f379d62d8.jpg',
    },
    {
      nombre: 'Terror',
      imagenURL: 'https://3.bp.blogspot.com/-9cbEF6kHoJ4/VLusvATudOI/AAAAAAAABcs/yZkVXaHViuA/s1600/9788467574142.jpg',
    },
    {
      nombre: 'Aventura',
      imagenURL: 'https://www.aventurazas.com/sites/default/files/recursos/libros-aventuras.jpg',
    },
    {
      nombre: 'Ciencia ficción',
      imagenURL: 'https://www.mejoreslibros.top/wp-content/uploads/2021/03/La-Cupula-Libro-1338x2048.jpg',
    },
    {
      nombre: 'Fantasía',
      imagenURL: 'https://i.pinimg.com/originals/1e/9f/ba/1e9fba3089eb3d5c1f2ebc7f379d62d8.jpg',
    }
    // Agrega más categorías según sea necesario
  ];
  return (
    <div className="categorias">
      <div className="categorias-row">
        {categorias.map((categoria, index) => (
          <div key={index} className="categoria-card">
            <div className="categoria-image">
              <img
                src={categoria.imagenURL}
                alt={categoria.nombre}
                className="imagen-categoria"
              />
            </div>
            <div className="categoria-info">
              <h3>{categoria.nombre}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoriasimg;