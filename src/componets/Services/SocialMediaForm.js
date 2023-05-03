import React, { useState } from 'react';

function SocialMediaForm() {
    const [socialMediaFields, setSocialMediaFields] = useState([
        { id: 1, name: "socialMedia1", label: "Usuario o enlace en Red Social #1" },
    ]);
    const [values, setValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleAddField = () => {
        const id = socialMediaFields.length + 1;
        const name = `socialMedia${id}`;
        const label = `Usuario o enlace en Red Social #${id}`;
        setSocialMediaFields([...socialMediaFields, { id, name, label }]);
    };

    const handleRemoveField = () => {
        const lastField = socialMediaFields[socialMediaFields.length - 1];
        setSocialMediaFields(socialMediaFields.filter(field => field.id !== lastField.id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values); // Aquí puedes hacer algo con los valores
    };

    return (
        <form>
            {socialMediaFields.map((field) => (
                <div key={field.id} className="mt-6">
                    <label
                        htmlFor={field.name}
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        {field.label}
                    </label>
                    <div className="mt-2.5">
                        <select
                            id="redesSociales"
                            name="redesSociales"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                            <option value="" disabled selected>Selecciona una red social</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="TikTok">TikTok</option>
                        </select>
                    </div>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name={field.name}
                            id={field.name}
                            autoComplete="off"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={handleAddField}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Agregar campo
            </button>

            <button
                type="button"
                onClick={handleRemoveField}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Eliminar campo
            </button>
        </form>
    );
}

export default SocialMediaForm;
