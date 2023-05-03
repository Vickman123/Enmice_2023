import React from 'react';
import { Link } from 'react-router-dom';

function MenuRegistro() {
    return (
        <div>
            <br />
            <h1 className="text-center mt-10 text-3xl font-semibold">Escoja su registro</h1>
            <div className="flex justify-center mt-10">
                <Link to="/RegisAsis">
                    <div className="bg-pink-500 hover:bg-pink-700 rounded-lg p-10 m-5 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-72 h-48">
                        <h2 className="text-white text-center font-semibold text-xl">Registro Asistente</h2>
                    </div>
                </Link>
                <Link to="/RegisCli">
                    <div className="bg-pink-500 hover:bg-pink-700 rounded-lg p-10 m-5 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-72 h-48">
                        <h2 className="text-white text-center font-semibold text-xl">Registro Equipo Participante</h2>
                    </div>
                </Link>
                <Link to="/registro-voluntario">
                    <div className="bg-pink-500 hover:bg-pink-700 rounded-lg p-10 m-5 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-72 h-48">
                        <h2 className="text-white text-center font-semibold text-xl">Registro de Voluntario</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MenuRegistro;