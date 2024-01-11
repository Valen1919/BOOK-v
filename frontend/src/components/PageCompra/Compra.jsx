import React, { useState, useEffect, useContext, useReducer } from 'react';
import axios from 'axios';
import Carrito from './Carrito';

const ProductContext = React.createContext();

const initialState = {
 productos: [],
 carrito: [],
};

const productReducer = (state, action) => {
 switch (action.type) {
    case 'SET_PRODUCTOS':
      return { ...state, productos: action.payload };
    case 'ADD_TO_CART':
      return { ...state, carrito: [...state.carrito, action.payload] };
    default:
      return state;
 }
};

const PaginaCompra = () => {
 const [state, dispatch] = useReducer(productReducer, initialState);

 useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get('https://api.example.com/products');
        dispatch({ type: 'SET_PRODUCTOS', payload: response.data });
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    obtenerProductos();
 }, []);

 const agregarAlCarrito = (producto) => {
    dispatch({ type: 'ADD_TO_CART', payload: producto });
 };

 return (
    <ProductContext.Provider value={{ state, agregarAlCarrito }}>
      <h1>Productos</h1>
      <div>
        {state.productos.map((producto) => (
          <div key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: {producto.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
      <h1>Carrito</h1>
      <Carrito productos={state.carrito} />
    </ProductContext.Provider>
 );
};

export default PaginaCompra;