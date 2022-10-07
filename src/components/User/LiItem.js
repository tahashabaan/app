import React from 'react'

const LiItem = (props) => {
 props.onClick(props.id)
  return (
  <li >{props.children}</li>
  )
}

export default LiItem;