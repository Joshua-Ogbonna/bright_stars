import {combineReducers} from 'redux'

import {adminReducer} from './adminReducer/reducer'
import {studentReducer} from './studentReducer/reducer'
import { sidebarReducer } from './sidebarReducer/reducer'

export const rootReducer = combineReducers({
    admin: adminReducer,
    student: studentReducer,
    sidebar: sidebarReducer
})