import { combineReducers } from 'redux'
import materias from './materia_reducer'

export default combineReducers({ auth: () => ({}), materias })
