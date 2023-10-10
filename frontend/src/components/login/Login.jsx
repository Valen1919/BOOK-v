import React from "react";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-600">Iniciar Sesión</h2>
        </div>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="correoElectronico" className="block text-gray-700 font-medium">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correoElectronico"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Correo Electrónico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contrasena" className="block text-gray-700 font-medium">
              Contraseña
            </label>
            <input
              type="password"
              id="contrasena"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Iniciar Sesión
            </button><Link to="/register"> Registrarme </Link>
            <p>¿No tienes cuenta?</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
