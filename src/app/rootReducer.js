import {combineReducers} from 'redux'

import {adminReducer} from './adminReducer/reducer'
import {studentReducer} from './studentReducer/reducer'

export const rootReducer = combineReducers({
    admin: adminReducer,
    student: studentReducer
})