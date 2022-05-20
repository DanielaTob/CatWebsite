import React from 'react'
import cat14 from '../assets/cat14.jpg'

const Noviembre = () => {
  return (
    <div className='p-4 gap-2 place-content-center grid sm:grid-cols-1 lg:grid-cols-2 pt-16'>

    <div className=''>

    <div class="mockup-code whitespace-pre-line">
        <h1 className='text-center text-4xl font-semibold text-purple-600'>El Creador</h1>
        <p className='p-4'>Todo programador tiene que ser un creador. Entre los creadores, hay un tipo en particular que puede causar muchos problemas cuando no están. El MacGyver de los programadores, esta persona puede arreglar cualquier cosa en poco tiempo pero de una manera que sólo ellos pueden entender. Para ellos, realmente no importa cómo se ve su trabajo mientras esté funcionando.</p>
    </div>

    </div>




    <div className='flex justify-center px-10'>

    <img width="" src={cat14} />



    </div>



</div>
  )
}

export default Noviembre