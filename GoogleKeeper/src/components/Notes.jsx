/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
function Notes(props)
{
    return(
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        </div>
    );
}
export default Notes;