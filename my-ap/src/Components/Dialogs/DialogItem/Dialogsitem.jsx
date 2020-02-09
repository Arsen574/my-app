import React from "react";
import Classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom"

function DialogItem(props) {
    return (
        <div className={Classes.dialog + ' ' + Classes.active}>
            <NavLink to={ '/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}




export default DialogItem;