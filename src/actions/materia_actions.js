import { ACTUALIZAR_MATERIA, AGREGAR_MATERIA, GET_MATERIA } from './types'

export const actualizarMateria = materia => dispatch => {
  dispatch({ type: ACTUALIZAR_MATERIA, payload: materia })
}

export const agregarMateria = materia => dispatch => {
  dispatch({ type: AGREGAR_MATERIA, payload: materia })
}

export const getMateria = materia => dispatch => {
  dispatch({ type: GET_MATERIA, payload: materia })
}
