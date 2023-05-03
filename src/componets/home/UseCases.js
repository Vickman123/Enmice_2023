const posts = [
    {
      title: 'Sede 1: Universidad Marista de Guadalajara.',
      href: '#',
      category: { name: 'Article', href: 'https://www.gob.mx/aem/agenda/encuentro-mexicano-de-ingenieria-en-coheteria-experimental-2022' },
      description:
        'Actividades: inauguración, conferencias, presentación de equipos participantes, mesas redondas, talleres, área networking, salida de autobuses, ceremonia de premiación y clausura.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://noticiasncc.com/wp-content/uploads/2022/09/DSC_9136.jpg',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Sede 2: Laguna de Sayula, acondicionada por la Universidad de Guadalajara.',
      href: '#',
      category: { name: 'Video', href: 'https://www.youtube.com/watch?v=6qF_qZu13OE' },
      description:
        'Actividades: lanzamiento de cohetes, espectáculo medio tiempo.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://www.gob.mx/cms/uploads/press/main_image/208654/post_Foto.jpg',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Premian a duranguenses en el Encuentro Mexicano de Ingeniería en Cohetería Experimental',
      href: '#',
      category: { name: 'Case Study', href: 'https://www.elsoldedurango.com.mx/local/premian-a-duranguenses-en-el-encuentro-mexicano-de-ingenieria-en-coheteria-experimental-8980460.html' },
      description:
        'Los jóvenes estudiantes obtuvieron el segundo lugar con la construcción de un cohete de 2.5 metros de alto, un motor con más de 2 mil newtons de empuje.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://www.elsoldedurango.com.mx/local/28izpg-premian-a-duranguenses-en-el-encuentro-mexicano-de-ingenieria-en-coheteria-experimental.jpeg/ALTERNATES/LANDSCAPE_960/Premian%20a%20duranguenses%20en%20el%20Encuentro%20Mexicano%20de%20Ingenier%C3%ADa%20en%20Coheter%C3%ADa%20Experimental.jpeg',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: 'https://www.elsoldedurango.com.mx/local/premian-a-duranguenses-en-el-encuentro-mexicano-de-ingenieria-en-coheteria-experimental-8980460.html',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  
  export default function UseCases() {
    return (
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Noticias</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            ENMICE 2023 lleva a México al cielo de la innovación aeroespacial gracias al talento y colaboración de sus ingenieros en cohetería experimental
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }