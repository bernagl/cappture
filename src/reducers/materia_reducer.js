import { AGREGAR_MATERIA, GET_MATERIA } from '../actions/types'
import { REHYDRATE, PURGE } from 'redux-persist'

export default function(state = [], action) {
  switch (action.type) {
    case AGREGAR_MATERIA:
      return [...state, action.payload]
    case GET_MATERIA:
      return state.find(materia => materia.nombre === action.payload)
    case REHYDRATE:
      // return action.payload.materias || []
      if (action.payload) {
        return action.payload.materias
      }
      return []
    case PURGE:
      return {}
    default:
      return state
  }
}
