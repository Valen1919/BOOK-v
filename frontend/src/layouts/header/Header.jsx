import React, { useState } from "react";
import { RiSearch2Line, RiUser3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCart from "../../components/Carrito/Carrito";
import Tienda from "../../components/Tienda/Tienda";

const Header = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Mostrar el modal de confirmación
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    // Realizar la acción de cerrar sesión
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    // Ocultar el modal de confirmación
    setShowLogoutModal(false);

    // Redirigir a la página de inicio de sesión
    navigate("/login");
  };

  const handleCancelLogout = () => {
    // Ocultar el modal de confirmación
    setShowLogoutModal(false);
  };

  // Comprobar si el usuario está autenticado
  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <header>
      {/* Tabs */}
      <nav className="text-gray-900 flex items-center justify-center md:justify-center md:gap-8 border-b mb-6 mt-10 w-full md:w-3/4 lg:w-full">
        <Link to="/">
          <img
            src="https://candyshop.publitin.net/redetron/wp-content/uploads/2023/09/BOOKVERSE-1.png"
            alt=""
            className="h-24 w-36"
          />
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/categorias" className="nav-link">
            Categorías
          </Link>
          <Link to="/MisLibros" className="nav-link">
            Mis libros
          </Link>
          <Link to="/Tienda" className="nav-link">
              Tienda
            </Link>
          <div className="nav-link">
            {isLoggedIn ? (
              <button onClick={handleLogout}>Cerrar Sesión</button>
            ) : (
              <Link to="/login">
                <RiUser3Fill className="text-2xl text-blue-950" />
              </Link>
            )}
          </div>
        </div>
        <ShoppingCart />
        <form className="ml-10">
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
            <input
              type="text"
              className="bg-blue-950 w-full py-3 pl-10 pr-32 rounded-lg text-white outline-none"
              placeholder="Search"
            />
          </div>
        </form>
      </nav>

      {/* Modal de confirmación de cierre de sesión */}
      {showLogoutModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <p>¿Estás seguro de que deseas cerrar sesión?</p>
            <div className="flex justify-end mt-4">
              <button className="mr-2" onClick={handleCancelLogout}>
                Cancelar
              </button>
              <button onClick={handleConfirmLogout}>Aceptar</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
