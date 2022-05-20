import React from 'react'
import cat5 from '../assets/cat5.jpg'

const Marzo = () => {
  return (
    <div className='p-4 gap-2 place-content-center grid sm:grid-cols-1 lg:grid-cols-2 pt-16'>

    <div className=''>

    <div class="mockup-code whitespace-pre-line">
        <h1 className='text-center text-4xl font-semibold text-purple-600'>El friki incondicional</h1>
        <p className='p-4'>Va más allá del deber de entregar el producto y se enorgullece de su trabajo.
            Pasa la hora del almuerzo en su escritorio trabajando frenéticamente para terminar el proyecto antes de tiempo. Cuando se permite un poco de tiempo libre, lee libros, artículos de revistas y cosas por el estilo para mejorar. Muy introvertido, se siente más cómodo en el mundo del código y la jerga de programación.
            Cuanto más código escribe el geek incondicional, más contenido se siente. Por muy bueno que sea con el código, es una abeja trabajadora mucho mejor que un líder.</p>
    </div>

    </div>




    <div className='flex justify-center px-10'>

    <img width="" src={cat5}/>



    </div>



</div>
  )
}

export default Marzo