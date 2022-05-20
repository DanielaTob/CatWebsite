import React from 'react'
import cat15 from '../assets/cat15.jpg'

const Diciembre = () => {
  return (
    <div className='p-4 gap-2 place-content-center grid sm:grid-cols-1 lg:grid-cols-2 pt-16'>

    <div className=''>

    <div class="mockup-code whitespace-pre-line">
        <h1 className='text-center text-4xl font-semibold text-purple-600'>El Mago</h1>
        <p className='p-4'>La codificación es como magia, escribes algunos símbolos y ¡bum! Hay algo nuevo. Algunos programadores son como magos - no necesitas saber los detalles o los aspectos técnicos de su trabajo, pero aún así puedes confiar en ellos. Hacen que tu visión sea real.</p>
    </div>

    </div>




    <div className='flex justify-center px-10'>

    <img width="" src={cat15} />



    </div>



</div>
  )
}

export default Diciembre