import React,{Fragment, useState} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [editPaciente, setEditPaciente] = useState({}); 

  return (
    <Fragment>
      <div className="container mt-4 mx-4">
      
      {/* <Header 

        /> */}

        <div className="mt-12 md:flex">
          <Formulario 
            pacientes={pacientes}
            setPacientes={setPacientes}
            editPaciente={editPaciente}
          />
          <ListadoPacientes 
            pacientes={pacientes}
            setEditPaciente={setEditPaciente}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default App