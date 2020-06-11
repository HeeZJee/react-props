import React from 'react';


const Gate = (props) => (

    <div> The door is {props.isOpen === true ? "open" : "close"} </div>
)

export default Gate;