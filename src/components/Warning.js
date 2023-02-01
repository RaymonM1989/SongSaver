import React from 'react';


function Warning (props)
{
    return(
        <p id="warning" style={{color:props.color}}>{props.message}</p>
    );
}

export default Warning;