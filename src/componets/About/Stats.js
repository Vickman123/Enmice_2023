import Rocket4 from 'assets/img/Rocket.jpg'

const stats = [
  { id: 1, name: 'Asistentes', value: '+1000' },
  { id: 2, name: 'Patrocinadores', value: '+15' },
  { id: 3, name: 'Aliados y colaboradores', value: '+12' },
  { id: 4, name: 'Horas de actividades', value: '+100' },
  { id: 5, name: 'Lanzamientos', value: '+25' },
  { id: 6, name: 'Universidades y estados participantes', value: '+15' },
  { id: 7, name: 'Equipos y cohetes participantes', value: '+35' },
]

export default function Example() {
  return (
    <div className="relative bg-white">
      <img
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src={Rocket4}
        alt=""
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-8 text-indigo-600">"Siempre es difícil hablar del futuro, pero no cabe duda de que el espacio es lo que va a definir el futuro de la humanidad" - Yuri Gagarin,</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            "ENMICE: Consolidando su posición como referente de la cohetería experimental en México"
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Generalia
                De manera general, entre sus dos ediciones
                (2021, Baja California y 2022, Jalisco), ENMICE
                ha logrado posicionarse con la
                siguiente numeralia:

            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                  <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}