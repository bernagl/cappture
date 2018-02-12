import { AGREGAR_EVENTO, GET_EVENTOS, SET_EVENTO_CUMPLIDO } from './types'

export const agregarEvento = evento => dispatch => {
  dispatch({ type: AGREGAR_EVENTO, payload: evento })
}

export const getEventos = id => dispatch => {
  dispatch({ type: GET_EVENTOS, payload: id })
}

export const setEventoCumplido = id => dispatch => {
  dispatch({ type: SET_EVENTO_CUMPLIDO, payload: id })
}
