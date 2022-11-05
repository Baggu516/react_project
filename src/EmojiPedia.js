import React from "react";
function EmojiPedia(props){
    return( 
           <div className="Emojii">
            <h1>{props.name}</h1>
            <p>{props.content}</p>
  
            </div>
    );
}
export default EmojiPedia;