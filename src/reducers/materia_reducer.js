import {
  ACTUALIZAR_MATERIA,
  AGREGAR_MATERIA,
  GET_MATERIA
} from '../actions/types'
import { REHYDRATE, PURGE } from 'redux-persist'

export default function(state = [], action) {
  switch (action.type) {
    case AGREGAR_MATERIA:
      const id = Math.random()
        .toString(36)
        .substr(2, 9)
      return [{ id: id, ...action.payload }, ...state]
    case ACTUALIZAR_MATERIA:
      const materias = state.map((materia, key) => {
        return materia.id === action.payload.id
          ? (state[key] = action.payload)
          : materia
      })
      return [...materias]
      return stae
    case GET_MATERIA:
      return state.find(materia => materia.nombre === action.payload)
    case REHYDRATE:
      return action.payload.materias || []
    case PURGE:
      return {}
    default:
      return state
  }
}

// const orderByHour = (dia, materias) => {
//   materias.sort((a, b) => {
//     return new Date(a.dia.inicio) - new Date(b.fecha)
//   })
// }
