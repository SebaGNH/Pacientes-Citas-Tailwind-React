import React,{Fragment, useState} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

const App = () => {
  const [pacientes, setPacientes] = useState([]);

  return (
    <Fragment>
      <div className="container mx-auto mt-4">
      {/*  <Header 

        /> */}

        <div className="mt-12 md:flex">
          <Formulario 
            setPacientes={setPacientes}
          />
          <ListadoPacientes 
            pacientes={pacientes}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default App