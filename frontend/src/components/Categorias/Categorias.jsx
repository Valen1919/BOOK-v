import React from 'react';
import "./Categorias.css"

function Categorias() {
  // Aquí puedes definir las categorías o importarlas desde una fuente de datos.
  const categorias = ['Romance', 'Misterio', 'Novela','Romance', 'Misterio', 'Novela','Romance', 'Misterio', 'Novela'];

  return (
    <div className="sidebar absolute">
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>{categoria}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
