import { Typewriter } from 'react-simple-typewriter'
// 3:35:34

function Header(){

  
    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Una cuenta regresiva en México hacia el futuro y las estrellas
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                ENMICE - 2023 - Registro   
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Desde el 2021, somos el evento y competencia líder de Cohetería Experimental en México que reúne el talento de la
nueva generación de Rocket Scientists para fomentar, reconocer e incentivar el desarrollo nacional de capital
humano, ciencia y tecnología espacial en materia de vehículos lanzadores experimentales.
ENMICE con el apoyo de sus aliados, colaboradores y patrocinadores, forma parte del esfuerzo para impulsar la
participación y crecimiento de la industria espacial en México. De manera anual, tenemos el compromiso de
promover la cohetería experimental de norte a sur del país. Durante más de 3 días, tendrás acceso a todas las
actividades espaciales que tenemos para ti, harás networking con nuestras invitadas e invitados nacionales e
internacionales y presenciarás los lanzamientos de cohetes experimentales creados por los equipos y empresas que
actualmente construyen el sector espacial en México.

                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                “Si estamos solos en el Universo, seguro sería una terrible pérdida de espacio" - 
Carl Sagan 
                </p>
                <br/>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-3xl">
                ¡Sé parte de la comunidad de ENMICE y la nueva era espacial!   
                </h1>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
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
              </div>
            </div>
          </div>
          
        </div>
      </main>

      
    )



}

export default Header

