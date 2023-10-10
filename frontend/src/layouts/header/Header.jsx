import React, { useState } from "react";
import { RiSearch2Line, RiUser3Fill,RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Categorias from "../../components/Categorias/Categorias";
import "./Header.css"


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    
     <header>



{/* Tabs */}
<nav className="text-gray-900 flex items-center justify-center md:justify-center md:gap-8 border-b mb-6 mt-10">
<img src="https://candyshop.publitin.net/redetron/wp-content/uploads/2023/09/BOOKVERSE-1.png" alt="Logo"  className="w-36 h-30" />

<Link to={"7categorias"}
onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}>
      
      <RiMenuLine className="text-black" />
        {isDropdownOpen && (
          <div>
            <Categorias/>
          </div>
        )}
        </Link>
        <div className="flex space-x-4">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="/categorias" className="nav-link">
          Categorías
        </Link>
        <Link to="/solicitudes" className="nav-link">
          Solicitudes
        </Link>
        <Link to="/libros" className="nav-link">
          Mis libros
        </Link>
        <Link to="/perfil" className="nav-link">
          Perfil
        </Link>
      </div>
    
    <Link to={"/login"}
        
        className="py-4 relative ml-10"
        
      >
      <RiUser3Fill/>
      </Link>
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
    </header>
    </>
  );
};


export default Header;