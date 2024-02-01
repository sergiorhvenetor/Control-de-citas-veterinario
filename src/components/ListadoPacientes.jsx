import React from 'react'
import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  
  
  return (
    <div className= "md:w-1/2 lg:w3/5  mx-3 md:h-screen overflow-scroll">
      { pacientes && pacientes.length ? (<> <h2 className='font-black text-3xl text-center '>Listado Pacientes Registrados</h2>
    <p className="text-lg mt-5 text-center ">
        Administra tus {''} <spam className="font-bold text-indigo-600 "> Pacientes y Citas
        </spam>
    </p>
    
    {pacientes.map( paciente => (
     <Paciente 
      key={paciente.id} 
      paciente={paciente}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      
      />
    ))}
    </>) : (<>
        <h2 className='font-black text-3xl text-center '>No hay pacientes</h2>
    <p className="text-lg mt-5 text-center ">
       Inicia agregando pacientes {''} <spam className="font-bold text-indigo-600 "> y aparecerán en este lugar
        </spam>
    </p>
    
    
    </>)}
   

    
    

    </div>
    
  )
}

export default ListadoPacientes