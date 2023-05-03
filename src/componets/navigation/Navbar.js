

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Popover, Transition } from '@headlessui/react'
import { connect } from "react-redux"
import {NavLink, Link} from 'react-router-dom'
import Logo7 from 'assets/img/Logo7.png'
import {useState, userState, Fragment } from 'react'
import loading from 'assets/img/loading.gif'
import  DotLoader from "react-spinners/DotLoader"

const solutions = [
  {
    name: 'Inicio',
    description: 'Bienvendio a ENMICE - 2023',
    href: '/',
    icon: IconOne,
  },
  {
    name: 'Historia ENMICE',
    description: 'Una mirada a su legado y evolución',
    href: '/ENMICE',
    icon: IconTwo,
  },
  {
    name: '¿Quienes somos?',
    description: 'Conoce al equipo ENMICE',
    href: '/Quienes',
    icon: IconThree,
  },
  {
    name: 'Colaboradores',
    description: ' Reconociendo el esfuerzo y la dedicación de los colaboradores detrás del éxito del evento',
    href: '/Educacion',
    icon: IconOne,
  },
  {
    name: 'Patrocinadores',
    description: 'Apoyando la innovación científica y tecnológica',
    href: '/Patrocinadores',
    icon: IconTwo,
  },
  {
    name: 'Noticias',
    description: 'Las últimas noticias y avances en la vanguardia de la cohetería experimental mexicana',
    href: '/Blog',
    icon: IconThree,
  },
]

function Navbar(){


    const [loading, setLoading] = useState(true)  

    window.onscroll = function() {scrollFunction()}

    function scrollFunction(){
      if(document.getElementById('navbar')){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
          document.getElementById('navbar').classList.add('shadow-navbar');
          document.getElementById('navbar').classList.add('bg-white');
        }else{
            document.getElementById('navbar').classList.remove('shadow-navbar');
            document.getElementById('navbar').classList.remove('bg-white');
        }
      }
    }

    const [open, setOpen] = useState(false)

    return(
        <nav id="navbar" className="w-full py-5 top-0 transition duration-300 ease-in-out bg-white1 z-40 fixed ">
            <div className="px-4 sm:px-6">
      <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
        <Link to = '/' className="ml-4 mt-2">
          <img 
          src={Logo7}
          width={100}
          height={100}
          className=""/>
          
          <h3 className="text-lg font-medium leading-6 text-white-900"></h3>
        </Link>
        <div className="ml-4 mt-2 flex-shrink-0">
        <NavLink to='/' className="text-lg inline-flex font-medium leading-6 text-white hover:text-orange-500 hover:underline hover:underline-offset-4 mx-5">Inicio</NavLink>
        <NavLink to='/Acceder' className="text-lg inline-flex font-medium leading-6 text-white hover:text-orange-500 mx-5">Acceder</NavLink>
        <NavLink to='/ENMICE' className="text-lg inline-flex font-medium leading-6 text-white hover:text-orange-500 hover:underline hover:underline-offset-4 mx-5">Historia ENMICE</NavLink>
        <NavLink to='/Quienes' className="text-lg inline-flex font-medium leading-6 text-white hover:text-orange-500 hover:underline hover:underline-offset-4 mx-5">¿Quienes somos?</NavLink>
        <NavLink to='/Educacion' className="text-lg inline-flex font-medium leading-6 text-white hover:text-orange-500 hover:underline hover:underline-offset-4 mx-5">Colaboradores</NavLink>
        <NavLink to='/Patrocinadores' className="text-lg inline-flex font-medium leading-6 text-white hover:text-orange-500 hover:underline hover:underline-offset-4 mx-5">Patrocinadores</NavLink>
        <NavLink to='/Blog' className="text-lg inline-flex font-medium leading-6 text-white hover:text-orange-500 hover:underline hover:underline-offset-4 mx-5">Noticias</NavLink>
                  
        </div>
      </div>
      <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
        <Link to = '/' className="ml-4 mt-2">
          <img 
          src={Logo7}
          width={100}
          height={100}
          className=""/>
          
          <h3 className="text-lg font-medium leading-6 text-gray-900"></h3>
        </Link>
        <div className="ml-4 mt-2 flex-shrink-0">
        <div className="fixed top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                -translate-x-1/2 group inline-flex items-center rounded-md bg-orange-700 px-4 py-3 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
              <span>Menu</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
        
                <button className=''>
                     <i class='bx bx-menu text-8xl'></i>
                     
                </button>
          
        </div>
      </div>
    </div>
        </nav>  
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {

}) (Navbar) 

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}

// 3:20:23

// <NavLink to= '/Registro' className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-orange-500 hover:underline hover:underline-offset-4 mx-5">Registro</NavLink>
// <NavLink to= '/Convocatoria'className="text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-orange-500 hover:underline hover:underline-offset-4 mx-5">Convocatoria</NavLink>

/*

<button
            type="button"
            to = '/'
            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
            Iniciar Sesion
            
            <DotLoader loading={loading} size = {15} color = '#c63782'/>
          </button>
*/



/*
function MyComponent() {
  React.useEffect(() => {
    function handleResize() {

      }

    window.addEventListener('resize', handleResize)
  })
  return <div>w00t!</div>
}
*/