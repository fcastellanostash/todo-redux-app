import { Todo } from "./models/todo.model";
import { filtrosPermitidos } from './filtros/filtro.actions';
import { ActionReducerMap } from "@ngrx/store";
import { todoReducer } from "./todos/todo.reducer";
import { fltroReducer } from "./filtros/filtro.reducer";


export interface AppState{

    todos : Todo[];
    filtros : filtrosPermitidos
}

export const AppReducer : ActionReducerMap<AppState> = {
    todos : todoReducer,
    filtros : fltroReducer
}