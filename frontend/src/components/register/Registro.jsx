import axios from "axios";
import { useState, useEffect } from "react";
import endPoints from "../../services/api";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";

function Registro() {
  const { serialize } = useForm(); // Llama al hook useForm para obtener la función serialize
  const navigate = useNavigate();
  const [register, setRegister] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false); // Ejemplo: estado para verificar si el registro se completó
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para mostrar un mensaje de confirmación

  const registerForm = async (ev) => {
    ev.preventDefault();
    const formData = serialize(ev.target); // Utiliza serialize para obtener los datos del formulario
    console.log(formData);

    try {
      const response = await axios.post(
        endPoints.usuario.postRegister,
        formData
      );
      setRegister(response.data);
      setIsRegistered(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Verificar si el registro se completó (esto puede depender de tu lógica específica)
    if (isRegistered) {
      // Redirigir al usuario a la página de inicio o a otra página deseada
      navigate("/login");

      // Mostrar un mensaje de confirmación (puedes personalizarlo según tus necesidades)
      setShowConfirmation(true);

      // Después de un tiempo, ocultar el mensaje de confirmación
      setTimeout(() => {
        setShowConfirmation(false);
      }, 5000); // Por ejemplo, ocultar después de 5 segundos
    }
  }, [isRegistered]);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-600">Registrarse</h2>
        </div>
        <form className="mt-4" onSubmit={registerForm} method="post">
          <div className="mb-4">
            <label
              htmlFor="nombres"
              className="block text-gray-700 font-medium"
            >
              Nombres
            </label>
            <input
              name="user_name"
              type="text"
              id="nombres"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nombre Completo"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="apellidos"
              className="block text-gray-700 font-medium"
            >
              Apellidos
            </label>
            <input
              name="user_lastname"
              type="text"
              id="apellidos"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Apellidos"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ciudad" className="block text-gray-700 font-medium">
              Ciudad
            </label>
            <input
              name="user_location"
              type="text"
              id="ciudad"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ciudad"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              name="user_password"
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            {showConfirmation && <div>mensaje de confirmación</div>}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Registrarse
            </button>
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login"> Ingresar </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
