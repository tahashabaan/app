import React, { useState , useRef } from 'react';
import Button from '../Ul/Button';
import Cards from '../Ul/Cards';
import classes from './AddUser.module.css';
import './AddUser.css';
import ErrorModal from '../Ul/ErrorModal';
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userName , setUserName] = useState('');
  const [userAge , setUserAge] = useState();
  const [error , setError] = useState();
  const onSubmitHandler = (e) => {
   
      e.preventDefault();
  if(userAge.length === 0 || userName.length === 0 ){
    setError({
      title:"input invaild",
      message:"please enter username And Age (no empty value)"
    })
  }
  else if(+userAge < 0){
    setError({
      title:"input invaild",
      message:"please eneter Age correct"
    })
  }
  else {
    const dateUser={
      name:userName,
      age:userAge,
      id:Math.random().toString()
    }
    setUserName('');
    setUserAge('');
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
     props.onAddUser(dateUser);
  }
     
    }
  const onchangeNameHandler = (e) => {
    setUserName(e.target.value);
  }
  const onchangeAgeHandler = (e) => {
    setUserAge(e.target.value);
  }
  const onErrorHandler = () => {
    setError(null);
  }
  return (
    <div> 
   <Cards className={classes.input}>
   {error && <ErrorModal 
    title={error.title} 
    message={error.message}
    onClick={onErrorHandler} 
    />}
     <form 
     onSubmit={onSubmitHandler}>
    <label htmlFor='user-name'>
      Username/
    </label>
    <input 
      type='text' 
      id='user-name'
      value={userName} 
      onChange={onchangeNameHandler}
      ref={nameInputRef}
      > 
    </input>
    <label htmlFor='Age'>
      Age (years old)
    </label>
    <input 
    value={userAge}
     type='text' 
     id='Age'
     onChange={onchangeAgeHandler}
     ref={ageInputRef}
    > 
    </input>
    
    <Button type='submit'>add user</Button>    
   </form>
  </Cards> 
  </div>
  )
}

export default AddUser