import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';
 
export const initialState : actions.filtrosPermitidos = "todos";
 
const _filtroReducer = createReducer<actions.filtrosPermitidos, Action>(
  initialState,
  on(actions.setFiltro, (state, {filtro}) => filtro)
);
 
export function fltroReducer(state: actions.filtrosPermitidos | undefined, action: Action) {
  return _filtroReducer(state, action);
}