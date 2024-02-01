const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

   const {nombre, propietario, email, fecha, sintomas, id} = paciente

   const handleEliminar = () => {
    const respuesta =confirm('deseas eliminar este paciente?')
    if (respuesta) {
        eliminarPaciente(id)
    }
   }
   
  return (
    <div className= "m-3 mt-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase ">
      Nombre: {''} <spam className="font-normal normal-case"> {nombre}
      </spam>
  </p>
  <p className="font-bold mb-3 text-gray-700 uppercase ">
      Propietario: {''} <spam className="font-normal normal-case"> {propietario}
      </spam>
  </p>
  <p className="font-bold mb-3 text-gray-700 uppercase ">
      Email: {''} <spam className="font-normal normal-case"> {email}
      </spam>
  </p>
  <p className="font-bold mb-3 text-gray-700 uppercase ">
      Alta: {''} <spam className="font-normal normal-case"> {fecha}
      </spam>
  </p>
  <p className="font-bold mb-3 text-gray-700 uppercase ">
      Síntomas: {''} <spam className="font-normal normal-case"> {sintomas}
      </spam>
  </p>

  <div className="flex justify-between mt-10">
    <button 
    type="button" 
    className="bg-indigo-700 rounded-full text-white font-bold shadow-lg hover:bg-indigo-800 text-center py-2 px-5 mr-3  shadow-indigo-300" 
    onClick = {()=>
        setPaciente(paciente)
    }>
        Editar
    </button>
    <button  type="button" className="bg-red-500 rounded-full text-white font-bold shadow-lg hover:bg-red-700 text-center py-2 px-5 mr-3 shadow-red-300" 
    onClick={handleEliminar}>
        Eliminar
    </button>
  </div>
  
  </div>
  )
}

export default Paciente


