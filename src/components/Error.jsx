import React from 'react'

const Error = ({children}) => {
  return (
    <p className='text-lg bg-red-500 text-white text-center mt-2 p-3 font-bold rounded'>{children}</p>
  )
}

export default Error