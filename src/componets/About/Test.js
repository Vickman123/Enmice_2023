

const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  
  export default function Test() {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-full lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://media.licdn.com/dms/image/C5603AQHHvhYsthvQ_w/profile-displayphoto-shrink_800_800/0/1561312245579?e=2147483647&v=beta&t=fsskj1zy_vJoLcV577j8kVb02lFB7bOOemBE2ImqKiU"
                  alt=""
                />
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-5" />
                <div className="relative px-8">
                  <div>
                    <img
                      className="h-12"
                      src="https://enmice.mx/wp-content/uploads/2022/03/Pagina-web-05-300x300.png"
                      alt="Workcation"
                    />
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        "La ciencia espacial cambiara la historia de la humanidad".
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-indigo-200"> Ing. Ramón Omar Córdova Muñoz, Director General de ENMICE.</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Antecedetes ENMICE.
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                Inspirados por la capacidad, el desarrollo tecnológico y científico que existe en México en materia
aeroespacial, así como las nuevas oportunidades para nuestro país en el sector aeronáutico, a partir
del esfuerzo académico con el apoyo de instancias públicas y privadas, es que se realiza el 5º
Concurso Nacional de Pico-Satélites Educativos CANSAT en octubre del 2019, en el cual por primera vez en México se emplearon vehículos lanzadores (cohetes) para elevar dichos dispositivos a una
determinada altitud cumpliendo con parámetros particulares de la misión. Dada tal experiencia es
que se decide emprender una iniciativa de la cohetería experimental bajo un enfoque de competencia abierta a todo aquel interesado en mostrar sus desarrollos.
                </p>
                <p className="text-base leading-7">
                Por lo anterior, en mayo de 2021 se realizó la primera edición del ENMICE, en la ciudad de Tijuana,
Baja California, con sede en la Universidad Autónoma de Baja California (UABC) en la Facultad de
Ciencias de la Ingeniería y Tecnología (FCITEC), Campus Valle de las Palmas, con el apoyo de instituciones públicas y privadas como la Agencia Espacial Mexicana (AEM) y el Cluster Aeroespacial de
Baja California, la Federación Mexicana de la Industria Aeroespacial (FEMIA), la empresa Buró de
Ingeniería y Diseño 360 (BID360 Aeroespacial), entre otras, que colaboraron para realizar este
evento, el primero de su tipo en el país, habiendo logrado una asistencia sobresaliente de participantes representando a diferente entidades educativas de diversos estados del país.
                </p>
                <p className="text-base leading-7">
                  RENMICE ha logrado impactar de manera positiva al sector aeronáutico a nivel nacional, al haber convocado a más de 200 espectadores de cuando menos 7 estados y 6 universidades del interior del
país. Durante el evento se realizaron más de 20 lanzamientos y 15 certificaciones en cohetería de
alta potencia otorgadas por la Tripoli Rocketry Association Inc., con sede en México, misma que
brindó apoyo técnico a los participantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }