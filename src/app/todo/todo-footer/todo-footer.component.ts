import { BorrarTodoAcction, BorrarAllTodoAcction } from './../todo.acctions';
import { Todo } from './../model/todo.model';
import { SetFiltroAction } from './../../filter/filter.acction';
import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { filtrosValidos } from 'src/app/filter/filter.acction';



@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes:number;

  filtrosValidos:Array<filtrosValidos> = ["todos", "completados", "pendientes"];
  filtroActual:filtrosValidos;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(filtro:filtrosValidos){
    const accion = new SetFiltroAction(filtro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos:Array<Todo>){
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  borrarTodo(){
    let acction = new BorrarAllTodoAcction();
    this.store.dispatch(acction);
  }

}
