import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import endPoints from "../../services/api";

const Books = () => {
  const [libros, setLibros] = useState([]);
  //const [active, setActive] = useState(false);

  async function getLibros() {
    try {
      const response = await axios.get(endPoints.libros.getLibros);
      setLibros(response.data);
    } catch (error) {
      console.error("Error al obtener las anchetas:", error);
    }
  }

  useEffect(() => {
    getLibros();
  }, []);
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {libros.map((book, book_id) => (
          <div key={book_id} className="bg-blue-950 p-4 rounded-lg shadow-lg">
            <Link to={`/libro/${book.book_id}`}><img
              src={book.book_frontPage}
              alt={book.book_tittle}
              className="w-full h-48 object-cover rounded-t-lg"
            /></Link>
            <div className="p-4">
              <p className="text-xl text-white">{book.book_tittle

              }</p>
              <p className="text-gray-300">{book.autor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;