import React from "react";
import Classes from "./../Dialogs.module.css"



function Message(props) {
    return (
        <div className={Classes.messages}>{props.message}</div>
    );
}




export default Message;