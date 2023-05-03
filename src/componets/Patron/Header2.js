import Pruebas from 'assets/img/Pruebas.JPG'

const stats = [
    { id: 1, name: 'Creators on the platform', value: '8,000+' },
    { id: 2, name: 'Flat platform fee', value: '3%' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Paid out to creators', value: '$70M' },
  ]
  
  export default function Example() {
    return (
      <div className="relative bg-white">
        <img
          className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-10 lg:left-0 lg:h-full lg:w-1/2"
          src={Pruebas}
          alt=""
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-8 text-indigo-600">"La exploración espacial no tiene fronteras, no tiene banderas, es algo en lo que todos podemos trabajar juntos y lo que puede unir a personas de todo el mundo" - Ed Mitchell</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Apoyando la Innovación y desarrollo: Descubre a los Patrocinadores de ENMICE 2023
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              ENMICE 2023 cuenta con el valioso apoyo de diversos patrocinadores que comparten nuestra visión de fomentar la innovación y la excelencia en la ciencia aeroespacial. Agradecemos profundamente su compromiso y generosidad para hacer posible este evento único en su tipo en México, y estamos emocionados de trabajar juntos para inspirar a la próxima generación de ingenieros y científicos. Juntos, estamos impulsando la investigación y el desarrollo de tecnologías que están llevando al ser humano a explorar y comprender cada vez más nuestro universo.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    )
  }