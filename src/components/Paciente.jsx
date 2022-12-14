import React from 'react'

const Paciente = ({paciente,setEditPaciente}) => {
  
  return (
  <div className="mx-5 my-8 bg-gray-400 shadow-md px-5 py-10 rounded-xl text-base">

    <p className="font-bold mb-3 text-gray-900 uppercase">Nombre: {' '}
      <span className="font-normal normal-case"
        >{paciente.nombre}
      </span>
    </p>

    <p className="font-bold mb-3 text-gray-900 uppercase">Propietario: {' '}
      <span className="font-normal normal-case"
        >{paciente.propietario}
      </span>
    </p>

    <p className="font-bold mb-3 text-gray-900 uppercase">Email: {' '}
      <span className="font-normal normal-case"
        >{paciente.email}
      </span>
    </p>

    <p className="font-bold mb-3 text-gray-900 uppercase">Alta: {' '}
      <span className="font-normal normal-case"
        >{paciente.fecha}
      </span>
    </p>

    <p className="font-bold mb-3 text-gray-900 uppercase">Sintomas: {' '}
      <span className="font-normal normal-case"
        >{paciente.sintomas}
      </span>
    </p>

    <div className="flex justify-between mt-10">
      <button 
        className='py-2 px-7 mr-2 my-2 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase tracking-widest rounded 
        transition-colors'
        type='button'
        onClick={()=> setEditPaciente(paciente)}
        >Editar
      </button>

      <button 
        className='py-2 px-7 mr-2 my-2 bg-red-600 hover:bg-red-800 text-white font-bold uppercase tracking-widest rounded
        transition-colors'
        type='button'
        >Eliminar
      </button>
    </div>
  </div>
  )
}

export default Paciente