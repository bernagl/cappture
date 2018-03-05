import { AGREGAR_EVENTO, GET_EVENTOS, TOGGLE_EVENTO } from './types'
import { PURGE } from 'redux-persist'

export const agregarEvento = evento => dispatch => {
  const id = Math.random()
    .toString(36)
    .substr(2, 9)
  dispatch({ type: AGREGAR_EVENTO, payload: { ...evento, id } })
}

export const getEventos = id => dispatch => {
  dispatch({ type: GET_EVENTOS, payload: id })
}

export const toggleEvento = id => dispatch => {
  console.log(id)
  dispatch({ type: TOGGLE_EVENTO, payload: id })
}
