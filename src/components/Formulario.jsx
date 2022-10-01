import React,{useState,useEffect} from 'react';
import limpiarCampos from '../Helpers/limpiarCampos';
import Error from './Error';

const Formulario = ({setPacientes}) => {
  //Estados
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  //Botón Submit
  const submitHandler = (e) =>{
    e.preventDefault();
    //Validación del formualrio
    if ([nombre,propietario,email,fecha,sintomas].includes('')) {
      console.log("Hay campos vacíos")
      setError(true);
      return;
    }else{
      console.log('Todos llenos')
    }
    setError(false);


    //Enviamos a App.js
    setPacientes(pacientes => [...pacientes,  
      {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }]);

    //Limpiar Campos Helper
    limpiarCampos(
      setNombre, 
      setPropietario,
      setEmail,
      setFecha,
      setSintomas
    );
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className="font-black text-3xl text-center">Formulario</h2>

      { //Error
        error?
        <Error>Hay campos vacíos</Error>
      :        
        <p className='text-lg mt-2 p-3 text-center'>Añade Pacientes y {' '}
          <span className='text-indigo-400 font-bold '>Administralos</span>
        </p>
      }

      <form onSubmit={submitHandler} className='bg-gray-500 shadow-md rounded-md py-10 px-5 mt-5 mb-10 text-slate-900'>
      <div className='mb-5'>
        <label 
          htmlFor="nombreMascota"
          className='block text-gray-200 uppercase font-bold'>Nombre Mascota</label>
        <input 
          type="text" 
          id='nombreMascota'
          placeholder='Nombre de la Mascota'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={nombre}
          onChange={ e => setNombre(e.target.value)}
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
          value={propietario}
          onChange={ e => setPropietario(e.target.value)}
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
          value={email}
          onChange={ e => setEmail(e.target.value)}
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
          value={fecha}
          onChange={ e => setFecha(e.target.value)}
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
          value={sintomas}
          onChange={ e => setSintomas(e.target.value)}
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