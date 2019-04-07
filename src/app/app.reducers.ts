import { filtrosValidos } from './filter/filter.acction';
import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';


export interface AppState {
    todos :Array<Todo>;
    filtro:filtrosValidos;
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos:todoReducer,
    filtro:filterReducer
}