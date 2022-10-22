import React from "react";
var date = new Date();
var y=date.getFullYear();
function Footer(){
    return( 
        <footer>
            <p>Copyrite@{y}</p>
        </footer>
    );
}
export default Footer;