import {useEffect, useState} from 'react'
import Error from './error';



const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

const [nombre, setNombre] = useState('');
const [propietario, setPropietario] = useState('');
const [email, setEmail] = useState('');
const [fecha, setFecha] = useState('');
const [sintomas, setSintomas] = useState('');

const [error, setError] =  useState(false)

//aqui se establecen los datos del paciente a editar dentro del formulario 
//para que esten disponibles para editar
useEffect (()=>{
if ( Object.keys(paciente).length > 0 ) {
    /* console.log('Si hay registros') */
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario) 
    setEmail(paciente.email) 
    setFecha(paciente.fecha) 
    setSintomas(paciente.sintomas) 
    
}
}, [paciente]) 

//manera de generar un ID unico
const generarId = ()=> {
    const random = Math.random().toString(36).slice(2)
    const fecha =  Date.now().toString(36)
    return fecha +random
}

// aqui se establecen los objetos de cada paciente y se añaden al objeto pacientes
const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
        console.log('hay espacios obligatorios en blanco')
        setError(true)
        return;
    }

    setError(false)


    //objeto de paciente
    const objetoPacientes = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        
    }


    if (paciente.id) {
        //Editando registro
        objetoPacientes.id= paciente.id
       /*  console.log(objetoPacientes)
        console.log(paciente) */

        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)
         setPacientes(pacientesActualizados)
         setPaciente({})
        
    }
    else {
        //Nuevo registro
        //agregamos los datos del nuevo paciente al arreglo
        // le generamos su ID unico
        objetoPacientes.id = generarId()
        setPacientes([...pacientes, objetoPacientes])
        
        
    }
    

    // reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
}



  return (
    <>
    <div className= "md:w-1/2 lg:w2/5 mx-5">
    <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    <p className="text-lg mt-5 text-center ">
        Añade Pacientes y <spam className="font-bold text-indigo-600"> Administralos</spam>
    </p>
   
    <form 
        onSubmit={handleSubmit}
        className='mt-10 mb-10 bg-white shadow-md rounded-xl py-10 px-5 '>
            { error && <Error>
                <h1>Error</h1>
                <p>Todos los campos son obligatorios</p>
                </Error> }
        <div>
            <label htmlFor='mascota' className='block tetx-gray-700 uppercase font-bold'>Nombre de la mascota</label>
            <input 
            id='mascota'
            type="text" 
            placeholder=' Nombre de la mascota'
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ${nombre==='' &&error && 'border-red-500'}`}
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)} />
             {nombre==='' && error && <p className="text-red-500 text-sm mt-1">Por favor, ingresa el nombre de la mascota.</p>}
        </div>
        <div className='mt-5
        '>
            <label htmlFor='Propietario' className='block tetx-gray-700 uppercase font-bold'>Nombre del Propietario</label>
            <input 
            id='Propietario'
            type="text" 
            placeholder=' Nombre del Propietario'
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ${propietario=== '' && error && 'border-red-500'}`}
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)} />
            {propietario=== ''  && error && <p className="text-red-500 text-sm mt-1">Por favor, ingresa el nombre de la propietario.</p>}
        </div>
        <div className='mt-5'>
            <label htmlFor='email' className='block tetx-gray-700 uppercase font-bold'>Email</label>
            <input 
            id='email'
            type="email" 
            placeholder=' Email Contacto Propietario'
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ${email==='' &&  error && 'border-red-500'}`}
            value={email}
            onChange={ (e) => setEmail(e.target.value)} />
            {email==='' && error && <p className="text-red-500 text-sm mt-1">Por favor, ingresa el nombre de la email.</p>}
        </div>
        <div className='mt-5'>
            <label htmlFor='Alta' className='block tetx-gray-700 uppercase font-bold'>Alta</label>
            <input 
            id='Alta'
            type="date" 
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ${fecha==='' && error && 'border-red-500'}`}
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)} />
            {fecha==='' && error && <p className="text-red-500 text-sm mt-1">Por favor, ingresa el nombre de la fecha.</p>}
        </div>
        <div className='mt-5'>
            <label htmlFor='sintomas' className='block tetx-gray-700 uppercase font-bold'>Sintomas</label>
            <textarea 
            id='sintomas'
            placeholder=' Describa los sintomas'
            type="date" 
            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ${sintomas==='' && error && 'border-red-500'}`}
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
            />
            {sintomas==='' && error && <p className="text-red-500 text-sm mt-1">Por favor, ingresa el nombre de la sintomas.</p>}
        </div>
        
        <input
        type="submit"
        className="bg-indigo-700 rounded-full text-white font-bold shadow-lg hover:bg-indigo-800 text-center py-2 px-5 mr-3  shadow-indigo-300 mt-5 mb-1 w-full p-3 uppercase"
        value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
         />

    </form>
    
    
    </div>
    </>
  )
}

export default Formulario