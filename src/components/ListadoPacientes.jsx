import React from 'react'
import Paciente from './Paciente'
const ListadoPacientes = ({pacientes,setEditPaciente}) => {


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className="font-black text-3xl text-center">Pacientes</h2>
      {
        pacientes.length > 0?        
          <p className='text-xl mt-5 text-center'
            >Administra tus {' '} 
            <span className='text-indigo-400 font-bold'
            >Pacientes y citas</span>
          </p>
        :
        <p className='text-xl mt-5 text-center'
            >No hay pacientes registrados
            
          </p>
      }

      {
        pacientes.map((paciente) => (
          <Paciente 
            key={paciente.id}
            paciente={paciente}
            setEditPaciente={setEditPaciente}
          />
        ))
      }
      
    </div>
  )
}

export default ListadoPacientes


