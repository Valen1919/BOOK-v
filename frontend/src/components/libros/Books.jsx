import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import endPoints from "../../services/api";
import Pagination from "../paginacion/Pagination";

const Books = () => {
  const [libros, setLibros] = useState([]);
  const [page, setPage] = useState(
    parseInt(localStorage.getItem("page") ?? "1")
  );
  const [size, setSize] = useState(6);
  const [totalPages, setTotalPages] = useState(1);

  const getLibros = async (page, size) => {
    const response = await axios.get(endPoints.libro.getLibros, {
      params: {
        page,
        size,
      },
    });
    return response.data;
  };

  useEffect(() => {
    validarPagina();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    getLibros(page, size).then((data) => {
      setLibros(data.response.books);
      setTotalPages(data.response.totalPages);
    });
  }, [page, size]);

  const validarPagina = () => {
    localStorage.setItem("page", page);
  };

  return (
    <div className="bg-white w-auto min-h-screen p-4 sm:p-8">
      <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-4 sm:mx-8 md:mx-10 lg:mx-12 xl:mx-20">
        {libros.length > 0 ? (
          <>
            {libros?.map((book) => (
              <div
                key={book.book_id}
                className="bg-blue-950 rounded-lg shadow-lg p-4 mb-4"
              >
                <Link
                  to={`/libro/${book.book_id}`}
                  state={{ from: window.location.pathname }}
                >
                  <img
                    src={book.book_frontPage}
                    alt={book.book_title}
                    className="h-48 w-auto object-cover rounded-t-lg mb-4"
                  />
                </Link>
                <div>
                  <p className="text-md sm:text-lg font-semibold text-white mb-2">{book.book_title}</p>
                  <p className="text-gray-300 text-sm">{book.author && book.author.author_name}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-center text-gray-500">No hay libros para mostrar</p>
        )}
      </div>
      <Pagination page={page} setPage={setPage} className="mx-auto my-4" />
    </div>
  );
};

export default Books;
