import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsers = async () => {
    const res = await axios.get('http://localhost:5000/users');
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">User Management</h1>
      <UserForm getUsers={getUsers} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <UserList users={users} getUsers={getUsers} setSelectedUser={setSelectedUser} />
    </div>
  );
};

export default App;
