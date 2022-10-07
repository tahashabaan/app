import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
import  React , {useState}  from 'react';
const App = () => {
  const [userList , setUserList] = useState([]);
  const onAddUserHandler = (dateUser) => {
    setUserList(preList  => {
      const setDateUser=[...preList];
      setDateUser.unshift(dateUser);
      return setDateUser;
    })
  }
  // const onUSerHandler = (listId) => {
  //   console.log(listId)
  //   // setUserList(preList  => 
  //   //   preList.id !== listId)
  // }

console.log(userList);
  return (
    <div>
      <AddUser 
        onAddUser={onAddUserHandler}>
        </AddUser>
      <UserList 
       users={userList} 
      ></UserList>
  


    </div>
  )
}

export default App;
