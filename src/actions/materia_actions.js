import { AGREGAR_MATERIA } from './types'

export const agregarMateria = materia => dispatch => {
  dispatch({ type: AGREGAR_MATERIA, payload: materia })
}
