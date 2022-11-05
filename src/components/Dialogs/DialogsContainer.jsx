import React from "react"; 
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/DialogsPage-reducer";
import Dialogs from "./Dialogs";



let mapStateToPropse = (state) => {
    return {
        DialogsData: state.DialogsPage.dialogsData,
        messagesData: state.DialogsPage.messagesData,
        newMessageText: state.DialogsPage.newMessageText
    }
}
let mapDiaspathToPropse = (dispatch) => {           
    return {
        onMessageChange(text) {
            let action = updateNewMessageTextActionCreator(text)
            dispatch(action)
        },
        addMessage() {
            dispatch(addMessageActionCreator())
        }
    }    
}

const DialogsContainer = connect(mapStateToPropse,mapDiaspathToPropse)(Dialogs)




export default DialogsContainer 