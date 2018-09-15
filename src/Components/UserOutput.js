import React from 'react';

const UserOutput = (props) => {
  return(
    <div className="UO">
      <p>Hello world!</p>
      <p onClick={props.click}>Username: {props.userName} </p>
    </div>
  )
}

export default UserOutput;
