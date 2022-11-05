import {combineReducers, createStore} from 'redux'
import { DailogsPageReducer } from "./DialogsPage-reducer"
import { NavbarReducer } from './Navbar-reducer'
import { ProfilePageReducer } from "./PofilePage-reducer"
import { UsersPageReducer } from "./UsersPage-reducer"

let reducers = combineReducers({
    ProfilePage: ProfilePageReducer,
    DialogsPage: DailogsPageReducer,
    UsersPage: UsersPageReducer,
    Navbar: NavbarReducer,
    
    
})


let store = createStore(reducers)
window.store = store
console.log(store.getState())
export default store