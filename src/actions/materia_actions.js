import { AGREGAR_MATERIA, GET_MATERIA } from './types'

export const agregarMateria = materia => dispatch => {
  dispatch({ type: AGREGAR_MATERIA, payload: materia })
}

export const getMateria = materia => dispatch => {
  dispatch({ type: GET_MATERIA, payload: materia })
}
