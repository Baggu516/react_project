import { useState } from "react";
import './App.css';
import React from "react";
import Emoji from "./Emoji";

function Form1(){
    const [r,setRoll]=useState();
    const [s,setSem]=useState("I");
    function textChange(event){
        setRoll(event.target.value)
    }
    function textChange1(event){
        setSem(event.target.value)
    }
    function buttonHandler(){
       console.log(Emoji.length);
       console.log(Emoji[0][s],typeof(s));
       console.log(s);
        var c=0;
        for(var i=0;i<Emoji.length;i++){
            if(r===Emoji[i].ROLLNO){
                alert("YOUR CGPA IS"+" ---> "+Emoji[i][s]);
                c+=1
                break;
            }
        }
        if(c===0){
            alert("YOUR RESULT IS NOT AVALIABLE");
        }
       }
    return(
        <div className="bak">
            <form>
                <label>Roll_No:</label>
                <input placeholder="ENTER IN CAPS" type="text" onChange={textChange}></input><br/>
                <label>Semester:</label>
                <input placeholder="ENTER IN ROMANS" type="text" onChange={textChange1}></input><br/>

                <button onClick={buttonHandler}>submit</button>
            </form>
        </div>
    )}
    export default Form1;