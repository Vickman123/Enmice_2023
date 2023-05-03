
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ServerIcon,
    },
  ]
  
  export default function Example() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">“Tenemos que fallar aquí abajo, para no fallar allí arriba.” - Ryan Gosling </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ENMICE en la historia del desarollo espacial de Mexico</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Un evento para todo el mundo.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://a21.com.mx/sites/default/files/field/image/competencia%20cohetes%20BC.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                Inspirados por la capacidad, el desarrollo tecnológico y científico que existe en México en materia
aeroespacial, así como las nuevas oportunidades para nuestro país en el sector aeronáutico, a partir
del esfuerzo académico con el apoyo de instancias públicas y privadas, es que se realiza el 5º
Concurso Nacional de Pico-Satélites Educativos CANSAT en octubre del 2019, en el cual por primera vez en México se emplearon vehículos lanzadores (cohetes) para elevar dichos dispositivos a una
determinada altitud cumpliendo con parámetros particulares de la misión. Dada tal experiencia es
que se decide emprender una iniciativa de la cohetería experimental bajo un enfoque de competencia abierta a todo aquel interesado en mostrar sus desarrollos.

                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">ENMICE 2021:  </strong>Por lo anterior, en mayo de 2021 se realizó la primera edición del ENMICE, en la ciudad de Tijuana,
Baja California, con sede en la Universidad Autónoma de Baja California (UABC) en la Facultad de
Ciencias de la Ingeniería y Tecnología (FCITEC), Campus Valle de las Palmas, con el apoyo de instituciones públicas y privadas como la Agencia Espacial Mexicana (AEM) y el Cluster Aeroespacial de
Baja California, la Federación Mexicana de la Industria Aeroespacial (FEMIA), la empresa Buró de
Ingeniería y Diseño 360 (BID360 Aeroespacial), entre otras, que colaboraron para realizar este
evento, el primero de su tipo en el país, habiendo logrado una asistencia sobresaliente de participantes representando a diferente entidades educativas de diversos estados del país.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Desarollo tecnologico espacial: </strong> ENMICE ha logrado impactar de manera positiva al sector aeronáutico a nivel nacional, al haber convocado a más de 200 espectadores de cuando menos 7 estados y 6 universidades del interior del
país. Durante el evento se realizaron más de 20 lanzamientos y 15 certificaciones en cohetería de
alta potencia otorgadas por la Tripoli Rocketry Association Inc., con sede en México, misma que
brindó apoyo técnico a los participantes.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">ENMICE 2023</strong> El futuro del Encuentro Mexicano de Ingeniería en Cohetería Experimental (ENMICE) es muy prometedor. 
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                La edición del 2023 ha demostrado el gran potencial que tiene México en el sector aeroespacial y la importancia que tiene la colaboración entre los ingenieros y científicos mexicanos en este ámbito.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">ENMICE 2023 es la plataforma donde el futuro de la ingeniería de cohetería experimental se encuentra con la innovación y la colaboración, 
                para impulsar el desarrollo aeroespacial de México y alcanzar nuevas alturas en el mundo.</h2>
                <p className="mt-6">
                El ENMICE ha permitido que los expertos en cohetería experimental compartan sus investigaciones, conocimientos y experiencia para impulsar el desarrollo de esta disciplina en México. Además, el evento ha generado un espacio para la innovación y el intercambio de ideas,
                 lo que resultará en el surgimiento de nuevos proyectos y avances tecnológicos en el futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }