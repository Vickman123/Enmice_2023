
import {NavLink, Link} from 'react-router-dom'
import Best from 'assets/img/Best.jpg'
import Comunicacion from 'assets/img/Comunicacion.jpg'
import Unisec from 'assets/img/Unisec.jpg'

export default function Example() {
    return (
      <div>
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Educacion Aeroespacial.
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              “El espacio es como el océano, el mar, es como estar en el océano. Lo tienes todo alrededor de ti.” - Michael Pitt
              </p>
              <p className="mt-4 text-xl text-gray-500">
                La ciencia espacial al alcance de todos.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://yt3.googleusercontent.com/89gaFmwyUMuyjghw-1dtoI25wEtEgA7q1Ewdv4hWTm4WDXZdiekCiRIpd-POk_SgWuG6lIUr=s176-c-k-c0x00ffffff-no-rj"
                            alt=""
                            className="h-full w-full object-cover object-center"
                            href = "https://www.gob.mx/aem"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <a href="https://es.wikipedia.org/wiki/Wikipedia:Portada">
                            <img
                              src={Unisec}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://umg.edu.mx/portal/wp-content/uploads/2017/02/logo-universidad-marista.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://pbs.twimg.com/profile_images/1543955703202807810/DA9LMVBL_400x400.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://www.enroll-u.com/_i/1/7/7/4ecd9be0-eec4-11e9-9992-0231b47980f0.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Comunicacion}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Best}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
      
    )
  }


  /*

<a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Mas informacion
                </a>

  */