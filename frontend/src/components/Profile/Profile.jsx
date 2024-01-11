import { useState, useEffect } from "react";
import { sendUserData } from "../../services/api/profile";
import axios from "axios";
import { useForm } from "../../hooks";

export default function Profile() {
  const { serializefiles } = useForm();
  const [userData, setUserData] = useState({
    user_name: '',
    user_lastname: '',
    user_email: '',
    photo: null,
    user_profilePhoto: '',
  });
  const [user_name, setUser_name] = useState(userData.user_name);
  const [user_lastname, setUser_lastname] = useState(userData.user_lastname);
  const [user_email, setUser_email] = useState(userData.user_email);
  const [photo, setPhoto] = useState(userData.photo);
  const [user_profilePhoto, setUser_profilePhoto] = useState(userData.user_profilePhoto);
  const [error, setError] = useState(null);

  useEffect(() => {
  }, [userData]);

  const handleSave = async (ev) => {
    ev.preventDefault();
    const formData = serializefiles(ev.target);
    try {
      const token = localStorage.getItem("token");
      //console.log("Token:", token); // Obtener el token almacenado en localStorage
      if (!token) {
        throw new Error('No token provided');
      }
      const response = await sendUserData(formData); // Debes obtener la respuesta antes de verificar su contenido
      if (!response) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(response)
    } catch (error) {
      console.error("Error al actualizar:", error);
      setError(error.message); // Guardar el mensaje de error en el estado
    }
  }

  return (
    <div className="flex justify-center items-center h-screen mt-72 w-screen w-full">

      <form className=" mt-32 w-1/2" onSubmit={handleSave}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-3xl font-semibold leading-7 text-blue-500 items-center justify-center text-center margin-bottom 3rem">
              Perfil
            </h2>
            <p className="mt-10 text-sm leading-6 text-gray-600">
              Esta información se mostrará públicamente, así que tenga cuidado
              con lo que comparte.
            </p>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-blue-900">
              Información Personal
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Utilice una dirección permanente donde pueda recibir correo.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Nombres
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    defaultValue={user_name} // Utiliza los datos del usuario para el valor
                    // Actualiza los datos del usuario cuando el valor cambia
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Apellidos
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    defaultValue={user_lastname} // Utiliza los datos del usuario para el valor

                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={user_email} // Utiliza los datos del usuario para el valor

                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4"></div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-blue-900"
            >
              Foto
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <div className="h-12 w-12 text-gray-300" aria-hidden="true" />
              <input
                type="file"
                id="photo"
                name="photo"
              //autoComplete="photo"
              //onChange={(ev) => setPhoto(ev.target.files[0])} // Actualiza la foto del usuario cuando se selecciona un archivo
              />
            </div>
            {photo && (
              <img src={URL.createObjectURL(photo)} alt="Foto del usuario" />
            )}
          </div>
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-blue-900"
            >
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <div
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Cargar un archivo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">o arrastrar y soltar</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-blue-900">
            Notificaciones
          </h2>
          <div className="mt-10 space-y-10">
            <legend className="text-sm font-semibold leading-6 text-blue-900">
              Correo electrónico
            </legend>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="emailbox"
                  name="emailbox"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="emailbox" className="font-medium text-blue-900">
                  Correo electrónico
                </label>
                <p className="text-gray-500">
                  Ser notificado cuando un candidato@ solicita un prestamo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className=" rounded-md  px-3 py-2 text-sm font-semibold leading-6 text-gray-900  hover:bg-blue-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
