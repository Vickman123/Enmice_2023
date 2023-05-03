import React from 'react';

function Acceder() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full">
                <div className="text-center font-medium text-2xl mb-6">Iniciar sesi&oacute;n</div>
                <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Correo electr&oacute;nico
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
                                Contrase&ntilde;a
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
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Iniciar sesi&oacute;n
                            </button>
                            <a
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="#"
                            >
                                &iquest;Olvidaste tu contrase&ntilde;a?
                            </a>
                        </div>
                    </form>
                </div>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2023 ENMICE. Todos los derechos reservados.
                </p>
            </div>
        </div>
    );
}

export default Acceder;