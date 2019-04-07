import { Action } from '@ngrx/store'; 

export enum AcctionType {
    AGREGAR_TODO = "[TODO] Agregar todo",
    TOGGLE_TODO ="[TODO] Toggle todo",
    TOGGLE_ALL_TODO ="[TODO] Toggle all todo",
    EDITAT_TODO ="[TODO] Editar todo",
    BORRAR_TODO ="[TODO] Borrar todo",
    BORRAR_ALL_TODO ="[TODO] Borrar all todo",
    
}

export class AgregarTodoAcction implements Action {
    readonly type: string = AcctionType.AGREGAR_TODO;
    text:string;
    constructor(texto:string){ 
        this.text = texto;
    }
}

export class ToggleTodoAcction implements Action {
    readonly type: string = AcctionType.TOGGLE_TODO;
    id:number;
    constructor(id:number){ 
        this.id = id;
    }
}

export class ToggleAllTodoAcction implements Action {
    readonly type: string = AcctionType.TOGGLE_ALL_TODO;
    completado:boolean;
    constructor(completado:boolean){ 
        this.completado = completado;
    }
}

export class EditarTodoAcction implements Action {
    readonly type: string = AcctionType.EDITAT_TODO;
    id:number;
    texto:string;

    constructor(id:number, texto:string){ 
        this.id = id;
        this.texto = texto;
    }
}

export class BorrarTodoAcction implements Action {
    readonly type: string = AcctionType.BORRAR_TODO;
    id:number;
    constructor(id:number){ 
        this.id = id;
    }
}

export class BorrarAllTodoAcction implements Action {
    readonly type: string = AcctionType.BORRAR_ALL_TODO;
    constructor(){}
}


export type Acciones = ToggleAllTodoAcction 
                        | AgregarTodoAcction | ToggleTodoAcction
                        | EditarTodoAcction | BorrarTodoAcction 
                        | BorrarAllTodoAcction;