import { Acciones, AcctionType, AgregarTodoAcction, ToggleTodoAcction, EditarTodoAcction, BorrarTodoAcction, ToggleAllTodoAcction, BorrarAllTodoAcction } from './todo.acctions';
import { Todo } from './model/todo.model';

const todo1 = new Todo("Vencer a thanos");
const todo2 = new Todo("Salvar el mundo");

todo2.completado = true;

const estadoInicial: Array<Todo> = [todo1, todo2];

export function todoReducer(state:Array<Todo> = estadoInicial, acction: Acciones){
    switch(acction.type){
        
        case AcctionType.AGREGAR_TODO:
            let acctionAdd = acction as AgregarTodoAcction;
            const todo = new Todo(acctionAdd.text);
            return [... state, todo ];
        
        case AcctionType.TOGGLE_TODO:
            let acctionTogle = acction as ToggleTodoAcction;
            return state.map(item => {
                if(item.id == acctionTogle.id){
                    return { ...item, completado:!item.completado };
                }else{
                    return item;
                }
            });

        case AcctionType.EDITAT_TODO:
            let acctionEditar = acction as EditarTodoAcction;
            return state.map(item => {
                if(item.id == acctionEditar.id){
                    return { ...item, texto: acctionEditar.texto };
                }else{
                    return item;
                }
            });

        case AcctionType.BORRAR_TODO:
            let acctionBorrar = acction as BorrarTodoAcction;
            return state.filter(item => item.id !== acctionBorrar.id);
        
        case AcctionType.TOGGLE_ALL_TODO:
            let acctionAll = acction as ToggleAllTodoAcction;
            return state.map(item => { return {...item, completado:acctionAll.completado}});
        
        case AcctionType.BORRAR_ALL_TODO:
            return state.filter(item => !item.completado);
            
        default: 
            return state;
    }
}