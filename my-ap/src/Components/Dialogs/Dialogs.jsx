import React from "react";
import Classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/Dialogsitem";
let newPostElement = React.createRef();
function addPost (props)  {
    let text = newPostElement.current.value;
    alert(text)
}
function Dialogs(props) {
    let dataElement=props.data.data.map(d=> <DialogItem id={d.id} name={d.name} />)
    let messageElement = props.data.Messages.map(m => <Message id={m.id} message={m.message}/>);
    return (

        <div className={Classes.dialogs}>
            <div className={Classes.dialogsItems}>
                {dataElement}
            </div>
            <div className={Classes.messages}>
                {messageElement}
            </div>
            <div className={Classes.ars}>
                <textarea cols="50" rows="2" ref={newPostElement} ></textarea>
                <button onClick={addPost}>Send Message</button>
            </div>


        </div>);
}

export default Dialogs;