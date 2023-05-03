import { Fragment } from 'react';

const incentives = [
  {
    name: 'Comité Ejecutivo Organizador y de Logística (COL)',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "Encargado de las tareas organizativas y medios necesarios para llevar a cabo la realización de las actividades que integran el evento. Este comité está integrado por miembros del Comité Ejecutivo y voluntarios.",
  },
  {
    name: 'Comité de Ingeniería y Reglamentación (CIR)',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "encargado de la definición, revisión y aplicación para los criterios de evaluación de los aspectos técnicos y de ingeniería que se involucren en las actividades del ENMICE. En esta edición, el CIR está conformado por académicos de la Universidad Marista de Guadalajara y miembros del Comité Ejecutivo del evento.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Organización
            </h2>
            <p className="mt-4 text-gray-500">
              El Encuentro Mexicano de Ingeniería en Cohetería Experimental (ENMICE) se conforma de la siguiente manera:
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3 justify-items-center">
            {incentives.map((incentive) => (
              <Fragment key={incentive.name}>
                <div className="sm:flex lg:block mx-auto">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}