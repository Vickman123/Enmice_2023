

import Evento2021 from 'assets/img/Evento2021.jpg'


const people = [
    {
      name: 'Encuentro Mexicano de Ingenieria en Coheteria Experimental ENMICE - 2021',
      role: 'Universidad Autonoma de Baja California, Laguna Salada, Tijuana Baja California./ 28 al 30 de mayo 2021',
      imageUrl:
        'https://scontent.fmex2-2.fna.fbcdn.net/v/t39.30808-6/237977072_208865101207217_6856647610644710486_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=FfkXbIm-2kIAX_WMBCZ&_nc_ht=scontent.fmex2-2.fna&oh=00_AfDgGb4_AsaeBJYY-iaWY8ApBVFVZ8kQcGlPb1ftDC6Rmw&oe=6447B407',
      bio: 'Motivados por el desarollo del capital humano, tecnologia y ciencia espacial en Mexico, se lleva a cabo por primera vez con el respaldo de la Agencia Espacial Mexicana la edicion 2021 del Encuentro Mexicano de Ingenieria y Coheteria Experimental (ENMICE).',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'Encuentro Mexicano de Ingenieria en Coheteria Experimental ENMICE - 2022',
        role: 'Universidad Marista de Guadalajara, Laguna de Sayula, Zapopan, Jalisco. / 22 al 25 de septiembre 2022',
        imageUrl:
          'https://scontent.fmex2-1.fna.fbcdn.net/v/t39.30808-6/279120906_356507099776349_1713914700589503349_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=gHNnaIhNWxMAX9u0yYb&_nc_oc=AQmbyOo3fuuTAFeMRWuOLM8iqcw9LF3Zs1hB9IbcZrI2XCpHEHTJ-M1XNo2qBLGbP_A&_nc_ht=scontent.fmex2-1.fna&oh=00_AfAxcdvBi5iAw4h4nDxGuiYR0iDUxJZnOiCtSAtYpjoE_g&oe=644912E0',
        bio: 'A causa del gran exito del evento 2021, ENMICE se lleva acabo por segunda ocacion consecutiva y nuevamente con la Agencia Espacial Mexicana como un pilar fundamental en el correcto desarollo del evento y competencia.',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Encuentro Mexicano de Ingenieria en Coheteria Experimental ENMICE - 2023',
        role: 'Por definir',
        imageUrl:
          'https://scontent.fmex2-1.fna.fbcdn.net/v/t39.30808-6/341833682_614467346907537_3987446002239782465_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=vtkM6X29aeEAX_w1dWZ&_nc_ht=scontent.fmex2-1.fna&oh=00_AfC0ty7j193EPzsmxq3fvjFJf5pAMTUxfyMR0REWS2RMwg&oe=6447E126',
        bio: ' Desde su creación, el ENMICE ha fomentado el desarrollo de habilidades y destrezas en la construcción de cohetes experimentales, así como el intercambio de conocimientos y experiencias entre sus participantes. Después de dos exitosas ediciones en los años 2021 y 2022, el ENMICE regresa en 2023 con nuevas expectativas y desafíos. En esta nueva edición, esperamos ver proyectos innovadores y creativos, así como conferencias con expertos en la cohetería experimental, que sigan consolidando al ENMICE como un espacio de referencia para la exploración y desarrollo de la cohetería en México..',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
    // More people...
  ]
  
  export default function Linea() {
    return (
      <div className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
          <div className="max-w-2xl xl:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Encuentro Mexicano de Ingenieria en Coheteria Experimental ENMICE 2021 - 2023</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            El Encuentro Mexicano de Ingeniería en Cohetería Experimental (ENMICE) es un evento anual que se ha convertido en un referente para jóvenes ingenieros y aficionados de la cohetería en México. Desde sus inicios, el ENMICE ha sido una plataforma para mostrar el talento y creatividad de los participantes en la construcción de cohetes experimentales, así como para intercambiar conocimientos y experiencias en este campo. Tanto en la edición 2021 como en la edición 2022, los proyectos presentados en el ENMICE han dejado ver el nivel de habilidades y destrezas de los jóvenes participantes. Además, la organización ha mejorado cada año en la selección de los proyectos y la organización de conferencias con expertos en la materia. Ahora, con la nueva edición del ENMICE en el horizonte, esperamos ver nuevamente proyectos innovadores y creativos que den continuidad al legado del ENMICE como un espacio para la cohetería experimental en México.
            </p>
          </div>
          <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <div className="max-w-xl flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                  <ul role="list" className="mt-6 flex gap-x-6">
                    
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }