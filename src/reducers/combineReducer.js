import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import {chatReducer} from '../redux/chat.redux'
import { chatUser } from './chatUserReducer'
import { applicationReducer } from './applicationReducer'
import { friendshipReducer } from './friendshipReducer'

export default combineReducers({userReducer, chatReducer, chatUser, applicationReducer,friendshipReducer});
