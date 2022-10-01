import React from 'react'

const Paciente = ({paciente}) => {
  
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
  </div>
  )
}

export default Paciente