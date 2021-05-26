import { useState } from 'react';
import AddUser from './component/Users/AddUser';
import './App.css';
import UsersList from './component/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);
  
  const handleAddUser = (name, age) => {
    console.log(name, age)
    setUserList(prevState => {
      return [...prevState, {name, age, key: Math.random().toString()}]
    })
    console.log(userList)
  }
  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
