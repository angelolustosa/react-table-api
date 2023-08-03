import axios from 'axios';
import { useEffect, useState } from 'react'
import { Table } from './components/Table';

function App() {
  const [users, setUsers] = useState([])
  const [fields, setFields] = useState({ filter: '' })
  const columns = ['Name', 'Email', 'Username', ' Website', 'Adrress']

  //https://rapidapi.com/guides/axios-async-await



  const filterRows = () => {
    const filterValueName = fields.filter.toLowerCase();


    const filteredData = data.filter(user =>
      users.name.toLowerCase().includes(filterValueName) || user.email.toLowerCase().includes(filterValueName) //|| user.fullAddress.toLowerCase().includes(filterValueName)
    );

    setUsers(filteredData)
    console.log(filteredData)
  }

  const handleInput = event => {
    let id = event.target.id
    let value = event.target.value
    setFields({ ...fields, [id]: value })

  }

  /* const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(fields.filter.toLowerCase()) ||
      user.email.toLowerCase().includes(fields.filter.toLowerCase())
  ); */


  const getData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
      console.log('response:', response.data)
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getData()
  }, [])


  /* se for usar:
  const filteredUsers = users.filter(user => 
       user.id === parseInt(fields.filter) ||
         user.name.toLowerCase().includes(fields.filter.toLowerCase()) ||
         user.email.toLowerCase().includes(fields.filter.toLowerCase()) ||
         user.username.toLowerCase().includes(fields.filter.toLowerCase())
     )

     ao passar o filteredUsers em Table como prop, deve passar apenas a const e não chamado uma função
  164857*/
  const filteredUsers = () => {
    return users.filter(user => 
       user.id === parseInt(fields.filter) ||
         user.name.toLowerCase().includes(fields.filter.toLowerCase()) ||
         user.email.toLowerCase().includes(fields.filter.toLowerCase()) ||
         user.username.toLowerCase().includes(fields.filter.toLowerCase())
     )}

  return (
    <div className="container">

      <div className="mt-3">
        <h2>Usuários do Sistema</h2>
      </div>

      <div className="form-row mt-3 mb-3">
        <div className="col">
          <input
            type="text"
            id="filter"
            className="form-control"
            placeholder="Filter by Name..."
            value={fields.filter || ''}
            onChange={handleInput}
          />
        </div>
      </div>

      <hr />
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Table
        columns={columns}
        data={filteredUsers()}
      />
    </div>
  )
}

export default App
