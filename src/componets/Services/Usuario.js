/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Link } from 'react-router-dom';
import SocialMediaForm from './SocialMediaForm';


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    export default function Example() {
        const [agreed, setAgreed] = useState(false)

        return (
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">REGISTRO DE EQUIPO PARTICIPANTE</h2>
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Nombre del equipo</h2>
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Nombre
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        <div className="mt-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Logo del Equipo</h2>
                            <form action="#" method="POST" encType="multipart/form-data">
                                <div>
                                    <label htmlFor="file" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Seleccione un archivo
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="file"
                                            name="file"
                                            id="file"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Subir Archivo
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Nombre de la organizacion</h2>
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                            Nombre de Universidad, institucion, empresa y/o grupo de aficionados
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Ciudad/Provincia</h2>
                        <label htmlFor="state" className="block text-sm font-semibold leading-6 text-gray-900">
                            Estado
                        </label>
                        <div className="mt-2.5">
                            <select
                                id="state"
                                name="state"
                                autoComplete="address-level1"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value="" disabled selected>Selecciona un estado</option>
                                <option value="Aguascalientes">Aguascalientes</option>
                                <option value="Baja California">Baja California</option>
                                <option value="Baja California Sur">Baja California Sur</option>
                                <option value="Campeche">Campeche</option>
                                <option value="Chiapas">Chiapas</option>
                                <option value="Chihuahua">Chihuahua</option>
                                <option value="Coahuila">Coahuila</option>
                                <option value="Colima">Colima</option>
                                <option value="Durango">Durango</option>
                                <option value="Estado de M�xico">Estado de M�xico</option>
                                <option value="Guanajuato">Guanajuato</option>
                                <option value="Guerrero">Guerrero</option>
                                <option value="Hidalgo">Hidalgo</option>
                                <option value="Jalisco">Jalisco</option>
                                <option value="Michoac�n">Michoac�n</option>
                                <option value="Morelos">Morelos</option>
                                <option value="Nayarit">Nayarit</option>
                                <option value="Nuevo Le�n">Nuevo Le�n</option>
                                <option value="Oaxaca">Oaxaca</option>
                                <option value="Puebla">Puebla</option>
                                <option value="Quer�taro">Quer�taro</option>
                                <option value="Quintana Roo">Quintana Roo</option>
                                <option value="San Luis Potos�">San Luis Potos�</option>
                                <option value="Sinaloa">Sinaloa</option>
                                <option value="Sonora">Sonora</option>
                                <option value="Tabasco">Tabasco</option>
                                <option value="Tamaulipas">Tamaulipas</option>
                                <option value="Tlaxcala">Tlaxcala</option>
                                <option value="Veracruz">Veracruz</option>
                                <option value="Yucat�n">Yucat�n</option>
                                <option value="Zacatecas">Zacatecas</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="city" className="block text-sm font-semibold leading-6 text-gray-900">
                            Municipio/Alcaldia
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Nombre de la organizacion</h2>
                            <label htmlFor="street" className="block text-sm font-semibold leading-6 text-gray-900">
                                Calle
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="street"
                                    id="street"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="extNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                                Numero exterior
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="extNumber"
                                    id="extNumber"
                                    autoComplete="address-line2"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="intNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                                Numero interior (opcional)
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="intNumber"
                                    id="intNumber"
                                    autoComplete="address-line3"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="postalCode" className="block text-sm font-semibold leading-6 text-gray-900">
                                Codigo postal
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="postalCode"
                                    id="postalCode"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="municipality" className="block text-sm font-semibold leading-6 text-gray-900">
                                Municipio o alcaldia
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="municipality"
                                    id="municipality"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="city" className="block text-sm font-semibold leading-6 text-gray-900">
                                Ciudad
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="notes" className="block text-sm font-semibold leading-6 text-gray-900">
                                Notas
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="notes"
                                    id="notes"
                                    rows="3"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                    </div> 
                        <br></br>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Organizacion</h2>
                            <label htmlFor="organizationType" className="block text-sm font-semibold leading-6 text-gray-900">
                                Tipo de organizacion
                            </label>
                            <div className="mt-2.5">
                                <select
                                    id="organizationType"
                                    name="organizationType"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    <option value="" disabled selected>Selecciona una opcion</option>
                                    <option value="Estudiantil">Estudiantil</option>
                                    <option value="Universit�ria">Universit�ria</option>
                                    <option value="Investigaci�n y Desarrollo">Investigaci�n y Desarrollo</option>
                                    <option value="Privada">Privada</option>
                                    <option value="Aficionados">Aficionados</option>
                                </select>
                            </div>
                    </div>
                        <br></br>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Proyecto</h2>
                            <label htmlFor="rocketName" className="block text-sm font-semibold leading-6 text-gray-900">
                                Nombre del cohete/proyecto
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="rocketName"
                                    id="rocketName"
                                    autoComplete="off"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <br></br>

                    <div>
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Redes Sociales</h2>

                            <SocialMediaForm />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="enmiceParticipation" className="block text-sm font-semibold leading-6 text-gray-900">
                            Seleccione las ediciones de ENMICE en las que ha participado el equipo
                        </label>
                        <div className="mt-2.5">
                            <label htmlFor="enmice2021" className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="enmice2021"
                                    id="enmice2021"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-gray-900">2021</span>
                            </label>
                            <label htmlFor="enmice2022" className="inline-flex items-center ml-6">
                                <input
                                    type="checkbox"
                                    name="enmice2022"
                                    id="enmice2022"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-gray-900">2022</span>
                            </label>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4"> Contacto principal del equipo</h2>
                        <label htmlFor="contactName" className="block text-sm font-semibold leading-6 text-gray-900">
                            Nombre completo del contacto principal del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="contactName"
                                id="contactName"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="contactEmail" className="block text-sm font-semibold leading-6 text-gray-900">
                            Correo electronico del contacto principal del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="contactEmail"
                                id="contactEmail"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="contactPhone" className="block text-sm font-semibold leading-6 text-gray-900">
                            Telefono del contacto principal del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="tel"
                                name="contactPhone"
                                id="contactPhone"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4"> Contacto alternativo del equipo</h2>
                        <label htmlFor="alternateContactName" className="block text-sm font-semibold leading-6 text-gray-900">
                            Nombre completo del contacto alternativo del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="alternateContactName"
                                id="alternateContactName"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="alternateContactEmail" className="block text-sm font-semibold leading-6 text-gray-900">
                            Correo electronico del contacto alternativo del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="alternateContactEmail"
                                id="alternateContactEmail"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="alternateContactPhone" className="block text-sm font-semibold leading-6 text-gray-900">
                            Telefono del contacto alternativo del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="tel"
                                name="alternateContactPhone"
                                id="alternateContactPhone"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Asesor del equipo    </h2>
                        <label htmlFor="advisorName" className="block text-sm font-semibold leading-6 text-gray-900">
                            Nombre completo del asesor del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="advisorName"
                                id="advisorName"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="advisorEmail" className="block text-sm font-semibold leading-6 text-gray-900">
                            Correo electronico del asesor del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="advisorEmail"
                                id="advisorEmail"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="advisorPhone" className="block text-sm font-semibold leading-6 text-gray-900">
                            Telefono del asesor del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="tel"
                                name="advisorPhone"
                                id="advisorPhone"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Consultor(es) externo del equipo</h2>
                        <label htmlFor="advisorName" className="block text-sm font-semibold leading-6 text-gray-900">
                            Nombre completo del consultor externo del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="advisorName"
                                id="advisorName"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="advisorEmail" className="block text-sm font-semibold leading-6 text-gray-900">
                            Correo electronico del consultor externo del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="advisorEmail"
                                id="advisorEmail"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="advisorPhone" className="block text-sm font-semibold leading-6 text-gray-900">
                            Telefono del consultor externo del equipo
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="tel"
                                name="advisorPhone"
                                id="advisorPhone"
                                autoComplete="off"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="advisorExperience" className="block text-sm font-semibold leading-6 text-gray-900">
                            Campos de experiencia del consultor externo del equipo
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="advisorExperience"
                                id="advisorExperience"
                                rows="3"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="advisorAffiliations" className="block text-sm font-semibold leading-6 text-gray-900">
                            Organizaciones de afiliacion del consultor externo del equipo
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="advisorAffiliations"
                                id="advisorAffiliations"
                                rows="3"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="advisorCertifications" className="block text-sm font-semibold leading-6 text-gray-900">
                            Certificaciones vigentes del consultor externo del equipo
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="advisorCertifications"
                                id="advisorCertifications"
                                rows="3"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Categorias del equipo</h2>
                        <label htmlFor="teamCategory" className="block text-sm font-semibold leading-6 text-gray-900">
                            Categoria de participacion del equipo
                        </label>
                        <div className="mt-2.5">
                            <select name="teamCategory" id="teamCategory" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="">Seleccione una opcion</option>
                                <option value="1.5k metros con un sistema de propulsion solido PCC">1.5k metros con un sistema de propulsion solido PCC</option>
                                <option value="1.5k metros con un sistema de propulsion solido IDE">1.5k metros con un sistema de propulsion solido IDE</option>
                                <option value="1.5k metros con un sistema de propulsion Hibrido o L�quido IDE">1.5k metros con un sistema de propulsion Hibrido o Liquido IDE</option>
                                <option value="3k metros con un sistema de propulsion solido PCC">3k metros con un sistema de propulsion solido PCC</option>
                                <option value="3k metros con un sistema de propulsion solido IDE">3k metros con un sistema de propulsion solido IDE</option>
                                <option value="3k metros con un sistema de propulsion Hibrido o Liquido IDE">3k metros con un sistema de propulsion Hibrido o Liquido IDE</option>
                            </select>
                        </div>
                    </div>
                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-gray-600">
                            Al seleccionar esto, usted acepta nuestra {' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                politica&nbsp;privacidad
                            </a>
                            .
                        </Switch.Label>
                    </Switch.Group>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Registrar Equipo
                    </button>
                </div>
            </form>
        </div>
    )
}