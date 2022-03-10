import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import * as actions from './todos.actions';
 
export const initialState : Todo[] = [
  new Todo('Salvar al Mundo'),
  new Todo('Matar a Thanos'),
  new Todo('Robar traje de Ironman'),
  new Todo('Pedirle escudo a Capitan America')



];
 
const _todoReducer = createReducer(
  initialState,
  on(actions.borrar, (state, {id}) => state.filter(valor => valor.id !== id)),
  on(actions.crear, (state, {texto}) =>[...state, new Todo(texto)]),
  on(actions.borrarCompletados, (state) => state.filter(todo => !todo.completed)),
  on(actions.toggle, (state, {id}) =>
  {
    return state.map(
      todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed : !todo.completed

          }
          
        }else{
          return todo
        }
      }
    )

  }
  ),
  on(actions.toggleAll, (state, {completed}) =>
  {
    return state.map(
      todo => {
          return {
            ...todo,
            completed

          }
          
      
      }
    )

  }
  ),
  on(actions.editar, (state, {id,texto}) =>
  {
    return state.map(
      valor => {
        if (valor.id === id) {
          console.log("Valor",valor)
          console.log("texto",texto)
          return {
            ...valor,
            texto : texto

          }
          
        }else{
          return valor
        }
      }
    )

  }
  )

);
 
export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}