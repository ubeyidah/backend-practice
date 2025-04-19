import React, {useEffect, useState} from 'react'


const App = () => {
  const [users,setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState("")

  const loadUsers = async() => {
    try {
      setError("")
      setLoading(true)
      const res = await fetch("http://localhost:4000/api/users");
      const {data} = await res.json();
      setUsers(data)
    } catch (error) {
      console.log(error)
      setError("Someting went wrong")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  },[])

  if (loading) {
    return <h1>Loading....</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      <h3 className='text-center text-3xl'>Users Data from my server</h3>
      <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left text-sm font-medium">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Registered At</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user.id} className="text-sm text-gray-700 hover:bg-gray-50 transition">
            <td className="px-4 py-3">{user.id}</td>
            <td className="px-4 py-3">{user.name}</td>
            <td className="px-4 py-3">{user.email}</td>
            <td className="px-4 py-3">{user.phone}</td>
            <td className="px-4 py-3 capitalize">{user.role}</td>
            <td className="px-4 py-3">{user.registeredAt}</td>
          </tr>)}
        </tbody>
      </table>
          </div>
    
    </div>
  )
}

export default App