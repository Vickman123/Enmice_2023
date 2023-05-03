import Steren from  'assets/img/Steren.png';
import UDEG from 'assets/img/UDEG.png';
import SSC from 'assets/img/SSC.png';
import Ans from 'assets/img/Ans.png';
import RedCola from 'assets/img/RedCola.png';
import BID from 'assets/img/BID.png';
import Best from 'assets/img/Best.jpg';
import Sidral from 'assets/img/Sidral.png';
import Agua from 'assets/img/Agua.png';
import Craft from 'assets/img/Craft.png';
import Hero from 'assets/img/Hero.png';
import OLEAN from 'assets/img/OLEAN.png';
import Era from 'assets/img/Era.png';
import Muebles from 'assets/img/Muebles.png';
import Hadron from 'assets/img/Hadron.png';

export default function Patron1() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-lg font-semibold leading-8 text-gray-900">
          Con la confianza de los equipos más innovadores del mundo
          </h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
            <div className="logo-container">
              <a href="https://www.steren.com.mx">
                <img
                  className="logo"
                  src={Steren}
                  alt="Transistor"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://www.udg.mx">
                <img
                  className="logo"
                  src={UDEG}
                  alt="Reform"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://www.grupossc.com">
                <img
                  className="logo"
                  src={SSC}
                  alt="Tuple"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://www.ansys.com">
                <img
                  className="logo"
                  src={Ans}
                  alt="SavvyCal"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://redcola.mx">
                <img
                  className="logo"
                  src={RedCola}
                  alt="Transistor"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://bid360.mx">
                <img
                  className="logo"
                  src={BID}
                  alt="Reform"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://www.inbest.cloud">
                <img
                  className="logo"
                  src={Best}
                  alt="Tuple"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://www.agacentro.com">
                <img
                  className="logo"
                  src={Sidral}
                  alt="Transistor"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://aguaskarch.com">
                <img
                  className="logo"
                  src={Agua}
                  alt="Reform"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://craftaviacenter.com">
                <img
                  className="logo"
                  src={Craft}
                  alt="Tuple"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://www.herox.com">
                <img
                  className="logo"
                  src={Hero}
                  alt="Transistor"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://www.facebook.com/oleanadvisors/">
                <img
                  className="logo"
                  src={OLEAN}
                  alt="Reform"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://www.eraaviacion.com">
                <img
                  className="logo"
                  src={Era}
                  alt="Tuple"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="https://www.facebook.com/sm.mueblesydecoracion/?locale=es_LA">
                <img
                  className="logo"
                  src={Muebles}
                  alt="Transistor"
                />
              </a>
            </div>
            <div className="logo-container">
              <a href="*">
                <img
                  className="logo"
                  src={Hadron}
                  alt="Reform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}