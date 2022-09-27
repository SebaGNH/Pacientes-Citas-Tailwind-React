import React,{Fragment} from 'react'

const Header = () => {
  return (
    <Fragment>
      <header className='grid'>
        <div className='text-4xl font-black uppercase  text-neutral-50 text-center w-2/3 md:mx-auto'
        >Seguimiento pacientes {' '}
        <span className='text-indigo-600'>Veterinaria</span></div> 
      </header>
    </Fragment>
  )
}

export default Header


