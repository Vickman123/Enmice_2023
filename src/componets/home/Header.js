import { Typewriter } from 'react-simple-typewriter'
import logo_enmice from 'assets/img/Logo.webp'
// 3:35:34

function Header(){

  
    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    
                        <img className="centro"
                        src={logo_enmice}
                        width={300}
                        height={300}
                      />
                    
                </div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span className="text-gray-600">
                      "Bienvenidos al mundo de los sueños"...{' '}
                      <a href="https://www.nasa.gov/" className="font-semibold text-indigo-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                      </a>
                    </span>
                  </div>
                </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight pb-10 sm:text-center sm:text-6xl">
                ENMICE 2023 - <span> </span>
                                          <div className = 'inline-flex' style={{ color: '#c63782', fontWeight: 'bold' }} >
                                              <Typewriter
                                                words={['Espacial', 'Cientifico', 'Cultural', 'Social', 'Innovador']}
                                                loop={0}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                                //onLoopDone={handleDone}
                                                //onType={handleType}
                                              />
                                          </div>
                </h1>
                  <h1 className="text-4xl font-bold tracking-tight pb-10 sm:text-center sm:text-3xl">
                  El evento y competencia líder de cohetería experimental en México

                  </h1>
                
                <p className="mt-6 text-lg leading-8 text-black-600 sm:text-center">
                "La exploración espacial es un salto gigante para la humanidad, un paso adelante hacia la comprensión de nuestro universo y hacia nuestro propio destino como especie."   -   Neil Armstrong.
                </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    ENMICE es el evento mexicano que ofrece a estudiantes, investigadores, empresas, universidades
                    o entusiastas que se desarrollan en el campo de la cohetería experimental la oportunidad de
                    exponer sus proyectos en un ambiente de conferencias, talleres y networking con representantes de
                    la industria aeroespacial mexicana, la academia y el gobierno, a fin de promover el desarrollo de
                    capital humano de alta especialidad en este sector y promover las tecnologías aeroespaciales en
                    México.
                    El evento culmina con la exhibición y competencia de lanzamientos de vehículos lanzadores
                    desarrollados por los equipos participantes siendo estos, la nueva generación de cohetería
                    experimental en México.
                  </p>
                <p className="mt-6 text-lg leading-8 text-black-600 sm:text-center">
                Encuentro Mexicano de Ingeniería en Cohetería Experimental 2023
                Lanzamiento de convocatoria T-XX días
                </p>
                    
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                
              </div>
            </div>
          </div>
        </div>
      </main>
    )



}

export default Header


/*
<div className="mt-8 flex gap-x-4 sm:justify-center">
                          <a
                            href="../"
                            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                          >
                            Iniciar
                            <span className="text-indigo-200" aria-hidden="true">
                              &rarr;
                            </span>
                          </a>
                          <a
                            href="../Quienes"
                            className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                          >
                            Mas informacion
                            <span className="text-gray-400" aria-hidden="true">
                              &rarr;
                            </span>
                          </a>
                    </div>
*/

// Linea de codigo 76

/*
<svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                  <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
*/
