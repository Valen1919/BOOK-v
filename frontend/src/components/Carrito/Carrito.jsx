import React, { useState, useEffect, useRef } from 'react';
import { BiCartAdd } from "react-icons/bi";

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

const ShoppingCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const cartRef = useRef(null);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = () => {
    // Datos quemados para probar el carrito
    const newItem = {
      id: cartItems.length + 1,
      title: "Libro de Prueba",
      author: "Autor de Prueba",
      price: 19.99
    };

    setCartItems([...cartItems, newItem]);
  };

  useClickOutside(cartRef, () => {
    setIsCartOpen(false);
  });

  return (
    <div className="relative">
      <button
        className="text-blue-900 p-2 rounded-full"
        onClick={handleCartToggle}
      >
        <BiCartAdd />
      </button>

      {isCartOpen && (
        <div ref={cartRef} className="absolute top-0 right-0 bg-white p-4 border shadow w-64 md:w-96 mb-1">
          <h3 className="text-xl mb-4">Carrito de Compras</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-2">
              <span>{`${item.title} - ${item.author} - ${item.price} €`}</span>
            </div>
          ))}
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
