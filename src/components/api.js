import React from 'react';
import { useState , useEffect} from 'react';
import './style.css'
import axios from 'axios';
const Api = () => {
  const [todo, setTodos] = useState([]);
  useEffect( () => {
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(res => {
 setTodos(res.data);
   })
  },[]);
  return (
    <div className='d-flex flex-column  justify-centent-center align-items-center'>
        <div className="card mt3 bg-light border border-warning w-75 mt-5 p-3 api">
          <h3 className="text-info">This informations are bringing by API from <a href="https://jsonplaceholder.typicode.com" 
          target="_blank" rel="noopener noreferrer">Json-PlaceHolder</a> :</h3>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">E-mail</th>
    </tr>
  </thead>
  <tbody>  
  {todo.map(user =><tr key={user.id}>
    <th scope="row">{user.id} </th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
  </tr>
     )}
       </tbody>
</table>
  </div>
    </div>
  );
}

export default Api;
