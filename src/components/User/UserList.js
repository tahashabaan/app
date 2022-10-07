import React from 'react'
import Cards from '../Ul/Cards';
import LiItem from './LiItem';
import classes from '../User/UserList.module.css'; 
const UserList = (props) =>{
  const onUSerHandler = (listId) => {
    console.log(listId)
    // setUserList(preList  => 
    //   preList.id !== listId)
  }
    return (
  <Cards className={classes.users}>
    <ul>
      {
        props.users.map(list =>
          <LiItem
           onClick={onUSerHandler} 
           key={list.id} 
           id={list.id} >
            {list.name}   
            ({list.age} years old) 
          </LiItem>)
      }
    </ul>
  </Cards>
  )
}
export default UserList;