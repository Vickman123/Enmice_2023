import ast from 'assets/img/space.gif'
import {Link} from 'react-router-dom'
import { connect } from "react-redux"

function Error404(){
    return(
        <div>
            <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
  <img 
          src={ast}
          width={500}
          height={250}
          className=""/>
    <p class="mt-3 text-3xl font-semibold text-orange-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900  sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Lo sentimos, no hemos podido encontrar la página que busca..</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="#" class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Inicio</a>
      <a href="#" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main>
        </div>
    )

}
export default Error404


