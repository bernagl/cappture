import { AGREGAR_EVENTO, GET_EVENTOS, TOGGLE_EVENTO } from '../actions/types'
import { REHYDRATE, PURGE } from 'redux-persist'
import moment from 'moment'

// const INITIAL_STATE = {
//   data: {},
//   materia: []
// }

export default function(state = [], action) {
  let eventos = []
  switch (action.type) {
    case AGREGAR_EVENTO:
      eventos = [...state, action.payload]
      eventos.sort((a, b) => {
        return new Date(a.fecha) - new Date(b.fecha)
      })
      return eventos
    case GET_EVENTOS:
      let materia = {}
      for (const id in state.data) {
        id === action.payload && (materia = state.data[id])
      }

      // console.warn('materia', materia)
      return Object.keys(materia).length > 0
        ? { ...state, materia: [...materia[action.payload]] }
        : { ...state, materia: [] }
    //   revisar que que me hace el segundo filtro sobre los eventos que ya habia filtrado por eso ya no muestra nada
    case TOGGLE_EVENTO:
      console.log(state)
      eventos = state.map(
        evento =>
          evento.id === action.payload
            ? { ...evento, status: !evento.status }
            : evento
      )
      return eventos
    // case REHYDRATE:
    // return []
    // case PURGE:
    //   return INITIAL_STATE
    default:
      return state
  }
}
