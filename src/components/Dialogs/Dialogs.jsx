import React, { createRef } from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css' 
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.DialogsData.map(currentValue => <DialogItem name={currentValue.name} id={currentValue.id}/>)
    let messagesElements = props.messagesData.map(currentValue => <Message message={currentValue.message} id={currentValue.id}/>)
    let mesessageRow = React.createRef()
    const addMessage = () =>  {
        props.addMessage()

    } 
    let onMessageChange = () => {
        let text = mesessageRow.current.value
        props.onMessageChange(text)

    }

    return (
        <div className={classes.dialogs}>
        <div className={classes.dialogs__messages}>
            <div className={classes.dialogsItems}>
                {
                    dialogsElements
                }
            </div>
             <div className={classes.messages}>
                {
                messagesElements
                }
            </div> 
            </div>
            <div>
            <from>
                <input onChange={onMessageChange} ref={mesessageRow} value={props.newMessageText}></input>
                <button onClick={addMessage}>Кнопка</button>
            </from>
        </div>
        </div>
    )
}

export default Dialogs



