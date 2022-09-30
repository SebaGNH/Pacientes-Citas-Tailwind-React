import React from 'react'

const Paciente = () => {
  return (
  <div className="mx-5 my-8 bg-gray-400 shadow-md px-5 py-10 rounded-xl text-base">

    <p className="font-bold mb-3 text-gray-900 uppercase">Nombre: {' '}
      <span className="font-normal normal-case">Carlitos</span>
    </p>

    <p className="font-bold mb-3 text-gray-900 uppercase">Propietario: {' '}
      <span className="font-normal normal-case">Seba</span>
    </p>

    <p className="font-bold mb-3 text-gray-900 uppercase">Email: {' '}
      <span className="font-normal normal-case">notengo@notengo.com</span>
    </p>

    <p className="font-bold mb-3 text-gray-900 uppercase">Alta: {' '}
      <span className="font-normal normal-case">12 Diciembre del 2022</span>
    </p>

    <p className="font-bold mb-3 text-gray-900 uppercase">Sintomas: {' '}
      <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iusto eaque omnis ea. Omnis aliquid culpa quam eum mollitia labore laudantium et deleniti enim, repellendus neque sit ea facilis dignissimos?</span>
    </p>
  </div>
  )
}

export default Paciente