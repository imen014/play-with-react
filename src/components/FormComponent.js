import React from "react";

function MyForm(){
    return (
        <div style={{
            color:'GrayText',
            background: "green"

        }}>

            <form action="#" method="post">
            username : <input type="text" placeholder="enter username" /><br/>
            hobby : <input type="text" placeholder="enter ur hobby" /><br/>
            profession : <input type="text" placeholder="enter profession" /><br/>
            <input type="submit" value="save" />




            </form>
        </div>
    )
}

export default MyForm;