import React from "react"; 
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/PofilePage-reducer";
import MyPosts from "./MyPosts";





let mapStateToPropse = (state) => {
    return {
        postData: state.ProfilePage.postData,
        newPostText: state.ProfilePage.newPostText,
    }
}
let mapDiaspathToPropse = (dispatch) => {
        return {
            updateNewPostText(text) {
                let action = updateNewPostTextActionCreator(text)
                dispatch(action)
            },
            onAddPost() {
                dispatch(addPostActionCreator())
            }
        }
}


const MyPostsContainer = connect(mapStateToPropse, mapDiaspathToPropse)(MyPosts)
    

export default MyPostsContainer