import React from 'react'
import cat10 from '../assets/cat10.jpg'


const Abril = () => {
  return (
    <div className='p-4 gap-2 place-content-center grid sm:grid-cols-1 lg:grid-cols-2 pt-16'>

    <div className=''>

    <div class="mockup-code whitespace-pre-line">
        <h1 className='text-center text-4xl font-semibold text-purple-600'>El Héroe</h1>
        <p className='p-4'>¿Problemas para cumplir con un plazo ajustado? ¿Codificadores fallando en el trabajo? ¿Está muriendo el proyecto? Aquí está tu héroe al rescate, tu Superman o Superwoman. Un héroe es una persona que te ayuda en los casos más difíciles. Estos diferentes tipos de programadores son una bendición en tiempos de crisis. Están dispuestos a trabajar mucho, incluso bajo presión y saben cómo arreglar lo que otras personas han estropeado. </p>
    </div>

    </div>




    <div className='flex justify-center px-10'>

    <img width="" src={cat10}/>



    </div>



</div>
  )
}

export default Abril