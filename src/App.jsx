import { useState } from 'react'
import Form from './components/Form'
import List from './components/List'

function App() {
  const [users, setUsers] = useState([])

  const deleteUsers = (id) => {
    const newUsers = users.filter(user => user.id !== id)

    setUsers(newUsers)
  }

  return (
    <div className="container mx-auto mt-16">


      <div className=' mt-12  md:flex'>
        <Form users={users} setUsers={setUsers} />

        <List users={users} deleteUsers={deleteUsers} />

      </div>

    </div>
  )
}

export default App
