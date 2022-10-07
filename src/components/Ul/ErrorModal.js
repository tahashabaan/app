import React from 'react'
import Cards from './Cards'
import Button from './Button'
import classes from './ErrorModal.module.css'
const ErrorModal = (props) => {
  return (
    <Cards className={classes.modal}>
      <header className={classes.header}><h2>{props.title}</h2></header >
      <main className={classes.content}>
        <p>{props.message}</p>
      </main>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Okay</Button></footer>
    </Cards>
  )
}

export default ErrorModal