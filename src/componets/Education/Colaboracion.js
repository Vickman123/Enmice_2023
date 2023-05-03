
import { Typewriter } from 'react-simple-typewriter'
import AEM from 'assets/img/AEM.png'
import FEMIA from 'assets/img/FEMIA.png'
import AFAC2 from 'assets/img/AFAC2.jpg'
import Marista from 'assets/img/Marista.png'
import UABC from 'assets/img/UABC.png'
import Hacia from 'assets/img/Hacia.png'
import Baja from 'assets/img/Baja.png'
import BID from 'assets/img/BID.png'
import Sayula from 'assets/img/Sayula.png'
import Ray from 'assets/img/Ray.png'
import Unisec from 'assets/img/Unisec.jpg'
import Mexico from 'assets/img/Mexico.png'
import MiNDPRO from 'assets/img/MiNDPRO.png'


export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
        <a href="https://www.gob.mx/aem">
                  <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src={AEM}
                      alt="Agencia Espacial Mexicana"
                      href = "https://www.gob.mx/aem"
                      width={316}
                      height={96}
                    />
        </a>
        <a href="https://femiamx.com">
                  <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-2"
                      src={FEMIA}
                      alt="FEMIA"
                      href = "https://femiamx.com"
                      width={316}
                      height={96}
                    />
        </a>
        <a href="https://www.gob.mx/afac">
                  <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src={AFAC2}
                      alt="AFAC"
                      href = "https://www.gob.mx/afac"
                      width={100}
                      height={10}
                    />
        </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        
        <a href = "http://www.mindmexico.com/">
                  <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src={MiNDPRO}
                      alt="Equipos Pro"
                      href = "http://www.mindmexico.com/"
                      width={200}
                      height={100}
                    />
        </a>
        
        </div>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <a href="https://umg.edu.mx/portal/">
                  <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src={Marista}
                      alt="Marista"
                      href = "https://umg.edu.mx/portal/"
                      width={158}
                      height={48}
                    />

        </a>
        <a href="https://www.uabc.mx">
                  <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src={UABC}
                      alt="Universidad Autonoma de Baja California"
                      href = "https://www.uabc.mx"
                      width={158}
                      height={48}
                    />
        </a>
        <a href="https://haciaelespacio.aem.gob.mx/revistadigital/">
                  <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src= {Hacia}
                      alt="Hacia el espacio"
                      href = "https://haciaelespacio.aem.gob.mx/revistadigital/"
                      width={158}
                      height={48}
                    />
        </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <a href="https://bid360.mx">
                  <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src={BID}
                      alt="Baja Aeroespace"
                      href = "https://bid360.mx"
                      width={158}
                      height={48}
                    />
        </a>
        <a href="https://www.sayula.gob.mx">
                  <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src={Sayula}
                      alt="Ayuntamiento Sayula"
                      href = "https://www.sayula.gob.mx"
                      width={158}
                      height={48}
                    />
        </a>
        <a href="http://bajaaerospace.org">
                  <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src= {Baja}
                      alt="Baja Aerospace"
                      href = "https://haciaelespacio.aem.gob.mx/revistadigital/"
                      width={158}
                      height={48}
                    />
        </a>
        </div>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src={Ray}
                      alt="Baja Aeroespace"
                      width={158}
                      height={48}
                    />
          <a href="http://www.unisec-global.org">
                      <img
                        className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                        src={Unisec}
                        alt="Ayuntamiento Sayula"
                        href = "https://www.sayula.gob.mx"
                        width={158}
                        height={48}
                      />

          </a>
          <a href="https://www.tripolimexico.org">
                    <img
                      className="col-span-8 max-h-48 w-full object-contain lg:col-span-1"
                      src= {Mexico}
                      alt="Baja Aerospace"
                      href = "https://haciaelespacio.aem.gob.mx/revistadigital/"
                      width={158}
                      height={48}
                    />
          </a>
        </div>
      </div>
    </div>
  )
}