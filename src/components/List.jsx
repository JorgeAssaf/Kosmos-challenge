import User from "./User"

const List = ({ users, deleteUsers }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll  ">
      <h2 className='font-black text-3xl text-center mb-7'>Listado</h2>

      {
        users.map(user => (
          <User user={user} key={user.id} deleteUsers={deleteUsers} />
        ))
      }

    </div>
  )
}

export default List
