import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Form = ({ users, setUsers }) => {
  const [id, setId] = useState(uuidv4)
  const [nombre, setNombre] = useState('')
  const [trabajos, setTrabajos] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if ([id, nombre, trabajos, status].includes('')) {
      setError(true)

      return
    }

    setError(false)

    setId(uuidv4)

    console.log({
      id,
      nombre,
      trabajos,
      status,
    })

    const newUsers = {
      id,
      nombre,
      trabajos,
      status,
    }

    setUsers([newUsers, ...users])
    console.log(users)
  }

  return (
    <div className='md:w-1/2 lg:w-3/5 mx-5 mb-10' >

      <h2 className='font-black text-3xl text-center mb-7'>Registro</h2>
      {error && (
        <div className='bg-red-700 text-white uppercase text-center p-3 rounded-md mb-5 font-bold'>
          <p>Todos los capos son obligatorios</p>
        </div>
      )}
      <form className=' shadow-md rounded-lg py-10 px-5' onSubmit={onSubmit}>
        <label className='block text-gray-700 uppercase font-bold' htmlFor='nombre'>Ingrese su nombre</label>
        <input
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-4'
          type='text'
          name='nombre'
          id='nombre'
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <label className='block text-gray-700 uppercase font-bold' htmlFor='trabajos'>¿Cual es tu rol?</label>

        <select
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-4'
          name='trabajos'
          id='trabajos'
          onChange={(e) => setTrabajos(e.target.value)}
          value={trabajos}
        >
          <option value=''></option>
          <option value='Desarrollador'>Desarrollador</option>
          <option value='Diseñador'>Diseñador</option>
          <option value='Marketing'>Marketing</option>
        </select>
        <p className='block text-gray-700 uppercase font-bold mb-2'>¿Cual es tu estado civil?</p>
        <section className='flex  items-center gap-5'>

          <input

            type='checkbox'
            name='Soltero'
            id='Soltero'
            onChange={(e) => setStatus(e.target.name)}
          />
          Soltero
          <input
            type='checkbox'
            name='Divorciado'
            id='Divorciado'
            onChange={(e) => setStatus(e.target.name)}
          />
          Divorciado
          <input
            type='checkbox'
            name='Casado'
            id='Casado'
            onChange={(e) => setStatus(e.target.name)}
          />
          Casado
        </section>
        <button className='px-3 py-2 bg-indigo-600 mt-5 w-full text-lg text-white font-bold rounded-md'>Enviar</button>
      </form>
    </div>
  )
}

export default Form
