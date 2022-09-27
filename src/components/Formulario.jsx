import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className="font-black text-3xl text-center">Formulario</h2>

      <p className='text-lg mt-5'>Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold '>Administralos</span>
      </p>

      <form action="" className='bg-gray-500 shadow-md rounded-md py-10 px-5 mt-10'>
      <div className='mb-5'>
        <label 
          htmlFor="nombreMascota"
          className='block text-gray-200 uppercase font-bold'>Nombre Mascota</label>
        <input 
          type="text" 
          id='nombreMascota'
          placeholder='Nombre de la Mascota'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
      </div>

      <div className='mb-5'>
        <label 
          htmlFor="nombrePropietario"
          className='block text-gray-200 uppercase font-bold'>Nombre Propietario</label>
        <input 
          type="text" 
          id='nombrePropietario'
          placeholder='Nombre del Propietario'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
      </div>

      <div className='mb-5'>
        <label 
          htmlFor="email"
          className='block text-gray-200 uppercase font-bold'>Email</label>
        <input 
          type="email" 
          id='email'
          placeholder='Correo electrónico de contacto'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
      </div>

      <div className='mb-5'>
        <label 
          htmlFor="fechaAlta"
          className='block text-gray-200 uppercase font-bold'>Alta</label>
        <input 
          type="date" 
          id='fechaAlta'
          className='border-2 w-full p-2 mt-2 rounded-md'
          />
      </div>

      <div className='mb-5'>
        <label 
          htmlFor="sintomas"
          className='block text-gray-200 uppercase font-bold'>Sintomas</label>
        <textarea 
          name="" 
          id="sintomas" 
          className='border-2 w-full p-2 mt-2 rounded-md'
          placeholder='Describa los cintomas'
          ></textarea>
      </div>

      <input 
        type="submit" 
        value="Agregar Paciente" 
        className='w-full bg-indigo-600 rounded-md p-2 text-white uppercase font-bold tracking-widest hover:bg-indigo-700 cursor-pointer  transition-colors'
        />
      </form>
    </div>
  )
}

export default Formulario