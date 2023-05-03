import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Invite team members',
    description: 'Promover, inspirar, impulsar y acelerar la nueva era espacial mexicana.',
  },
  { name: 'List view', 
    description: 'Conducir encuentros académicos, científico-tecnológicos y de negocios para impulsar la inversión el emprendimiento y el desarrollo de tecnologías que impacten positivamente en el desarrollo de nuevas tecnologías aeroespaciales.' },
  {
    name: 'Keyboard shortcuts',
    description: 'Reunir a los equipos de cohetería experimental conformados por estudiantes, investigadoras, investigadores, profesionales y entusiastas de todo el país con el interés de mostrar sus desarrollos más sobresalientes dentro de un ambiente de competencia y libre intercambio de ideas.',
  },
  { name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600">ENMICE se conforma de cinco principales objetivos: </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Innovacion, crecimiento, mejora continua</p>
          <p className="mt-4 text-lg text-gray-500">
            El objetivo inicial de ENMICE es formar tenologia espacial mexicana enfocado a la innovacion y esfuerzo de multiples 
            personas visionarias.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}