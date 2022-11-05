import { useState } from "react";
import React from "react";
function ComplexForm(){
    const [fullName,setName]=useState({
        fName:"",lName:""
    });
    const [f,setFinalName]=useState(" ");//for button
    function handleChange(event){
        var v=event.target.value;
        var n=event.target.name;
        setName(prevValue =>{
            if(n==="f1"){
                return{
                    fName:v,
                    lName:prevValue.lName

                }}
            else{
                return{
                    fName:prevValue.fName,
                    lName:v

            }
            }
            console.log(prevValue);
        })
        // console.log(event.target.value);
        // console.log(event.target.name);
        // setName(event.target.value)
    }
    function buttonHandler(event){
           setFinalName(fullName);
           event.preventDefault();
    }
    return(
        <div>
            <form onSubmit={buttonHandler}>
            <h1>Hi{fullName.fName}{fullName.lName}</h1>
            <input name="f1" placeholder="What's your name?" type="text" onChange={handleChange}></input>
            <input name="l1" placeholder="What's your name?" type="text" onChange={handleChange}></input>
            <button /*onClick={buttonHandler}*/>submit</button> 
            <h1>{fullName.fName}{fullName.lName}</h1>
            </form>
        </div>
    )
}
export default ComplexForm;