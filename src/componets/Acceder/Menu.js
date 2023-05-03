import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/img/background.webp';

function Menu() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="max-w-md w-full">
                <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="text-center font-medium text-2xl mb-6">Iniciar sesión</div>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Correo electrónico
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="ejemplo@correo.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Contraseña
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="**********"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Iniciar sesión
                            </button>
                            <Link
                                to="/olvido-contrasena"
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        <div className="flex flex-col mt-4">
                            <Link
                                to="/registro"
                                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Registro
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Menu;