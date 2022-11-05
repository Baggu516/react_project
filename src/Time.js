import React, { useState } from "react";
function Time(){
    var t= new Date().toLocaleDateString();
    const [c,f]=useState(t);
   
    function newTime(){
       const a=new Date().toLocaleDateString();
       f(a) ;
    }
    return( 
        <div>
            <h1>{c}</h1>
            <button onClick={newTime}>Change</button>
        </div>

    );
}
export default Time;