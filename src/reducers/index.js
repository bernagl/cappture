import { combineReducers } from 'redux'
import materias from './materia_reducer'
import eventos from './evento_reducer'

export default combineReducers({ auth: () => ({}), eventos, materias })
