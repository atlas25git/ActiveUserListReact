import React from 'react';
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList';
import {useState} from 'react';

function App() {

  const [usersList,setUsersList] = useState([]);
  const addUserHandler = (uName,uAge) => {
    setUsersList((prev)=>{
      return [...prev,{name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
