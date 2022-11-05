import { useState } from "react";
import React from "react";
function Form(){
    const [name,setName]=useState();
    const [f,setFinalName]=useState(" ");
    function textChange(event){
        console.log(event.target.value)
        setName(event.target.value)
    }
    function buttonHandler(event){
          setFinalName(name);
          event.preventDefault(); 
    }
    return(
        <div>
            <form onSubmit={buttonHandler}>
            <h1>Hi {f}</h1>
            <label>name:</label>
            <input placeholder="What's your name?" type="text" onChange={textChange}></input>
            { <button /*onClick={buttonHandler}*/>submit</button> }
            </form>
        </div>
    )
}
export default Form;