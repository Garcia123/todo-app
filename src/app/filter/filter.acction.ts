import { Action } from '@ngrx/store';

export enum AcctionTypeFilter {
    SET_FILTER = "[Filter] set filter"
}

export type filtrosValidos = "todos" | "completados" | "pendientes";

export class SetFiltroAction implements Action {
    readonly type = AcctionTypeFilter.SET_FILTER;
    constructor(public filtro: filtrosValidos){}
}

export type acciones = SetFiltroAction;