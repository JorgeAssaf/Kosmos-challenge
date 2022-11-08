const User = ({ user, deleteUsers }) => {
  return (
    <section className='m-3 shadow-md rounded-lg py-10 px-5 mx-5 my-8'>
      <p className=' text-gray-700 uppercase font-bold mb-3'>
        {' '}
        Nombre del usuario :{' '}
        <span className='capitalize font-normal'>{user.nombre}</span>{' '}
      </p>
      <p className=' text-gray-700 uppercase font-bold mb-3'>
        {' '}
        Trabajo :{' '}
        <span className='capitalize font-normal'>{user.trabajos}</span>
      </p>
      <p className=' text-gray-700 uppercase font-bold mb-3'>
        {' '}
        Estado : <span className='capitalize font-normal'>{user.status}</span>
      </p>
      <button
        className='px-3 py-2 bg-red-600 mt-5   text-white font-bold rounded-md'
        onClick={() => deleteUsers(user.id)}
      >
        Eliminar
      </button>
    </section>
  )
}

export default User
