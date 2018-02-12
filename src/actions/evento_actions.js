import { AGREGAR_EVENTO, GET_EVENTOS } from './types'

export const agregarEvento = evento => dispatch => {
  dispatch({ type: AGREGAR_EVENTO, payload: evento })
}

export const getEventos = id => dispatch => {
  dispatch({ type: GET_EVENTOS, payload: id })
}
