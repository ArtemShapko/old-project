let initialState = {
    messagesData: [
        {id: 1,message: 'Привет'},
        {id: 2,message: 'Привет'},
        {id: 3,message: 'Привет'},
        {id: 4,message: 'Привет'},
        {id: 5,message: 'Привет'},

      ],
      dialogsData:[
        {id: 1,name: 'Artem_1'}, 
        {id: 2,name: 'Artem_2',},
        {id: 3,name: 'Artem_3',},
        {id: 4,name: 'Artem_4',},
        {id: 5,name: 'Artem_5',},
      ],
      newMessageText: "эй, привет как дела",
}
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const DailogsPageReducer = (state = initialState, action) => {
  const stateCopy = {...state}
  stateCopy.messagesData = [...state.messagesData]
    if (action.type === 'ADD-MESSAGE') {
        let newMessage = {
          id: 1,
          message: state.newMessageText,
      }
      stateCopy.messagesData.push(newMessage)
      } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        stateCopy.newMessageText = action.newText

    }
    return stateCopy

}
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text 
  }
}
