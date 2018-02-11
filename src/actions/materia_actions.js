import { AGREGAR_MATERIA } from './types'

export const agregarMateria = materia => dispatch => {
  console.warn(materia)
  dispatch({ type: AGREGAR_MATERIA, payload: materia })
}
