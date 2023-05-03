import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react';

function RegistroAsis() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correoElectronico: '',
    telefono: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Aquí se puede agregar la lógica para enviar los datos del formulario al servidor
  };

  return (
    <div className="max-w-md mx-auto">
      <br></br><br></br>
      <h1 className="text-3xl font-bold mb-4">Registro Asistentes</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-medium mb-1">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apellidoPaterno" className="block font-medium mb-1">
            Apellido Paterno:
          </label>
          <input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            value={formData.apellidoPaterno}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apellidoMaterno" className="block font-medium mb-1">
            Apellido Materno:
          </label>
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            value={formData.apellidoMaterno}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="correoElectronico" className="block font-medium mb-1">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="correoElectronico"
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block font-medium mb-1">
            Teléfono:
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
          />
        </div>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Pagar
        </button>
      </form>
    </div>
  );
}

export default RegistroAsis;