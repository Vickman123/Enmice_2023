import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import Bandera from 'assets/img/Bandera.jpg'



function Noticias(){

    

    return(
        <main>
        <div className="relative px-6  lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12 ">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-16  sm:text-7xl">
                ENMICE 2023 impulsara la innovación aeroespacial en México
                </h1>
                <p className="mt-16 text-2xl max-w-3xl leading-8 text-black ">
                ENMICE 2023 reúne a los principales ingenieros de cohetería experimental de México para impulsar la innovación en el sector aeroespacial.
                </p>
                
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
                <img src={Bandera} className='w-full h-full object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Noticias