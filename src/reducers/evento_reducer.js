import {
  AGREGAR_EVENTO,
  GET_EVENTOS,
  SET_EVENTO_CUMPLIDO
} from '../actions/types'
import { REHYDRATE, PURGE } from 'redux-persist'
import moment from 'moment'

const INITIAL_STATE = {
  data: {},
  materia: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AGREGAR_EVENTO:
      // console.warn(state)
      const eventosMateria = state.data[action.payload.id] || {}
      const eventos = [...eventosMateria, action.payload.evento]
      eventos.sort((a, b) => {
        return new Date(b.fecha) - new Date(a.fecha)
      })
      const data = {
        [action.payload.id]: eventos
      }
      return {
        ...state,
        data: { ...state.data, [action.payload.id]: data }
      }

      return state
    //   return { ...state, [action.payload.id]: eventos }
    case GET_EVENTOS:
      //   const filtroMateria = state.find(id => id === payload.id)
      //   const filtroMateria = Object.entries(state)
      //   console.warn(state)
      //   console.warn(filtroMateria)
      let materia = {}
      for (const id in state.data) {
        id === action.payload && (materia = state.data[id])
      }

      // console.warn('materia', materia)
      return Object.keys(materia).length > 0
        ? { ...state, materia: [...materia[action.payload]] }
        : { ...state, materia: [] }
    //   revisar que que me hace el segundo filtro sobre los eventos que ya habia filtrado por eso ya no muestra nada
    // case SET_EVENTO_CUMPLIDO:
    //   state.data[action.payload.materia].map(evento => {

    //   })
    //   return
    case REHYDRATE:
      return action.payload.eventos || { data: {}, materia: [] }
    //   if (action.payload.eventos) {
    //     return action.payload.eventos
    //   }
    //   return {}
    case PURGE:
      return INITIAL_STATE
    default:
      return state
  }
}
