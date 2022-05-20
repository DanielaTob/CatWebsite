import React from 'react'
import cat2 from '../assets/cat2.jpg'

const Febrero = () => {
  return (
    <div className='p-4 gap-2 place-content-center grid sm:grid-cols-1 lg:grid-cols-2 pt-16'>

    <div className=''>

    <div class="mockup-code whitespace-pre-line">
        <h1 className='text-center text-4xl font-semibold text-purple-600'>El anciano experimentado</h1>
        <p className='p-4'>Puede que no sea el tipo más moderno en este campo enérgico y creativo, pero el anciano experimentado aporta algo valioso a la mesa: una gran cantidad de conocimientos y experiencia.
            Puede parecer obsoleto, incapaz de mantenerse al día con las últimas herramientas y tecnología, pero es sabio y conoce los conceptos básicos como la palma de su mano.</p>
    </div>

    </div>




    <div className='flex justify-center px-10'>

    <img width="" src={cat2}/>



    </div>



</div>
  )
}

export default Febrero