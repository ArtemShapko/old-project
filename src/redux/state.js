import { DailogsPageReducer } from "./DialogsPage-reducer"
import { profilePageReducer } from "./pofilePage-reducer"



let store = {
  _state: {
    profilePage: {
        postData:[
            {id:1, post:'Что-то тут', like:21},
            {id:2, post:'И что-то здесь', like:22},
          ],
          newPostText: "эй, привет как дела",
    },
    DialogsPage: {
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
    },
    navbar: {
      frendsData:
      [{id:1, frend:'никита'},
        {id:2, frend:'игорь'},
        {id:2, frend:'игорь'},
      ]
    }
},
  getState() {
    return this._state
  },
  subscripe(observer) {
    this._callSubscriber = observer
  },
  _callSubscriber() { 
},
dispatch(action) {
  this._state.profilePage = profilePageReducer(this._state.profilePage, action)
  this._state.DialogsPage =  DailogsPageReducer(this._state.DialogsPage, action)
  this._callSubscriber(this._state)
}
}
export default store

