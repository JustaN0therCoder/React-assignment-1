import React from 'react';

const UserInput = (props) => {
  return(
    <div className="UI">
      <input onChange={props.changed} value={props.value} ></input>
    </div>
  )
}

export default UserInput;
